describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the home page with its layout', () => {
    cy.get('h1').contains('Marvel characters');
    cy.get('a').contains('Marvel characters').as('homeLink');
    cy.get('@homeLink').get('svg title').contains('Marvel characters');
    cy.get('a').contains('Favorite characters');
  });

  it('navigates to the favorite characters page', () => {
    cy.get('a[href="/favorites"]').click();
    cy.url().should('include', '/favorites');
  });

  it('list the characters', () => {
    cy.get('#search-results').contains('50 results');
    cy.getBySel('character-card').should('have.length', 50);
  });

  it('navigates to a character page', () => {
    cy.getBySel('character-card')
      .first()
      .within(() => {
        cy.getBySel('character-card-name').then((name) => {
          cy.wrap(name.text()).as('characterName');
        });

        cy.getBySel('character-card-link').click();
      });

    cy.url().should('include', '/character');

    cy.get('@characterName').then((characterName) => {
      const name = characterName as unknown as string;
      cy.get('body').contains(name);
    });
  });

  context('search', () => {
    it('searches for different characters', () => {
      const characters = ['spider', 'hulk', 'iron'];

      cy.getBySel('character-search-input').as('searchInput');

      characters.forEach((character) => {
        cy.get('@searchInput').clear().type(character);
        cy.getBySel('character-card').contains(new RegExp(character, 'i'));
      });
    });

    it('does not get results for an unknown character', () => {
      cy.getBySel('character-search-input').type('unknown character');
      cy.getBySel('character-card').should('not.exist');
      cy.get('#search-results').contains('0 results');
    });
  });

  context('favorite characters', () => {
    it('adds and removes character from favorites', () => {
      cy.getBySel('favorite-counter').as('favoriteCounter');

      // Add a character to favorites
      cy.getBySel('favorite-button').first().click();
      cy.get('@favoriteCounter').contains('1');

      // Add another character to favorites
      cy.getBySel('favorite-button').last().click();
      cy.get('@favoriteCounter').contains('2');

      // Check if the characters are in the favorites page
      cy.get('a[href="/favorites"]').click();
      cy.url().should('include', '/favorites');
      cy.getBySel('character-card').should('have.length', 2);

      // Remove first character from favorites
      cy.getBySel('favorite-button').first().click();
      cy.get('@favoriteCounter').contains('1');

      // Remove second character from favorites
      cy.getBySel('favorite-button').first().click();
      cy.get('@favoriteCounter').contains('0');
    });

    it('searches favorite characters', () => {
      cy.getBySel('character-card').eq(0).as('firstCharacter');
      cy.getBySel('character-card').eq(1).as('secondCharacter');
      cy.getBySel('character-card').eq(2).as('thirdCharacter');

      const saveName = (nameAlias: string) => {
        cy.getBySel('character-card-name').then((name) => {
          cy.wrap(name.text()).as(nameAlias);
        });
      };

      cy.get('@firstCharacter').within(() => {
        cy.getBySel('favorite-button').click();
        saveName('firstCharacterName');
      });

      cy.get('@secondCharacter').within(() => {
        cy.getBySel('favorite-button').click();
        saveName('secondCharacterName');
      });

      cy.get('@thirdCharacter').within(() => {
        saveName('thirdCharacterName');
      });

      cy.wait(1000);

      // Search in favorites page
      cy.get('a[href="/favorites"]').click();
      cy.url().should('include', '/favorites');

      cy.get('@firstCharacterName').then((characterName) => {
        const name = characterName as unknown as string;
        cy.getBySel('character-search-input').type(name);
        cy.getBySel('character-card').should('have.length', 1).contains(name);
      });

      cy.get('@secondCharacterName').then((characterName) => {
        const name = characterName as unknown as string;
        cy.getBySel('character-search-input').clear();
        cy.wait(1000);
        cy.getBySel('character-search-input').type(name);
        cy.wait(1000);
        cy.getBySel('character-card').should('have.length', 1).contains(name);
      });

      cy.get('@thirdCharacterName').then((characterName) => {
        const name = characterName as unknown as string;
        cy.getBySel('character-search-input').clear();
        cy.wait(1000);
        cy.getBySel('character-search-input').type(name);
        cy.getBySel('character-card').should('not.exist');
      });
    });
  });
});
