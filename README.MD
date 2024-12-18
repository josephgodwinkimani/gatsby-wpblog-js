![wpstarter](https://github.com/ghatechteam/gatsby-wpblog-js/blob/main/screenshot.png)

## 🚀 Blog powered by Gatsby + Headless WordPress CMS

> This is a starter, boilerplate and blueprint

## Requirements

- Local by Flywheel
- NodeJS
- Gatsby CLI
-

## Why use Gatsby instead of WordPress PHP templates?

For starters you can keep using WordPress as the fantastic CMS it is, and use React and modern tooling for your front-end!

Some highlights:

- Increased security and performance due to the static rendering of Gatsby
- A componentized architecture for your front-end code with React (better maintainability)
- A simpler way of asking for data with GraphQL (no need to remember dozens of data retrieval functions)
- Client-side state management with React opens up the doors to creating an app-like or full on app experience for your users
- [Gatsby is committed to ensuring we are as accessible as possible out of the box](https://www.gatsbyjs.com/blog/2019-04-18-gatsby-commitment-to-accessibility/)

Additionally, this plugin is a great reason to use Gatsby with WordPress. Many of the complex and difficult aspects of going decoupled with WordPress have been abstracted for you behind the scenes, so you can work on building awesome apps and sites instead of reinventing the wheel to get decoupled WordPress working in your project.

Check out this page on [convincing developers why Gatsby is awesome](https://www.gatsbyjs.com/docs/winning-over-developers/#specific-benefits). It's meant for developers who want to convince their coworkers to use Gatsby, but it actually does a great job of describing directly to you the main reasons why using Gatsby is a great idea :)

### Related information:

- [ReactJS](https://reactjs.org/)
- [Gatsy Site Showcase](https://www.gatsbyjs.com/showcase/)
- [Gatsby Case Study Blog posts](https://www.gatsbyjs.com/blog/tags/case-studies/)
- [How Tinder is using WordPress with Gatsby](https://www.gatsbyjs.com/blog/2020-04-07-la-2020-boss/)
- [Zac Gordon on what Gatsby is and why to use it](https://www.youtube.com/watch?v=GuvAMcsoreI)

## Why use gatsby-source-wordpress plugin?

Before `gatsby-source-wordpress@v4` was released, there were 2 main ways to work with Gatsby & WordPress: `gatsby-source-wordpress@v3` and `gatsby-source-graphql`.

Both of these worked but each had it's own pitfalls and problems.

- [Problems with gatsby-source-wordpress@v3](./problems-with-v3.md)
- [Problems with gatsby-source-graphql](./problems-with-gatsby-source-graphql.md)

This plugin fixes every problem listed in those two pages :point_up:

Now we have the ability to properly cache data and this makes incremental builds, fast builds, and Preview work. Any WPGraphQL plugin now becomes a cacheable Gatsby plugin which means Gatsby and the community can build a rich plugin ecosystem around WordPress that just works! :smile:

## Getting started

1. `wget https://github.com/ghatechteam/wpstarter/archive/refs/heads/main.zip`  

2. Zip `main`, rename it to whichever name you prefer and drop it as blueprint in LocalWP:

**Windows**: `C:\Users\username\AppData\Roaming\Local\blueprints`

**Linux**: `~/.config/Local/blueprints`

**Mac**: 

3. Create a website from the blueprint on your **Local by FlyWheel**

4. Install [Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/) `yarn add gatsby-cli -g`

5. Install dependencies of the frontend i.e. `/frontend`

    ```shell
    cd frontend/
    yarn install    
    ```

6. Develop the frontend - run with the `gatsby develop` or `yarn run develop` command

7. Clear gatsby cache `yarn run clean`

Explore the data layer http://localhost:8000/___graphql

- [Routing](https://www.gatsbyjs.com/docs/how-to/routing/)
- [Styling](https://www.gatsbyjs.com/docs/how-to/styling/)
- [Images and Media](https://www.gatsbyjs.com/docs/how-to/images-and-media/)
- [Querying Data](https://www.gatsbyjs.com/docs/how-to/querying-data/)
- [Forms](https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-forms/)
- [Search](https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-search/)
- [Localization and Internationalization](https://www.gatsbyjs.com/docs/how-to/adding-common-features/localization-i18n/)
- [Analytics](https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-analytics/)
- [GraphQL Data Layer](https://www.gatsbyjs.com/docs/reference/graphql-data-layer/)


## [Build & Deploy](https://www.gatsbyjs.com/docs/preparing-for-deployment/)

1. Generate the site `gatsby build`

2. Publish the `public` (or your own output directory) directory

## Performance

See [more](https://www.gatsbyjs.com/docs/how-to/performance/)


## Learn more :point_right:

- [Progressive Web Apps (PWAs)](https://www.gatsbyjs.com/docs/progressive-web-app/)
- [Debugging the Development Process: Troubleshooting Common Errors](https://www.gatsbyjs.com/docs/how-to/local-development/troubleshooting-common-errors/)
- [Debugging Missing or Stale Data Fields on Nodes](https://www.gatsbyjs.com/docs/how-to/local-development/debugging-missing-data/)
- [Debugging the Build Process](https://www.gatsbyjs.com/docs/debugging-the-build-process/)
- [Debugging and Troubleshooting: gatsby-source-wordpress](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/docs/debugging-and-troubleshooting.md)
- [Server timeouts & Over-resourced server errors](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/docs/hosting.md)
- [SSL Issues with Local by FlyWheel](https://localwp.com/help-docs/ssl/ssl-in-local/)

