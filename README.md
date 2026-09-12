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

## Deploy

The website is deployed to GH pages with GH actions when pushed to `main`.