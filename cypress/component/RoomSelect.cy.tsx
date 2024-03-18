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

    cy.get(".MuiMenu-list").children().eq(2).click();

    cy.get(".rooms-dropdown").then(($select: JQuery<HTMLElement>) => {
      const text: string = $select.text().trim();
      const selectedOption: number = parseInt(text, 10);

      expect(selectedOption).to.eq(3);
    });
  });
});
