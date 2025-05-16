import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-button')
export class MyButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;

      position: var(--my-button-position, static);
      margin: var(--my-button-margin, 0);
    }

    button {
      background: var(--my-button-bg, #6200ea);
      color: var(--my-button-color, white);
      padding: var(--my-button-padding, 0.6em 1.2em);
      border: var(--my-button-border, none);
      border-radius: var(--my-button-radius, 6px);
      cursor: pointer;
      font-size: var(--my-button-font-size, 1rem);
    }

    button:hover {
      background: var(--my-button-hover-bg, #3700b3);
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
