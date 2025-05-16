var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import './lifecycle-form';
let LifecycleViewer = class LifecycleViewer extends LitElement {
    constructor() {
        super(...arguments);
        this.showForm = false;
        this.logs = [];
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('form-log', (e) => {
            const detail = e.detail;
            this.log(detail);
        });
    }
    toggleForm() {
        this.showForm = !this.showForm;
        this.log(`[Viewer] Toggled form: ${this.showForm ? 'Shown' : 'Hidden'}`);
    }
    handleSubmit(e) {
        const { name, age } = e.detail;
        this.log(`[Viewer] Form submitted with Name: ${name}, Age: ${age}`);
    }
    log(message) {
        const timestamp = new Date().toLocaleTimeString();
        this.logs = [...this.logs, `[${timestamp}] ${message}`];
    }
    render() {
        return html `
      <button @click=${this.toggleForm}>
        ${this.showForm ? 'Hide' : 'Show'} Form
      </button>

      <div class="form-container">
        ${this.showForm
            ? html `<lifecycle-form
              @lifecycle-form-submitted=${this.handleSubmit}
            ></lifecycle-form>`
            : nothing}
      </div>

      <div class="log-box">
        ${this.logs.map((log) => html `<div>${log}</div>`)}
      </div>
    `;
    }
};
LifecycleViewer.styles = css `
    :host {
      display: block;
      font-family: sans-serif;
      padding: 1rem;
      max-width: 600px;
      margin: auto;
    }

    button {
      padding: 0.6em 1em;
      font-size: 1em;
      border-radius: 6px;
      background-color: #28a745;
      color: white;
      border: none;
      cursor: pointer;
      margin-bottom: 1rem;
    }

    button:hover {
      background-color: #218838;
    }

    .log-box {
      padding: 1em;
      background-color: #f4f4f4;
      border-radius: 8px;
      font-family: monospace;
      white-space: pre-wrap;
      max-height: 300px;
      overflow-y: auto;
      border: 1px solid #ccc;
    }

    .form-container {
      margin-bottom: 1rem;
    }
  `;
__decorate([
    state()
], LifecycleViewer.prototype, "showForm", void 0);
__decorate([
    state()
], LifecycleViewer.prototype, "logs", void 0);
LifecycleViewer = __decorate([
    customElement('lifecycle-viewer')
], LifecycleViewer);
export { LifecycleViewer };
