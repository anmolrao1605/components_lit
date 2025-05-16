import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('image-carousel')
export class ImageCarousel extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: relative;
      width: var(--carousel-width, 100%);
      max-width: var(--carousel-max-width, 600px);
      overflow: hidden;
      border-radius: var(--carousel-border-radius, 10px);
    }

    .carousel-container {
      display: flex;
      transition: transform 0.5s ease-in-out;
      will-change: transform;
    }

    .carousel-image {
      min-width: 100%;
      height: var(--carousel-height, 300px);
      object-fit: cover;
    }

    .nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0, 0, 0, 0.5);
      border: none;
      color: white;
      font-size: 1.5rem;
      padding: 0.5em;
      cursor: pointer;
      z-index: 1;
    }

    .prev {
      left: 10px;
    }

    .next {
      right: 10px;
    }

    .dots {
      position: absolute;
      bottom: 10px;
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 0.5em;
    }

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: white;
      opacity: 0.5;
      cursor: pointer;
    }

    .dot.active {
      opacity: 1;
      background: #6200ea;
    }
  `;

  @property({ type: Array }) images: string[] = [];

  @state() private currentIndex = 0;

  private showPrev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  private showNext() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  private selectImage(index: number) {
    this.currentIndex = index;
  }

  render() {
    return html`
      <div class="carousel-wrapper">
        <div
          class="carousel-container"
          style="transform: translateX(-${this.currentIndex * 100}%);"
        >
          ${this.images.map(
            (src) => html`<img class="carousel-image" src="${src}" />`
          )}
        </div>

        <button class="nav prev" @click=${this.showPrev}>&larr;</button>
        <button class="nav next" @click=${this.showNext}>&rarr;</button>

        <div class="dots">
          ${this.images.map(
            (_, i) => html`
              <div
                class="dot ${i === this.currentIndex ? 'active' : ''}"
                @click=${() => this.selectImage(i)}
              ></div>
            `
          )}
        </div>
      </div>
    `;
  }
}
