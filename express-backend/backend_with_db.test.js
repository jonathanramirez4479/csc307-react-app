import userServices from './models/user-services';

const mongoose = require("mongoose");
const ObjectId = require("mongoose").Types.ObjectId;

beforeEach(() => {
  jest.resetModules();
});

test("test bad connection", async () => {
  process.env.MONGO_CLUSTER = "doesntexist";
  let result = await userServices.findUserByName("mathew");
 // THIS SHOULD NOT PASS BUT IT DOES?
 
  // expected = {
  //   _id: ObjectId("600f49555f2c7e977e0652c8"),
  //   job: "Mailman",
  //   name: "Joe",
  // };

  expect(result[0].name).toBe("mathew");
  expect(result[0].job).toBe("scientist");
});

test("test db query user Joe", async () => {
  let result = await userServices.findUserByName("mathew");

  // expected = {
  //   _id: ObjectId("600f49555f2c7e977e0652c8"),
  //   job: "Mailman",
  //   name: "Joe",
  // };

  expect(result[0].name).toBe("mathew");
  expect(result[0].job).toBe("scientist");
});

// afterAll(async () => {
//   await userServices.disconnectDB();
// });