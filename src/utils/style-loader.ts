/**
 * Style loader utility for compiled SCSS styles
 */

// Generated CSS styles from SCSS compilation
const styles: { [key: string]: string } = {
  'system7-component': `:host{display:block;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;padding:1rem;border:1px solid #ccc;border-radius:4px;background:#f9f9f9}.system7-header{font-weight:bold;margin-bottom:.5rem}.system7-content{color:#666}`,

  'hello-world': `:host{display:block;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;padding:2rem;text-align:center;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);color:#fff;border-radius:8px;box-shadow:0 4px 6px rgba(0,0,0,.1);margin:1rem 0}.greeting{font-size:2rem;font-weight:bold;margin-bottom:1rem}.subtitle{font-size:1.1rem;opacity:.8}button{background:hsla(0,0%,100%,.2);border:1px solid hsla(0,0%,100%,.3);color:#fff;padding:.5rem 1rem;border-radius:4px;cursor:pointer;margin-top:1rem;font-size:1rem}button:hover{background:hsla(0,0%,100%,.3)}`
};

/**
 * Get compiled CSS styles for a component
 */
export function getCompiledStyles(componentName: string): string {
  return styles[componentName] || '';
}

/**
 * Create a style element with the given CSS content
 */
export function createStyleElement(css: string): HTMLStyleElement {
  const style = document.createElement('style');
  style.textContent = css;
  return style;
}
