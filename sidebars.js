/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docSidebar: [
    { type: "autogenerated", dirName: "." },
    {
      Resources: [
        {
          "DAP Client Libraries": [
            {
              type: "link",
              label: "divviup-android (Java/Android)",
              href: "https://github.com/divviup/divviup-android",
            },
            {
              type: "link",
              label: "divviup-ts (TypeScript)",
              href: "https://divviup.github.io/divviup-ts",
            },
            {
              type: "link",
              label: "janus_client (Rust)",
              href: "https://docs.rs/janus_client/latest/janus_client/",
            },
          ],
        },
        {
          "Divvi Up API": [
            {
              type: "link",
              label: "API Reference",
              href: "https://app.divviup.org/swagger-ui",
            },
            {
              type: "link",
              label: "CLI",
              href: "https://github.com/divviup/divviup-api/tree/main/cli",
            },
            {
              type: "link",
              label: "Client Library (Rust)",
              href: "https://github.com/divviup/divviup-api/tree/main/client",
            },
          ],
        },
        {
          "IETF Specifications": [
            {
              type: "link",
              label: "Distributed Aggregation Protocol (DAP)",
              href: "https://datatracker.ietf.org/doc/draft-ietf-ppm-dap/",
            },
            {
              type: "link",
              label: "Verifiable Distributed Aggregation Functions (VDAF)",
              href: "https://datatracker.ietf.org/doc/draft-irtf-cfrg-vdaf/",
            },
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
