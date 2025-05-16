var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
let SubmitFormButton = class SubmitFormButton extends LitElement {
    constructor() {
        super(...arguments);
        this.showForm = false;
        this.response = null;
    }
    toggleForm() {
        this.showForm = !this.showForm;
    }
    async handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const payload = {
            name: formData.get('name'),
            message: formData.get('message')
        };
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        this.response = await res.json();
    }
    render() {
        return html `
      <button @click=${this.toggleForm}>
        ${this.showForm ? 'Close Form' : 'Open Form'}
      </button>

      ${this.showForm ? html `
        <form @submit=${this.handleSubmit}>
          <input name="name" placeholder="Your name" required />
          <textarea name="message" placeholder="Your message" required></textarea>
          <button type="submit">Send</button>
        </form>
      ` : ''}

      ${this.response ? html `
        <div class="response">
          <strong>Response:</strong><br />
          ${JSON.stringify(this.response, null, 2)}
        </div>
      ` : ''}
    `;
    }
};
SubmitFormButton.styles = css `
    :host {
      display: block;
    }
    button {
      padding: 0.5em 1em;
      background: #6200ea;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    form {
      margin-top: 1em;
      display: flex;
      flex-direction: column;
      gap: 0.5em;
    }
    input, textarea {
      padding: 0.5em;
      font-size: 1em;
      width: 100%;
    }
    .response {
      margin-top: 1em;
      background: #eee;
      padding: 1em;
      border-radius: 5px;
    }
  `;
__decorate([
    state()
], SubmitFormButton.prototype, "showForm", void 0);
__decorate([
    state()
], SubmitFormButton.prototype, "response", void 0);
SubmitFormButton = __decorate([
    customElement('submit-form-button')
], SubmitFormButton);
export { SubmitFormButton };
