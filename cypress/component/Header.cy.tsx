import Header from '../../src/components/Header/Header'

describe('<Header />', () => {
  it('renders', () => {
    cy.mount(<Header />)
  })
})