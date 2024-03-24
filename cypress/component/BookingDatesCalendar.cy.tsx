import BookingDatesCalendar from "../../src/components/Calendar/Calendar";
import { Provider } from "react-redux";
import store from "../../src/redux/store";
import { SetStateAction } from "react";

const placeholderTileContent = ({ date }: { date: Date }) => (
  <div>'$'{date.toLocaleDateString()}</div>
);

const propertyRates = {
  "2024-03-18": 100,
};

describe("<BookingDatesCalendar />", () => {
  beforeEach(() => {
    cy.mount(
      <Provider store={store}>
        <BookingDatesCalendar
          tileContent={placeholderTileContent}
          propertyRates={propertyRates} checkInDate={null} setCheckInDate={function (_value: SetStateAction<Date | null>): void {
            throw new Error("Function not implemented.");
          } } checkOutDate={null} setCheckOutDate={function (_value: SetStateAction<Date | null>): void {
            throw new Error("Function not implemented.");
          } }        />
      </Provider>
    );
  });

  it("should display correct label text", () => {
    cy.get('[data-testid="calendar-label"]').should(
      "contain",
      "landingPage.calendarLabel"
    );
  });

  it("should display default check-in and check-out dates", () => {
    cy.contains("landingPage.checkIn").should("exist");
    cy.contains("landingPage.checkOut").should("exist");
  });

  it("should open calendar on button click", () => {
    cy.get('[data-testid="calendar-icon-button"]').click();
    cy.get('[data-testid="double-calendar-container"]').should("be.visible");
  });

  it("should select check-in and check-out dates", () => {
    cy.get('[data-testid="calendar-icon-button"]').click();
    cy.get(".react-calendar__tile--now").first().click();

    cy.get(".react-calendar__tile--now").last().click();

    cy.get('[data-testid="submit-button"]').click();
  });

  it("should display error if check-out date is before check-in date", () => {
    cy.get('[data-testid="calendar-icon-button"]').click();
    cy.get(".react-calendar__tile--now").first().click();

    cy.get(".react-calendar__tile--now").first().click();

    cy.get('[data-testid="error-message"]').should("exist");
  });
});
