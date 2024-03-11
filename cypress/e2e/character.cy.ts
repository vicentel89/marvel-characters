describe('Character page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.getBySel('character-card-link').first().click();
  });

  it('displays the character page with its layout', () => {
    cy.get('a').contains('Marvel characters').as('homeLink');
    cy.get('@homeLink').get('svg title').contains('Marvel characters');
    cy.get('a').contains('Favorite characters');
    cy.getBySel('character-resume').should('exist');
    cy.getBySel('comics-section').should('exist');
  });

  it('navigates to the home page', () => {
    cy.get('a[href="/"]').click();
    cy.url().should('include', '/');
  });

  it('adds and removes the character from favorites', () => {
    cy.getBySel('favorite-counter').as('favoriteCounter');

    cy.getBySel('favorite-button').click();
    cy.get('@favoriteCounter').contains('1');

    cy.getBySel('favorite-button').click();
    cy.get('@favoriteCounter').contains('0');
  });
});
