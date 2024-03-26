import RoomBanner from '../../src/components/RoomBanner/RoomBanner';

describe('RoomBanner Component', () => {
  beforeEach(() => {
    cy.mount(<RoomBanner />);
  });

  it('renders the banner container', () => {
    cy.get('[data-testid="banner-container"]').should('exist');
  });

  it('renders the banner image', () => {
    cy.get('[data-testid="banner-img"]').should('exist');
    cy.get('[data-testid="banner-img"]').should('have.attr', 'src', '/hotel-room-banner.jpg');
    cy.get('[data-testid="banner-img"]').should('have.attr', 'alt', 'banner');
  });
});
