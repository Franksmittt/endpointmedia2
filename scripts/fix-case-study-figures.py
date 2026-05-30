import re
from pathlib import Path

case_dir = Path(__file__).resolve().parent.parent / "src" / "app" / "case-studies"

for path in sorted(case_dir.glob("*/page.tsx")):
    text = path.read_text(encoding="utf-8")
    text = re.sub(
        r'(<figure className="max-w-4xl">[\s\S]*?<h1 className="[^"]+">[\s\S]*?</h1>\s*)'
        r'<p className="([^"]+)">\s*([\s\S]*?)\s*</p>\s*</div>',
        lambda m: (
            f'{m.group(1)}<figcaption className="{m.group(2)}">{m.group(3).strip()}</figcaption>\n          </figure>'
        ),
        text,
        count=1,
    )
    path.write_text(text, encoding="utf-8")
    print("fixed figure", path.name)
