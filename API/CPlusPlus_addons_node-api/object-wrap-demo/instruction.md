reference : https://nodejs.github.io/node-addon-examples/getting-started/objectwrap

generator - napi - module relies on Yeoman which must also be installed:

```bash
npm install - g yo
npm install - g generator - napi - module
```

---

Then enter these commands to generate a new project:

```bash
mkdir object-wrap-demo
cd object-wrap-demo
yo napi-module
```

---

Yeoman will display the generated package.json file here.

```bash
Is this OK? (yes) yes
? Choose a template Object Wrap
? Would you like to generate TypeScript wrappers for your module? No
```


---

```bash
npm test
```