import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const docsDir = path.join(rootDir, 'docs');

const routes = [
  'solucoes',
  'como-funciona',
  'projetos',
  'duvidas',
  'pedir-avaliacao',
];

function postBuild() {
  const indexHtmlPath = path.join(docsDir, 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    console.error(`Error: ${indexHtmlPath} not found. Please run vite build first.`);
    process.exit(1);
  }

  const htmlContent = fs.readFileSync(indexHtmlPath, 'utf8');

  // 1. Create .nojekyll in both /docs and root / to prevent GitHub Pages Jekyll processing
  const docsNojekyllPath = path.join(docsDir, '.nojekyll');
  fs.writeFileSync(docsNojekyllPath, '', 'utf8');
  console.log('✓ Created docs/.nojekyll');

  const rootNojekyllPath = path.join(rootDir, '.nojekyll');
  fs.writeFileSync(rootNojekyllPath, '', 'utf8');
  console.log('✓ Created root .nojekyll');

  // 2. Generate subdirectories for each route with index.html for direct access without 404
  for (const route of routes) {
    const routeDir = path.join(docsDir, route);
    fs.mkdirSync(routeDir, { recursive: true });
    fs.writeFileSync(path.join(routeDir, 'index.html'), htmlContent, 'utf8');
    console.log(`✓ Created docs/${route}/index.html`);
  }

  // 3. Generate docs/404.html fallback
  fs.writeFileSync(path.join(docsDir, '404.html'), htmlContent, 'utf8');
  console.log('✓ Created docs/404.html');

  console.log('GitHub Pages post-build preparation finished successfully.');
}

postBuild();
