import express from "express";
import cors from "cors";

import userServices from "./models/user-services.js";
import user from "./models/user.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", async (req, res) => {
  // res.send(users); this is a very very very very very very very very very long line
  //HTTP code 200 is set by default. See an alternative below
  // res.status(200).send(users);
  const name = req.query["name"];
  const job = req.query["job"];
  if (name === undefined && job === undefined) {
    try {
      const users_from_db = await userServices.getUsers();
      res.send({ users_list: users_from_db });
    } catch (error) {
      console.log("Mongoose error: " + error);
      res.status(500).send("An error ocurred in the server.");
    }
  } else if (name && job === undefined) {
    let result = await userServices.findUserByName(name);
    result = { users_list: result };
    res.send(result);
  } else if (job && name === undefined) {
    let result = await userServices.findUserByJob(job);
    result = { users_list: result };
    res.send(result);
  } else {
    let result = await userServices.findUserByNameAndJob(name, job);
    result = { users_list: result };
    res.send(result);
  }
});

app.get("/users/:id", async (req, res) => {
  const id = req.params["id"];
  const result = await userServices.findUserById(id);
  if (result === undefined || result === null)
    res.status(404).send("Resource not found.");
  else {
    res.send({ users_list: result });
  }
});

app.post("/users", async (req, res) => {
  const user = req.body;
  const savedUser = await userServices.addUser(user);
  if (savedUser) res.status(201).send(savedUser).end();
  else res.status(500).end();
});

async function deleteUserById(id) {
  try {
    if (await userServices.deleteUser(id)) return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

app.delete("/users/:id", async (req, res) => {
  const id = req.params["id"];
  if (deleteUserById(id)) res.status(204).end();
  else res.status(404).send("Resource not found.");
});

app.patch("/users/:id", async (req, res) => {
  const id = req.params["id"];
  const updatedUser = req.body;
  const result = await updateUser(id, updatedUser);
  if (result === 204) res.status(204).end();
  else if (result === 404) res.status(404).send("Resource not found.");
  else if (result === 500) {
    res.status(500).send("An error ocurred in the server.");
  }
});

async function updateUser(id, updatedUser) {
  try {
    const result = await user.findByIdAndUpdate(id, updatedUser);
    if (result) return 204;
    else return 404;
  } catch (error) {
    console.log(error);
    return 500;
  }
}


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});