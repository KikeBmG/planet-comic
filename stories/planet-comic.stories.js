import { html } from 'lit';
import '@pages/planet-comic/planet-comic.js';

export default {
  title: 'PlanetComic',
  component: 'planet-comic',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <planet-comic
      style="--planet-comic-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </planet-comic>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
