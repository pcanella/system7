/**
 * System7Component - Base class for creating native HTML web components
 * 
 * This class provides a foundation for building custom elements using
 * the native Web Components API.
 */
export class System7Component extends HTMLElement {
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
  init() {
    this.render();
  }

  /**
   * Render the component - override in subclasses
   */
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          background: #f9f9f9;
        }
        
        .system7-header {
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        
        .system7-content {
          color: #666;
        }
      </style>
      
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
  static get observedAttributes() {
    return [];
  }

  /**
   * Called when an observed attribute changes
   */
  attributeChangedCallback(name, oldValue, newValue) {
    // Override in subclasses to handle attribute changes
    this.render();
  }

  /**
   * Called when the element is inserted into the DOM
   */
  connectedCallback() {
    // Override in subclasses for setup logic
  }

  /**
   * Called when the element is removed from the DOM
   */
  disconnectedCallback() {
    // Override in subclasses for cleanup logic
  }
}

// Register the component
customElements.define('system7-component', System7Component);