https://nodejs.github.io/node-addon-examples/getting-started/first

generator - napi - module relies on Yeoman which must also be installed:

```bash
npm install - g yo
npm install - g generator - napi - module
```

---

Then enter these commands to generate a new project:

```bash
mkdir hello-world
cd hello-world
yo napi-module
```

---

```bash
npm test
```