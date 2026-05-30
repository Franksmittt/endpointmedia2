import fs from 'fs';
import path from 'path';

function fixDir(dir, variant) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const slug = entry.name;
    const file = path.join(dir, slug, 'page.tsx');
    patch(file, variant, slug);
  }
}

function patch(file, variant, slug) {
  let content = fs.readFileSync(file, 'utf8');
  const tag = `<HubSpokeLinks variant="${variant}" slug="${slug}" />`;
  if (content.includes(tag)) return;
  if (!content.includes('HubSpokeLinks')) {
    content = content.replace(
      /(import[^\n]+from ['"]@\/lib\/seo['"];?\n)/,
      `$1import HubSpokeLinks from '@/components/seo/HubSpokeLinks';\n`,
    );
  }
  content = content.replace(
    /      <\/section>\n    <\/>\n  \);\n};/,
    `      </section>\n      ${tag}\n    </>\n  );\n};`,
  );
  fs.writeFileSync(file, content);
  console.log('fixed', file);
}

const root = path.join(process.cwd(), 'src/app');
fixDir(path.join(root, 'locations'), 'location');
fixDir(path.join(root, 'industries'), 'industry');
patch(path.join(root, 'locations/page.tsx'), 'location', 'index');
patch(path.join(root, 'industries/page.tsx'), 'industry', 'index');
