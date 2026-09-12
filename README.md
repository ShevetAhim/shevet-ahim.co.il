[shevet-ahim.co.il](https://shevet-ahim.co.il/) in [next.js](https://nextjs.org/).

## Getting Started

This project uses [mise](https://mise.jdx.dev/) to provide its local runtime. The committed `mise.toml` installs Node.js 16 and Yarn Classic 1.22.22; Node 16 is required by this Next.js 11 project.

Install the tools and dependencies, then start the development server:

```bash
mise install
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ImageKit galleries

Static builds list gallery images through the ImageKit Files API, which requires an ImageKit **private API key**. To build locally, create `.env.local` from the example and add a key from the ImageKit dashboard:

```bash
cp .env.example .env.local
# Set IMAGE_KIT_PRIVATE_KEY in .env.local
mise exec -- yarn build
```

`.env.local` is ignored by Git. GitHub Actions supplies the same value through the `IMAGE_KIT_PRIVATE_KEY` repository secret; keep that secret configured for deployments.

## Deploy

The website is deployed to GH pages with GH actions when pushed to `main`.