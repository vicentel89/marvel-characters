declare namespace Cypress {
  interface Chainable {
    getBySel(dataTestAttribute: string, args?: unknown): Chainable<JQuery<HTMLElement>>;
    getBySelLike(dataTestPrefixAttribute: string, args?: unknown): Chainable<JQuery<HTMLElement>>;
  }
}
