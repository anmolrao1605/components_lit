import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-button')
export class MyButton extends LitElement {
  static styles = css`
    button {
      background: #6200ea;
      color: white;
      padding: 0.6em 1.2em;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }

    button:hover {
      background: #3700b3;
    }
  `;

  @property({ type: String }) label: string = 'Click Me';

  private handleClick() {
    this.dispatchEvent(new CustomEvent('my-button-clicked', {
      detail: { message: 'Clicked!' },
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    return html`<button @click=${this.handleClick}>${this.label}</button>`;
  }
}
