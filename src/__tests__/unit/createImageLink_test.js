const { createImageLink } = require("../../helpers");
const { port } = require("../../config");

test("should create proper image link", () => {
  const imageName = "home.jpb";
  const imageLink = `http://localhost:${port}/${imageName}`;

  const results = createImageLink(imageName);
  expect(results).toBe(imageLink);
});
