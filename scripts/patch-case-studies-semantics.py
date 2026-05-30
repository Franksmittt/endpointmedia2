import re
from pathlib import Path

case_dir = Path(__file__).resolve().parent.parent / "src" / "app" / "case-studies"

for path in sorted(case_dir.glob("*/page.tsx")):
    text = path.read_text(encoding="utf-8")
    if "itemScope" in text:
        print("skip", path.name)
        continue

    text = re.sub(
        r'(<CaseStudyArticleSchema slug="[^"]+" />)',
        r'\1\n      <article itemScope itemType="https://schema.org/Article">',
        text,
        count=1,
    )

    text = re.sub(
        r'(\n      <HubSpokeLinks variant="case-study" slug="[^"]+" />)',
        r"\1\n      </article>",
        text,
        count=1,
    )

    text = text.replace('<div className="max-w-4xl">', '<figure className="max-w-4xl">', 1)

    text = re.sub(
        r'(<h1 className="[^"]+">[\s\S]*?</h1>\s*)<p className="([^"]+)">\s*([\s\S]*?)\s*</p>\s*</figure>',
        lambda m: f'{m.group(1)}<figcaption className="{m.group(2)}">{m.group(3).strip()}</figcaption>\n          </figure>',
        text,
        count=1,
    )

    text = re.sub(
        r'(<div className="grid md:grid-cols-4 gap-6 mb-12">[\s\S]*?</div>)',
        r'<figure>\1<figcaption className="sr-only">Key project outcomes</figcaption></figure>',
        text,
        count=1,
    )

    path.write_text(text, encoding="utf-8")
    print("updated", path.name)
