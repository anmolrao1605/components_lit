var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
let ColorPickerButton = class ColorPickerButton extends LitElement {
    constructor() {
        super(...arguments);
        this.currentColor = '#03a9f4';
    }
    handleColorChange(event) {
        const input = event.target;
        this.currentColor = input.value;
        document.body.style.backgroundColor = this.currentColor;
    }
    triggerColorPicker() {
        const input = this.renderRoot.querySelector('input[type="color"]');
        if (input) {
            input.click();
        }
    }
    render() {
        return html `
      <button
        style="border-color: ${this.currentColor}; color: ${this.currentColor};"
        @click=${this.triggerColorPicker}
      >
        Pick Background Color
      </button>
      <input type="color" @input=${this.handleColorChange} />
    `;
    }
};
ColorPickerButton.styles = css `
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
__decorate([
    state()
], ColorPickerButton.prototype, "currentColor", void 0);
ColorPickerButton = __decorate([
    customElement('color-picker-button')
], ColorPickerButton);
export { ColorPickerButton };
