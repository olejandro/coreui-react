module.exports = {
  "presets": [
    [
      "@babel/env",
      {
        "shippedProposals": true,
        "modules": false,
        "targets": {
          "ie": 11
        }
      }
    ],
    "@babel/react"
  ],
  "plugins": [
    "@babel/plugin-proposal-export-default-from", 
    "@babel/plugin-proposal-export-namespace-from", 
    "@babel/plugin-transform-runtime", "@babel/plugin-proposal-object-rest-spread"
  ],
  "env": {
    "esm-dir": {
      "presets": [
        [
          "@babel/env",
          {
            "loose": true,
            "shippedProposals": true,
            "modules": false,
            "targets": {
              "ie": 11
            }
          }
        ],
        "@babel/react"
      ],
      "plugins": [["@babel/plugin-transform-runtime", { "useESModules": true }]]
    },
    "test": {
        "presets": [
          "@babel/env", "@babel/preset-react"
        ],
        "plugins": [
          "babel-plugin-dynamic-import-node",
          // 'babel-plugin-transform-dynamic-import'
        ]
     }
  }
}