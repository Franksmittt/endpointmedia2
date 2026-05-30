import re
from pathlib import Path

case_dir = Path(__file__).resolve().parent.parent / "src" / "app" / "case-studies"

for path in sorted(case_dir.glob("*/page.tsx")):
    text = path.read_text(encoding="utf-8")
    if "Key project outcomes" not in text:
        continue

    text = text.replace(
        '<figcaption className="sr-only">Key project outcomes</figcaption></figure>\n                ',
        "",
    )
    text = text.replace(
        "<figure><div className=\"grid md:grid-cols-4 gap-6 mb-12\">",
        "<figure><figcaption className=\"sr-only\">Key project outcomes</figcaption><div className=\"grid md:grid-cols-4 gap-6 mb-12\">",
    )
    text = re.sub(
        r"(<div className=\"grid md:grid-cols-4 gap-6 mb-12\">[\s\S]*?</div>)(\s*\n\s*</div>\s*\n\s*</div>\s*\n\s*</section>)",
        r"\1</figure>\2",
        text,
        count=1,
    )
    path.write_text(text, encoding="utf-8")
    print("fixed metrics", path.name)
