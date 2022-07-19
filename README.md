## Prismic Graphql
Prismic’s GraphQL API is a read-only endpoint that allows us to perform deep fetching and selective fetching for documents from your Prismic repository.

This application describes how to use Prismic’s GraphQL API with React, but you can extend this application and instructions to any other framework with a GraphQL integration.

Create new repository in prismic and generate new access token. Create new .env file using new prismic info.

Put your repo name and access token in .env.eaxmple
```shell
GATSBY_PRISMIC_REPO_NAME=YOUR_REPO_NAME
PRISMIC_ACCESS_TOKEN=YOUR_TOKEN
```

In this application, a notifiaction pop up and web page body are created using prismic documents. <br> 
You can use existing json formats in custom_type to create your own documents or create new one for pop up or body.

## 🚀 Quick start

Create env for development or production

```shell
# create new env for development and production
cp .env.eaxmple .env.production
cp .env.eaxmple .env.development
```

Install all the packages
```shell
npm install
```

## Start developing.

Navigate into your new site’s directory and start it up.

```shell
cd React-Typescript-Gatsby-Prismic/
npm run develop
```

## Open the code and start customizing!

Your site is now running at http://localhost:8000! <br>
You can run grpahql query at http://localhost:8000/___graphql

## Learn more abount gatsby and prismic

- [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

- [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

- [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

- [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

- [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

- [Prismic](https://prismic.io/docs)


🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal-ts)
