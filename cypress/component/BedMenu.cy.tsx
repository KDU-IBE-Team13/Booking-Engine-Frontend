import BedMenu from '../../src/components/RoomResults/BedMenu/BedMenu';

describe('BedMenu Component', () => {
  beforeEach(() => {
    cy.mount(<BedMenu />);
  });

  it('renders select dropdown with default value', () => {
    cy.get('[data-testid="room-count"]').first().should('have.text', '1'); 
  });

  it('updates selected value on dropdown change', () => {
    cy.get('[data-testid="room-count"]').eq(2).click(); 
    cy.get('[data-testid="room-count"]').first().should('have.text', '3'); 
  });

  it('saves selected value to localStorage', () => {
    cy.get('[data-testid="room-count"]').eq(4).click();
    cy.get('[data-testid="room-count"]').first().should('have.text', '5');
    cy.window().its('localStorage.beds').should('eq', '5');
  });
});
