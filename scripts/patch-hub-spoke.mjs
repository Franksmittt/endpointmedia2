import fs from 'fs';
import path from 'path';

const root = path.join(process.cwd(), 'src/app');

function addSeoImports(content, extraImports) {
  if (extraImports.every((line) => content.includes(line.trim()))) return content;
  const match = content.match(/import[^\n]+from ['"]@\/lib\/seo['"];?\n/);
  if (match) {
    const lines = extraImports.filter((line) => !content.includes(line.trim())).join('');
    return content.replace(match[0], `${match[0]}${lines}`);
  }
  return content;
}

function insertBeforeComponentClose(content, insert) {
  if (content.includes(insert.trim())) return content;
  return content.replace(/\n(\s*)<\/>;\n(\s*)\);\n(\s*)\};\n\nexport default/, `\n${insert}\n$1</>;\n$2);\n$3};\n\nexport default`);
}

let count = 0;

const locDir = path.join(root, 'locations');
for (const entry of fs.readdirSync(locDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const slug = entry.name;
  const file = path.join(locDir, slug, 'page.tsx');
  let content = fs.readFileSync(file, 'utf8');
  const insert = `      <HubSpokeLinks variant="location" slug="${slug}" />`;
  if (content.includes(insert)) continue;
  content = addSeoImports(content, ["import HubSpokeLinks from '@/components/seo/HubSpokeLinks';\n"]);
  content = insertBeforeComponentClose(content, insert);
  fs.writeFileSync(file, content);
  count++;
}

{
  const file = path.join(locDir, 'page.tsx');
  let content = fs.readFileSync(file, 'utf8');
  const insert = '      <HubSpokeLinks variant="location" slug="index" />';
  if (!content.includes(insert)) {
    content = addSeoImports(content, ["import HubSpokeLinks from '@/components/seo/HubSpokeLinks';\n"]);
    content = insertBeforeComponentClose(content, insert);
    fs.writeFileSync(file, content);
    count++;
  }
}

const indDir = path.join(root, 'industries');
for (const entry of fs.readdirSync(indDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const slug = entry.name;
  const file = path.join(indDir, slug, 'page.tsx');
  let content = fs.readFileSync(file, 'utf8');
  const insert = `      <HubSpokeLinks variant="industry" slug="${slug}" />`;
  if (content.includes(insert)) continue;
  content = addSeoImports(content, ["import HubSpokeLinks from '@/components/seo/HubSpokeLinks';\n"]);
  content = insertBeforeComponentClose(content, insert);
  fs.writeFileSync(file, content);
  count++;
}

{
  const file = path.join(indDir, 'page.tsx');
  let content = fs.readFileSync(file, 'utf8');
  const insert = '      <HubSpokeLinks variant="industry" slug="index" />';
  if (!content.includes(insert)) {
    content = addSeoImports(content, ["import HubSpokeLinks from '@/components/seo/HubSpokeLinks';\n"]);
    content = insertBeforeComponentClose(content, insert);
    fs.writeFileSync(file, content);
    count++;
  }
}

const csDir = path.join(root, 'case-studies');
for (const entry of fs.readdirSync(csDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const slug = entry.name;
  const file = path.join(csDir, slug, 'page.tsx');
  let content = fs.readFileSync(file, 'utf8');
  content = addSeoImports(content, [
    "import CaseStudyArticleSchema from '@/components/seo/CaseStudyArticleSchema';\n",
    "import HubSpokeLinks from '@/components/seo/HubSpokeLinks';\n",
  ]);
  if (!content.includes(`<CaseStudyArticleSchema slug="${slug}" />`)) {
    content = content.replace(/return \(\s*\n\s*<>/, `return (\n    <>\n      <CaseStudyArticleSchema slug="${slug}" />`);
  }
  const hubInsert = `      <HubSpokeLinks variant="case-study" slug="${slug}" />`;
  if (!content.includes(hubInsert)) {
    content = insertBeforeComponentClose(content, hubInsert);
  }
  fs.writeFileSync(file, content);
  count++;
}

console.log(`Fixed ${count} files`);
