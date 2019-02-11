const MenuController = require("../controllers/MenuController");
// #1
//calling the describe method and passing MenuController as name of the test suite.
describe("MenuController", () => {
    beforeEach(() => {
      this.menu = new MenuController();
    });

  describe("#getContactCount()", () => {

    //2
    it("should return 0 when no contacts arein the book", () => {
      expect(this.menu.getContactCount()).toBe(0);
    });

    it("should return 1 when there is exactly one contact in the book", () => {
      this.menu.contacts.push("Bob");
      expect(this.menu.getContactCount()).toBe(1)
    });
  });

  describe("#remindMe()", () => {

    it("should return a string containing text", () => {
      expect(this.menu.remindMe()).toEqual('Learning is a life-long pursuit')
    });
  });
});
