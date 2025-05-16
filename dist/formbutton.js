var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
let BiodataButton = class BiodataButton extends LitElement {
    constructor() {
        super(...arguments);
        this.formOpen = false;
        this.submitted = false;
    }
    toggleForm() {
        this.formOpen = !this.formOpen;
        this.submitted = false; // reset on open
    }
    handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const biodata = {
            name: formData.get('name'),
            age: formData.get('age'),
            gender: formData.get('gender'),
            email: formData.get('email'),
            address: formData.get('address'),
        };
        console.log('Biodata submitted:', biodata);
        this.submitted = true;
        form.reset();
    }
    render() {
        return html `
      <button @click=${this.toggleForm}>
        ${this.formOpen ? 'Close Biodata Form' : 'Open Biodata Form'}
      </button>

      ${this.formOpen
            ? html `
            <form @submit=${this.handleSubmit}>
              <label for="name">Name:</label>
              <input id="name" name="name" type="text" required />

              <label for="age">Age:</label>
              <input id="age" name="age" type="number" min="0" required />

              <label for="gender">Gender:</label>
              <select id="gender" name="gender" required>
                <option value="" disabled selected>Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <label for="email">Email:</label>
              <input id="email" name="email" type="email" required />

              <label for="address">Address:</label>
              <textarea id="address" name="address" rows="3"></textarea>

              <button type="submit" class="submit-btn">Submit</button>
            </form>
          `
            : null}

      ${this.submitted ? html `<div class="thank-you">Thank you for submitting your biodata!</div>` : null}
    `;
    }
};
BiodataButton.styles = css `
    :host {
      display: block;
      font-family: Arial, sans-serif;
      max-width: 400px;
      margin: 1em auto;
      padding: 1em;
      border: 1px solid #ccc;
      border-radius: 8px;
      background:rgb(154, 150, 41);
    }

    button {
      background: #6200ea;
      color: black;
      padding: 0.6em 1.2em;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 1rem;
      margin-bottom: 1em;
    }

    button:hover {
      background: #3700b3;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 0.8em;
    }

    label {
      font-weight: bold;
      margin-bottom: 0.2em;
    }

    input, select, textarea {
      padding: 0.5em;
      border: 1px solid #999;
      border-radius: 4px;
      font-size: 1rem;
    }

    textarea {
      resize: vertical;
    }

    .submit-btn {
      background: #00796b;
      color: white;
      border: none;
      padding: 0.6em 1.2em;
      border-radius: 6px;
      cursor: pointer;
      font-size: 1rem;
      margin-top: 1em;
      align-self: flex-start;
    }

    .submit-btn:hover {
      background: #004d40;
    }

    .thank-you {
      margin-top: 1em;
      font-weight: bold;
      color: #00796b;
    }
  `;
__decorate([
    state()
], BiodataButton.prototype, "formOpen", void 0);
__decorate([
    state()
], BiodataButton.prototype, "submitted", void 0);
BiodataButton = __decorate([
    customElement('biodata-button')
], BiodataButton);
export { BiodataButton };
