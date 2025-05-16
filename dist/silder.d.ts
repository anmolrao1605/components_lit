import { LitElement } from 'lit';
export declare class ImageCarousel extends LitElement {
    static styles: import("lit").CSSResult;
    images: string[];
    private currentIndex;
    private showPrev;
    private showNext;
    private selectImage;
    render(): import("lit-html").TemplateResult<1>;
}
