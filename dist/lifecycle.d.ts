import { LitElement } from 'lit';
export declare class LifecycleForm extends LitElement {
    private name;
    private age;
    static styles: import("lit").CSSResult;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    adoptedCallback(): void;
    private log;
    private handleInputName;
    private handleInputAge;
    private handleSubmit;
    render(): import("lit-html").TemplateResult<1>;
}
