import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('color-picker-button')
export class ColorPickerButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    button {
      background: white;
      padding: 0.6em 1.2em;
      border-radius: 6px;
      cursor: pointer;
      font-size: 1rem;
      transition: border-color 0.3s ease, color 0.3s ease;
      border: 3px solid #03a9f4;
      color: #03a9f4;
      font-weight: bold;
    }

    input[type="color"] {
      display: none;
    }
  `;

  @state()
  private currentColor: string = '#03a9f4'; 

  private handleColorChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.currentColor = input.value;
    document.body.style.backgroundColor = this.currentColor;
  }

  private triggerColorPicker() {
    const input = this.renderRoot.querySelector('input[type="color"]') as HTMLInputElement | null;
    if (input) {
      input.click();
    }
  }

  render() {
    return html`
      <button
        style="border-color: ${this.currentColor}; color: ${this.currentColor};"
        @click=${this.triggerColorPicker}
      >
        Pick Background Color
      </button>
      <input type="color" @input=${this.handleColorChange} />
    `;
  }
}
