/**
 * System7Component - Base class for creating native HTML web components
 * 
 * This class provides a foundation for building custom elements using
 * the native Web Components API.
 */

import { getCompiledStyles } from './utils/style-loader.js';

export class System7Component extends HTMLElement {
  declare shadowRoot: ShadowRoot;

  constructor() {
    super();
    
    // Attach shadow root for encapsulation
    this.attachShadow({ mode: 'open' });
    
    // Initialize component
    this.init();
  }

  /**
   * Initialize the component - override in subclasses
   */
  protected init(): void {
    this.render();
  }

  /**
   * Render the component - override in subclasses
   */
  protected render(): void {
    const styles = getCompiledStyles('system7-component');
    this.shadowRoot.innerHTML = `
      <style>${styles}</style>
      
      <div class="system7-header">
        System7 Component
      </div>
      <div class="system7-content">
        <slot>Default content - override the render method to customize</slot>
      </div>
    `;
  }

  /**
   * Observed attributes - override in subclasses to specify which attributes to watch
   */
  static get observedAttributes(): string[] {
    return [];
  }

  /**
   * Called when an observed attribute changes
   */
  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    // Override in subclasses to handle attribute changes
    this.render();
  }

  /**
   * Called when the element is inserted into the DOM
   */
  connectedCallback(): void {
    // Override in subclasses for setup logic
  }

  /**
   * Called when the element is removed from the DOM
   */
  disconnectedCallback(): void {
    // Override in subclasses for cleanup logic
  }
}

// Register the component
customElements.define('system7-component', System7Component);