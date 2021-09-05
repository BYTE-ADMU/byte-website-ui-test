
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/nirelibarra/Documents/byte-website-ui/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/nirelibarra/Documents/byte-website-ui/src/pages/404.js")),
  "component---src-pages-community-js": preferDefault(require("/Users/nirelibarra/Documents/byte-website-ui/src/pages/community.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/nirelibarra/Documents/byte-website-ui/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/nirelibarra/Documents/byte-website-ui/src/pages/page-2.js"))
}

