const MenuController = require("../controllers/MenuController");
// #1
//calling the describe method and passing MenuController as name of the test suite.
describe("MenuController", () => {
    beforeEach(() => {
      this.menu = new MenuController();
    });
});
