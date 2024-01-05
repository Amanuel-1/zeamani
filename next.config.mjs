/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
    images:{
        domains:["avatars.githubusercontent.com","cdn.sanity.io","user-images.githubusercontent.com","www.google.com","images.unsplash.com"],
    }
};

export default config;
