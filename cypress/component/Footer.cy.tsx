import { Provider } from "react-redux";
import Footer from "../../src/components/Footer/Footer";
import store from "../../src/redux/store";

describe("Footer Component", () => {
  beforeEach(() => {
    cy.mount(
      <Provider store={store}>
        <Footer />
      </Provider>
    );
  });

  it("renders correctly with provided props", () => {
    cy.get('[data-testid="logo"]').should("exist");
    cy.get('[data-testid="company-name"]').should("exist");
    cy.get('[data-testid="description"]').should("exist");
  });

  describe("Content", () => {
    it("logo is not empty", () => {
      cy.get('[data-testid="logo"]').should("not.be.empty");
    });

    it("company name is not empty", () => {
      cy.get('[data-testid="company-name"]').should("not.be.empty");
    });

    it("description is not empty", () => {
      cy.get('[data-testid="description"]').should("not.be.empty");
    });
  });
});
