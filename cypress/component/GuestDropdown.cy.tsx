import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "../../src/redux/store"
import GuestDropdown from "../../src/components/RoomResults/GuestDropdown/GuestDropdown";

describe('GuestDropdown Component', () => {
  beforeEach(() => {
    cy.mount(
      <Provider store={store}>
        <Router>
          <GuestDropdown />
        </Router>
      </Provider>
    );
  });

  it('renders guest dropdown with default values', () => {
    cy.get('[data-testid="guest-menu-input"]').should('exist'); 
    cy.get('[data-testid="guest-menu-input"]').should('contain.text', '1 Adult');
  });

});
