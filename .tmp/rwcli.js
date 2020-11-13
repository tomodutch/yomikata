
  const proxyquire = require("proxyquire")
  const fs = require('fs')
  const path = require('path')
  const files = {}
  const fileOverrides = {"file:///Users/thomasfarla/Projects/yomikata/web/src/pages/HomePage/HomePage.js":"import { Link, routes } from '@redwoodjs/router'\n\nconst HomePage = () => {\n  return (\n    <>\n      <header>\n        <ul>\n          <li>\n            <Link to={routes.about()}>About</Link>\n          </li>\n        </ul>\n      </header>\n      <main>\n        <h1>HomePage</h1>\n        <p>\n          Find me in <code>./web/src/pages/HomePage/HomePage.js</code>\n        </p>\n        <p>\n          My default route is named <code>home</code>, link to me with `\n          <Link to={routes.home()}>Home</Link>`\n        </p>\n      </main>\n    </>\n  )\n}\n\nexport default HomePage\n"}
  const FILE_SCHEME = 'file://'

  function URL_file(f) {
    if (f.startsWith(FILE_SCHEME))
      f = f.substr(FILE_SCHEME.length)
    return new URL(FILE_SCHEME + path.normalize(f)).href
  }

  proxyquire('@redwoodjs/cli/dist', {
    fs: {
      mkdir() {},
      mkdirSync(...args) {},
      writeFile(a, b) {
        files[URL_file(a)] = b
      },
      writeFileSync(a, b) {
        files[URL_file(a)] = b
      },
      readFileSync(...args) {
        const f = URL_file(args[0])
        if (fileOverrides[f]) return fileOverrides[f]
        return fs.readFileSync.apply(fs, args)
      },
      '@global': true,
    },
  })

  process.on('exit', () => {
    console.log("---------===----===--------")
    console.log(JSON.stringify(files, null, 2))
  })
  