import { System7Component } from './system7-component.js';

/**
 * HelloWorld - Example component that extends System7Component
 */
export class HelloWorld extends System7Component {
  static get observedAttributes() {
    return ['name'];
  }

  render() {
    const name = this.getAttribute('name') || 'World';
    
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          padding: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin: 1rem 0;
        }
        
        .greeting {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        
        .subtitle {
          font-size: 1.1rem;
          opacity: 0.8;
        }
        
        button {
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 1rem;
          font-size: 1rem;
        }
        
        button:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      </style>
      
      <div class="greeting">Hello, ${name}!</div>
      <div class="subtitle">This is a System7 Web Component</div>
      <button id="clickBtn">Click me!</button>
    `;

    // Add event listener
    this.shadowRoot.getElementById('clickBtn').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('hello-click', {
        detail: { name, timestamp: new Date() },
        bubbles: true
      }));
    });
  }
}

// Register the component
customElements.define('hello-world', HelloWorld);