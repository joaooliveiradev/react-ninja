import { configure } from '@kadira/storybook';

import '../src/components/app-content/app.css'

const req = require.context('../src/components', true, /\.story\.js$/)
function loadStories() {
  req.keys().forEach((filename) => console.log(req(filename)))
}

configure(loadStories, module);
