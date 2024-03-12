# Marvel Characters

## Live demo

You can see the live demo [here](https://marvel-characters-umber.vercel.app/).

## Description

This is a project that shows a list of Marvel characters and their details. The project is built using server components of [Next.js v14](https://nextjs.org/).

It has three pages. Different Next.js features are used in each page:

- **Home**: It uses [Dynamic Rendering](https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-rendering). As we are using the Marvel API to search for characters, the data is not cached. When a user searches for a character, the page fetches the data from the Marvel API. Then, the page is rendered on the server at request time with the fetched data.

- **Favorites**: It uses [Dynamic Rendering](https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-rendering) with [Data Cache](https://nextjs.org/docs/app/building-your-application/caching#data-cache). As the API does not support searching in a specific list of characters, all the characters are fetched from the API and then cached. When a user searches for a character, the server uses the characters cached data and the favorite character ids stored in the cookies to render the page.

- **Character**: It uses [Streaming](https://nextjs.org/docs/app/building-your-application/rendering/server-components#streaming). The page fetches the character data to render the character details section. At the same time, it fetches the comics to render the comics section. Once the character section is ready, it is sent to the client even if the comics section is not ready yet. This way, the user can see the character details while the comics are being fetched.

  It also uses [Data Cache](https://nextjs.org/docs/app/building-your-application/caching#data-cache) to cache the character data. When a user navigates to a character page, the server uses the character cached data to render the page. If it is the first user that navigates to this character page, the server fetches the character data from the Marvel API and caches it.

Note: as the Marvel API request a time stamp parameter, the url is different every time. So, we cannot use the [fetch](https://nextjs.org/docs/app/api-reference/functions/fetch) cache feature of Next.js. Instead, we are using [unstable_cache](https://nextjs.org/docs/app/api-reference/functions/unstable_cache) to get the same functionality.

Note 2: images are always cached independently of the data cache.

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

The project is built using [Next.js v14 with the app router](https://nextjs.org/). It uses [CSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules) for styling and [PostCSS](https://postcss.org/) for processing the styles. It uses the [Marvel API](https://developer.marvel.com/documentation/getting_started) to fetch the data. It uses hexagonal architecture to separate the layers of the application.

### Technologies

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Marvel API](https://developer.marvel.com/documentation/getting_started)
- [CSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules)
- [PostCSS](https://postcss.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Cypress](https://www.cypress.io/)

### Folder structure

There are two main folders in the project:

- `app`: It contains all the code related to components, pages, and styles. The files are [organized by feature/route](https://nextjs.org/docs/app/building-your-application/routing/colocation#split-project-files-by-feature-or-route).

- `modules`: It contains the code related to the business logic of the application. The files are organized by module.
  Inside each module folder, the files are organized by layer following the hexagonal architecture. The layers are:
  - `application`: It contains the use cases of the module.
  - `domain`: It contains the entities and the interfaces of the module.
  - `infrastructure`: It contains the implementation of the interfaces of the module.

### Styling

CSS Modules are used for styling. The styles are located in the same folder as the component or page that uses them. The theme is in the global styles file.

Besides the postcss plugins that come with Next.js, the following plugins are used:

- [postcss-custom-media](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-media#postcss-custom-media-) to use custom media queries.
- [postcss-rem](https://github.com/pierreburel/postcss-rem?tab=readme-ov-file#postcss-rem-) to convert pixel units to rem units using `to-rem()`.

## Testing

As server components are new to the React ecosystem, some tools do not fully support them. So we use End-to-End Testing as [recommended by the Next.js team](https://nextjs.org/docs/app/building-your-application/testing#async-server-components). Also, as the requests to the API happens on the server, they cannot be intercepted by cypress. So, the tests are using the API directly.

To test the application with the production build, use the following commands:

```bash
pnpm build
pnpm start
```

Then, open cypress with the following command:

```bash
pnpm cypress:open
```
