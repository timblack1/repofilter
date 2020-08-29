import { LitElement, html, css } from 'lit-element';

export class RepoView extends LitElement {
  static get properties() {
    return {
      /**
       * The Github repository to display
       */
      repo: { type: Object },
    };
  }

  static get styles() {
    return css`
      :host {
      }

      .container {
        margin: calc(0.7vmin) 0;
        padding: calc(0.7vmin);
        background-color: var(--light-contrast-background-color);
        border: 0.3vmin solid var(--strong-contrast-background-color);
        border-radius: 0.5vmin;
      }

      .name-description,
      .updated {
        font-size: var(--body-font-size);
        text-align: left;
      }
    `;
  }

  constructor() {
    super();
    this.repo = {};
  }

  render() {
    return html`
      <div class="container">
        <div class="name-description">
          <a href="https://github.com${this.repo.resourcePath}"
            >${this.repo.name}</a
          >
          - ${this.repo.description}
        </div>
        <div class="updated">
          Last updated: ${new Date(this.repo.updatedAt).toLocaleDateString()}
        </div>
      </div>
    `;
  }
}

window.customElements.define('repo-view', RepoView);
