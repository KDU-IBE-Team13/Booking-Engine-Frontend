import { SelectForm } from "../../src/components/SelectForm/SelectForm";
import { Provider } from "react-redux";
import store from "../../src/redux/store";

describe("Select Form Component Test", () => {
  beforeEach(() => {
    cy.mount(
      <Provider store={store}>
        cy.mount(
        <SelectForm />)
      </Provider>
    );
  });

  it("renders correctly", () => {
    cy.get(".searchForm").should("exist");
  });

  it("displays search button", () => {
    cy.get(".searchForm").find(".searchButton").should("exist");
  });
});
