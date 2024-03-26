import CustomStepper from "../../src/components/RoomResults/Stepper/CustomStepper";

describe('CustomStepper Component', () => {
  beforeEach(() => {
    cy.mount(<CustomStepper />);
  });

  it('renders stepper with correct steps and active step', () => {
    cy.get('.MuiStep-root').should('have.length', 3); 
    cy.get('.MuiStepLabel-label').eq(0).should('contain.text', '1: Choose room'); 
    cy.get('.MuiStepLabel-label').eq(1).should('contain.text', '2: Choose add on');
    cy.get('.MuiStepLabel-label').eq(2).should('contain.text', '3: Checkout');

    cy.get('.MuiStepIcon-root').eq(0).should('have.class', 'completed');
    cy.get('.MuiStepIcon-root').eq(1).should('have.class', 'active'); 
    cy.get('.MuiStepIcon-root').eq(2).should('not.have.class', 'completed'); 
  });

});
