const fs = require('fs');
const path = require('path');
const sass = require('sass');

// Compile SCSS to CSS and generate TypeScript module
function compileScssToModule() {
  const stylesDir = path.join(__dirname, 'src/styles');
  const outputFile = path.join(__dirname, 'src/utils/style-loader.ts');
  
  // SCSS files to compile
  const scssFiles = {
    'system7-component': path.join(stylesDir, 'system7-component.scss'),
    'hello-world': path.join(stylesDir, 'hello-world.scss')
  };

  const compiledStyles = {};

  // Compile each SCSS file
  for (const [name, filePath] of Object.entries(scssFiles)) {
    try {
      const result = sass.compile(filePath, { style: 'compressed' });
      compiledStyles[name] = result.css;
      console.log(`✓ Compiled ${name}.scss`);
    } catch (error) {
      console.error(`✗ Failed to compile ${name}.scss:`, error.message);
      process.exit(1);
    }
  }

  // Generate TypeScript module
  const moduleContent = `/**
 * Style loader utility for compiled SCSS styles
 */

// Generated CSS styles from SCSS compilation
const styles: { [key: string]: string } = {
${Object.entries(compiledStyles).map(([name, css]) => 
  `  '${name}': \`${css.replace(/`/g, '\\`')}\``
).join(',\n\n')
}
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
`;

  fs.writeFileSync(outputFile, moduleContent);
  console.log('✓ Generated style-loader.ts');
}

compileScssToModule();