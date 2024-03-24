import { Provider } from "react-redux";
import Header from "../../src/components/Header/Header";
import store from "../../src/redux/store";

describe('Navbar Component', () => {
  beforeEach(() => {
    cy.mount(
      <Provider store={store}>
        <Header />
      </Provider>
    );
  });

  it('displays the logo', () => {
    cy.get('.logo-icon').should('be.visible');
  });

  it('displays the title', () => {
    cy.get('.booking-engine-text').should('be.visible');
  });

  it('opens language menu on language icon click', () => {
    cy.get('.language-icon').click();
    cy.get('.language-menu').should('be.visible');
  });


  it('opens currency menu on currency text click', () => {
    cy.get('.currency-text').click();
    cy.get('.currency-menu').should('be.visible');
  });

});
