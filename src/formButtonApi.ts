import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('submit-form-button')
export class SubmitFormButton extends LitElement {
  static styles = css`
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

  @state() private showForm = false;
  @state() private response: any = null;

  private toggleForm() {
    this.showForm = !this.showForm;
  }

  private async handleSubmit(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
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
    return html`
      <button @click=${this.toggleForm}>
        ${this.showForm ? 'Close Form' : 'Open Form'}
      </button>

      ${this.showForm ? html`
        <form @submit=${this.handleSubmit}>
          <input name="name" placeholder="Your name" required />
          <textarea name="message" placeholder="Your message" required></textarea>
          <button type="submit">Send</button>
        </form>
      ` : ''}

      ${this.response ? html`
        <div class="response">
          <strong>Response:</strong><br />
          ${JSON.stringify(this.response, null, 2)}
        </div>
      ` : ''}
    `;
  }
}
