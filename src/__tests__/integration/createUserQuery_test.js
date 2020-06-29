const mongoose = require("mongoose");
const { createUser } = require("../../database/queries");
const userModel = require("../../database/models/userModel");

let dbURL = "mongodb://localhost/holidayhomes_testdb";

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

describe("should create user", () => {
  beforeAll(async () => {
    await userModel.deleteOne({});
  });

  afterEach(async () => {
    await userModel.deleteOne({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test("user model should exist", async () => {
    expect(userModel).toBeDefined();
  });

  test("should insert a document in collection", async () => {
    const userdata = {
      name: "malik",
      email: "mailk@email.com",
      password: "pass1",
    };
    const user = await createUser(userdata);

    expect(user.email).toBe(userdata.email);
  });
});
