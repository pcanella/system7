# System7 Web Components

A bare bones npm module for creating native HTML web components. This library provides a foundation for building custom elements using the standard Web Components API with shadow DOM encapsulation.

## Features

- 🎯 **Native Web Components**: Built on standard Web Components API
- 🛡️ **Shadow DOM**: Provides style and markup encapsulation
- 🚀 **Lightweight**: No dependencies, minimal footprint
- 🔧 **Extensible**: Easy to extend base class for custom components
- 📱 **Modern**: Uses ES6+ modules and modern JavaScript

## Installation

```bash
npm install system7
```

## Quick Start

### 1. Basic Usage

```html
<!DOCTYPE html>
<html>
<head>
  <script type="module" src="node_modules/system7/src/index.js"></script>
</head>
<body>
  <system7-component></system7-component>
  <hello-world name="Developer"></hello-world>
</body>
</html>
```

### 2. Creating Custom Components

```javascript
import { System7Component } from 'system7';

class MyComponent extends System7Component {
  static get observedAttributes() {
    return ['title', 'color'];
  }

  render() {
    const title = this.getAttribute('title') || 'Default Title';
    const color = this.getAttribute('color') || '#333';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 1rem;
          border-radius: 8px;
          background: ${color};
          color: white;
        }
      </style>
      <h2>${title}</h2>
      <slot></slot>
    `;
  }
}

customElements.define('my-component', MyComponent);
```

## API Reference

### System7Component

Base class for creating web components.

#### Methods

- `render()` - Override to define component markup and styling
- `init()` - Override for initialization logic
- `connectedCallback()` - Called when element is added to DOM
- `disconnectedCallback()` - Called when element is removed from DOM
- `attributeChangedCallback(name, oldValue, newValue)` - Called when observed attributes change

#### Static Properties

- `observedAttributes` - Array of attribute names to watch for changes

## Development

### Scripts

```bash
npm run build    # Build the distribution files
npm run dev      # Start development server
npm run serve    # Build and serve the examples
npm test         # Run tests (placeholder)
```

### Project Structure

```
system7/
├── src/                     # Source files
│   ├── index.js            # Main entry point
│   ├── system7-component.js # Base component class
│   └── hello-world.js      # Example component
├── dist/                   # Built files (generated)
├── examples/               # Example usage
│   └── index.html         # Demo page
├── package.json
└── README.md
```

## Examples

Run the development server to see examples:

```bash
npm run serve
```

Then open http://localhost:8000/examples/ in your browser.

## Browser Support

This library uses native Web Components APIs:

- Custom Elements v1
- Shadow DOM v1
- ES6 Modules

Supported in all modern browsers. For older browser support, use appropriate polyfills.

## License

ISC