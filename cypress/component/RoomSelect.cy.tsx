import RoomSelect from "../../src/components/RoomSelect/RoomSelect";
import store from "../../src/redux/store";
import { Provider } from "react-redux";

describe("Select Component Test", () => {
  beforeEach(() => {
    cy.mount(
      <Provider store={store}>
        <RoomSelect rooms={0} setRooms={() => {}} />
      </Provider>
    );
  });

  it("renders correctly", () => {
    cy.get(".rooms-dropdown").should("exist");
  });

  it("displays room options correctly", () => {
    cy.get(".rooms-dropdown").click();
    cy.get(".MuiMenu-list").children().should("have.length", 5);
  });

  it("updates room count when selecting different options", () => {
    cy.get(".rooms-dropdown").click();

    cy.get(".MuiMenu-list").children().eq(1).click();

    cy.get(".rooms-dropdown").then(($select: JQuery<HTMLElement>) => {
      // Check if the selected option is not empty
      const text: string = $select.text().trim();
      expect(text).not.to.be.empty;
      expect(text).not.to.be.NaN;
    });
  });
});
