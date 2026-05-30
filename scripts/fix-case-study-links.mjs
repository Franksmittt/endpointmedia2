import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'src/app/case-studies');
for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const slug = entry.name;
  const file = path.join(dir, slug, 'page.tsx');
  let content = fs.readFileSync(file, 'utf8');
  const tag = `<HubSpokeLinks variant="case-study" slug="${slug}" />`;
  if (content.includes(tag)) continue;
  content = content.replace(
    '      </section>\n    </>\n  );\n};',
    `      </section>\n      ${tag}\n    </>\n  );\n};`,
  );
  fs.writeFileSync(file, content);
  console.log('fixed', slug);
}
