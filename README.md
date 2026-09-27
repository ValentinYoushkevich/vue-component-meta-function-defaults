# vue-component-meta: defaults of function props and method-style defaults

`npm start` prints the `default` reported by `vue-component-meta@3.3.11` for three props of `src/Comp.vue`, next to the expected value.

- `propE` / `propF` — method-style `default() { ... }` from the Vue docs: reported as `undefined`.
- `fn` — arrow default of a `type: Function` prop: reported as the arrow's body (`x * 2`), although Vue does not call it as a factory.
