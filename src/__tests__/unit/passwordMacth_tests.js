const { checkPassword, hashPassword } = require("../../helpers");

test("Password should match", async () => {
  const password = "pass1";
  const hashPass = await hashPassword(password);
  const results = await checkPassword(password, hashPass);
  expect(results).toBeTruthy();
});
