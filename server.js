#!/usr/bin/env node

/**
 * cPanel Application Entry Point
 * 
 * This file serves as the startup file for cPanel deployment.
 * It requires the compiled Node.js application and starts it.
 * 
 * Usage: node server.js
 */

try {
  require('./dist/index.cjs');
} catch (error) {
  if (error.code === 'MODULE_NOT_FOUND' && error.message.includes('dist/index.cjs')) {
    console.error('❌ Error: dist/index.cjs not found.');
    console.error('\nPlease build the project first:');
    console.error('  npm install');
    console.error('  npm run build');
    console.error('\nThen upload the following to cPanel:');
    console.error('  - dist/ folder');
    console.error('  - node_modules/ folder');
    console.error('  - package.json');
    console.error('  - server.js');
    process.exit(1);
  } else {
    console.error('❌ Application Error:', error.message);
    process.exit(1);
  }
}
