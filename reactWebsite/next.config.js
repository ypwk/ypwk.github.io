/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "";

module.exports = {
  output: "export",
  assetPrefix: assetPrefix,
  basePath: basePath,
};
