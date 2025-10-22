# System7 Web Components

A bare bones npm module for creating native HTML web components with TypeScript and SCSS. This library provides a foundation for building custom elements using the standard Web Components API with shadow DOM encapsulation.

## Features

- 🎯 **Native Web Components**: Built on standard Web Components API
- 🛡️ **Shadow DOM**: Provides style and markup encapsulation  
- 🚀 **Lightweight**: No runtime dependencies, minimal footprint
- 🔧 **Extensible**: Easy to extend base class for custom components
- 📱 **Modern**: Uses TypeScript for type safety and SCSS for styling
- 🎨 **SCSS Support**: Organized stylesheets with variables and modular architecture
- 🏗️ **TypeScript**: Full type definitions and modern development experience

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

```typescript
import { System7Component, getCompiledStyles } from 'system7';

class MyComponent extends System7Component {
  static get observedAttributes(): string[] {
    return ['title', 'color'];
  }

  protected render(): void {
    const title = this.getAttribute('title') || 'Default Title';
    const color = this.getAttribute('color') || '#333';
    
    // Use compiled SCSS styles or inline styles
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
npm run build        # Build SCSS and TypeScript files
npm run build:styles # Compile SCSS to CSS strings
npm run build:ts     # Compile TypeScript to JavaScript
npm run dev          # Start development server
npm run serve        # Build and serve the examples
npm run clean        # Clean build artifacts
npm test             # Run tests (placeholder)
```

### Project Structure

```
system7/
├── src/                        # TypeScript source files
│   ├── index.ts               # Main entry point
│   ├── system7-component.ts   # Base component class
│   ├── hello-world.ts         # Example component
│   ├── styles/                # SCSS stylesheets
│   │   ├── _variables.scss    # SCSS variables
│   │   ├── system7-component.scss
│   │   └── hello-world.scss
│   └── utils/
│       └── style-loader.ts    # Generated style loader
├── dist/                      # Built JavaScript files (generated)
├── examples/                  # Example usage
│   └── index.html            # Demo page
├── tsconfig.json             # TypeScript configuration
├── build-styles.cjs          # SCSS build script
├── package.json
└── README.md
```

## Examples

Run the development server to see examples:

```bash
npm run serve
```

Then open http://localhost:8000/examples/ in your browser.

## SCSS Styling

The project uses SCSS for modular, maintainable styling:

### Style Architecture

- **`_variables.scss`** - Global SCSS variables for colors, fonts, spacing
- **Component-specific SCSS** - Each component has its own SCSS file
- **Compiled CSS** - SCSS is compiled to CSS strings and injected into shadow DOM

### Adding New Styles

1. Create or edit SCSS files in `src/styles/`
2. Run `npm run build:styles` to compile SCSS to CSS strings
3. Use `getCompiledStyles('component-name')` in your TypeScript components

### Example SCSS

```scss
// src/styles/_variables.scss
$primary-color: #667eea;
$border-radius: 8px;

// src/styles/my-component.scss
@use 'variables' as *;

:host {
  background: $primary-color;
  border-radius: $border-radius;
}
```

## Browser Support

This library uses native Web Components APIs:

- Custom Elements v1
- Shadow DOM v1
- ES6 Modules

Supported in all modern browsers. For older browser support, use appropriate polyfills.

## License

ISC