var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let MyButton = class MyButton extends LitElement {
    constructor() {
        super(...arguments);
        this.label = 'Click Me';
    }
    handleClick() {
        this.dispatchEvent(new CustomEvent('my-button-clicked', {
            detail: { message: 'Clicked!' },
            bubbles: true,
            composed: true,
        }));
    }
    render() {
        return html `<button @click=${this.handleClick}>${this.label}</button>`;
    }
};
MyButton.styles = css `
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
__decorate([
    property({ type: String })
], MyButton.prototype, "label", void 0);
MyButton = __decorate([
    customElement('my-button')
], MyButton);
export { MyButton };
