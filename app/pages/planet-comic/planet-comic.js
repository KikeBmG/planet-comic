import { LitElement, html } from 'lit';
import { LangMixin } from '../../utils/langMixin.js';

import styles from './planet-comic-styles.js';

const logo = new URL('../../resources/images/open-wc-logo.svg', import.meta.url).href;

class PlanetComic extends LangMixin(LitElement) {
  static get is() {
    return 'planet-comic';
  }

  static get properties() {
    return {
      header: {
        type: String
      }
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.header = '';
  }

  render() {
    return html`
      <main>
        <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
        <h1>${this.t('my-app')}</h1>

        <p>Edit <code>src/PlanetComic.js</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}

customElements.define(PlanetComic.is, PlanetComic);