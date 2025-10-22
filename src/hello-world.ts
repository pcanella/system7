import { System7Component } from './system7-component.js';
import { getCompiledStyles } from './utils/style-loader.js';

/**
 * HelloWorld - Example component that extends System7Component
 */
export class HelloWorld extends System7Component {
  static get observedAttributes(): string[] {
    return ['name'];
  }

  protected render(): void {
    const name = this.getAttribute('name') || 'World';
    const styles = getCompiledStyles('hello-world');
    
    this.shadowRoot.innerHTML = `
      <style>${styles}</style>
      
      <div class="greeting">Hello, ${name}!</div>
      <div class="subtitle">This is a System7 Web Component</div>
      <button id="clickBtn">Click me!</button>
    `;

    // Add event listener
    const button = this.shadowRoot.getElementById('clickBtn') as HTMLButtonElement;
    if (button) {
      button.addEventListener('click', () => {
        this.handleClick(name);
      });
    }
  }

  private handleClick(name: string): void {
    this.dispatchEvent(new CustomEvent('hello-click', {
      detail: { name, timestamp: new Date() },
      bubbles: true
    }));
  }
}

// Register the component
customElements.define('hello-world', HelloWorld);