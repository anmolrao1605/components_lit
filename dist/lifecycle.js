var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
let LifecycleForm = class LifecycleForm extends LitElement {
    constructor() {
        super();
        this.name = '';
        this.age = '';
        this.log('[LifecycleForm] Constructor: element created');
    }
    connectedCallback() {
        super.connectedCallback();
        this.log('[LifecycleForm] connectedCallback: element added to DOM');
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.log('[LifecycleForm] disconnectedCallback: element removed from DOM');
    }
    adoptedCallback() {
        this.log('[LifecycleForm] adoptedCallback: element moved to new document');
    }
    log(message) {
        this.dispatchEvent(new CustomEvent('form-log', {
            detail: message,
            bubbles: true,
            composed: true,
        }));
    }
    handleInputName(e) {
        this.name = e.target.value;
    }
    handleInputAge(e) {
        this.age = e.target.value;
    }
    handleSubmit(e) {
        e.preventDefault();
        if (!this.name.trim() || !this.age.trim()) {
            alert('Please fill in both fields.');
            return;
        }
        this.log(`[LifecycleForm] Submitted: Name=${this.name}, Age=${this.age}`);
        this.dispatchEvent(new CustomEvent('lifecycle-form-submitted', {
            detail: { name: this.name, age: this.age },
            bubbles: true,
            composed: true,
        }));
    }
    render() {
        return html `
      <form @submit=${this.handleSubmit}>
        <label>
          Name:
          <input type="text" .value=${this.name} @input=${this.handleInputName} required />
        </label>
        <label>
          Age:
          <input type="number" .value=${this.age} @input=${this.handleInputAge} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    `;
    }
};
LifecycleForm.styles = css `
    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 1.2em;
      border-radius: 12px;
      background-color: #2b2b2b;
      color: #f5f5f5;
      border: 1px solid #444;
    }

    label {
      display: flex;
      flex-direction: column;
      font-weight: 500;
    }

    input {
      padding: 0.5em;
      border-radius: 6px;
      border: 1px solid #888;
      font-size: 1em;
      background-color: #fff;
      color: #000;
    }

    button {
      padding: 0.6em;
      font-size: 1em;
      border-radius: 6px;
      background-color: #007bff;
      color: white;
      border: none;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }
  `;
__decorate([
    state()
], LifecycleForm.prototype, "name", void 0);
__decorate([
    state()
], LifecycleForm.prototype, "age", void 0);
LifecycleForm = __decorate([
    customElement('lifecycle-form')
], LifecycleForm);
export { LifecycleForm };
