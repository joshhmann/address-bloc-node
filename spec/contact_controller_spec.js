const ContactController = require("../controllers/ContactController");
const sequelize = require("../db/models/index").sequelize;

describe("ContactController", () => {
//test needs to have a new ContactController instance to work with for every test
  beforeEach((done) => {
    this.book = new ContactController(); //defined instance for each test by using beforeEach call

    //before each test, we want to clear the test db of any entries created.
    //we do a call sync.  models with the force option set true on the sequelize object we required at the top
    sequelize.sync({force: true }).then((res) => {
      done(); //done needs to be called because it is an async operation and need to indicate test is done
    })
    //make sure we provide a catch handler in our async tests to make sure done still gets called when something is wrong
    .catch((err) => {
      done();
    });
  });

  //scope the call to describe to the ContactController suite. We use this nested describe call to group all test related to the addContact method
  it("Should be defined", () => {
    expect(ContactController).toBeDefined();
  });

  describe("#addContact()", () => {
    it("should add a single contact into the book", (done) => {

        this.book.addContact("Alice", "555-555-5555")
        .then((contact) => {
          expect(contact.name).toBe("Alice");
          expect(contact.phone).toBe("555-555-5555");
          done();
        })
        .catch((err) => {
          done();
        });
    });

  });
})
