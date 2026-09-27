import path from 'node:path';
import { createChecker } from 'vue-component-meta';

const checker = createChecker(path.resolve('tsconfig.json'));
const meta = checker.getComponentMeta(path.resolve('src/Comp.vue'));

const expected = {
  propE: "{ message: 'hello' }",
  propF: 'the function itself: function () { ... }',
  fn: '(x: number) => x * 2',
};

for (const [name, want] of Object.entries(expected)) {
  const prop = meta.props.find(p => p.name === name);
  console.log(`${name}\n  expected: ${want}\n  actual:   ${prop.default}\n`);
}
