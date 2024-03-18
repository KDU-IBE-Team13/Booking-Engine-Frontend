import PropertyDropDown from "../../src/components/PropertyDropDown/PropertyDropDown";
import store from "../../src/redux/store";
import { Provider } from "react-redux";

describe("PropertyDropDown Component", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/v1/property", { fixture: "properties.json" }).as(
      "getProperties"
    );
    cy.mount(
      <Provider store={store}>
        <PropertyDropDown />
      </Provider>
    );
  });

  it("should fetch properties", () => {
    cy.wait("@getProperties");
    cy.get('[data-testid="property-label"]').click();
  });

  it("should display properties", () => {
    cy.wait("@getProperties");
    cy.get(".MuiSelect-select").click();
    cy.get(".MuiSelect-select").should("have.length", 1);
  });
});
