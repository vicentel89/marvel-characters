# Marvel Characters

## Description

This is a project that shows a list of Marvel characters and their details. It uses the [Marvel API](https://developer.marvel.com/documentation/getting_started) to fetch the data. The project is built using Server Components of [Next.js](https://nextjs.org/). It uses hexagonal architecture to separate the layers of the application.

## Running the project locally

1. Get an API key from [Marvel](https://developer.marvel.com/documentation/getting_started).

2. Create a `.env` file in the root of the project and add the following lines with your API keys:

```env
MARVEL_PUBLIC_API_KEY=your-public-api-key
MARVEL_PRIVATE_API_KEY=your-private-api-key
```

3. Install the dependencies:

```bash
pnpm install
```

4. Run the development server:

```bash
pnpm dev
```

## Architecture

The project is built using [Next.js with the app router](https://nextjs.org/). It uses [CSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules) for styling and [PostCSS](https://postcss.org/) for processing the styles.

### Technologies

- [Next.js](https://nextjs.org/)
- [CSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules)
- [PostCSS](https://postcss.org/)
- [pnpm](https://pnpm.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Cypress](https://www.cypress.io/)
- [Marvel API](https://developer.marvel.com/documentation/getting_started)

### Folder structure

TO DO

### Styling

TO DO
TO DO: Layers

## Testing

As server components are new to the React ecosystem, some tools do not fully support them. So we use End-to-End Testing as [recommended by the Next.js team](https://nextjs.org/docs/app/building-your-application/testing#async-server-components).

TO DO

## Known issues

- When searching characters, there is delay to start fetching the data. This is because the search is triggered when the query parameter in the URL changes and there is an issue with the app router that makes it slow to update the URL.

  This issue is being tracked in the Next.js github.
  App router slow performance when using dynamic route: [#50332](https://github.com/vercel/next.js/issues/50332) [#48748](https://github.com/vercel/next.js/issues/48748)
