import os
import shutil
from pathlib import Path

# ==============================================================================
# CONFIGURATION
# ==============================================================================
PROJECT_ROOT = os.getcwd()
SRC_DIR = os.path.join(PROJECT_ROOT, "src")
UNDO_SCRIPT_NAME = "undo_seo_upgrade.py"

# Files to be created
FILES_TO_CREATE = [
    # 1. THE LIVE WIRE (IndexNow API)
    {
        "path": os.path.join("app", "api", "indexnow", "route.ts"),
        "content": """import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // 1. Security: Authenticate the request
  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.INDEXNOW_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { urls } = await req.json();
  
  // 2. The IndexNow Protocol
  const payload = {
    host: 'endpointmedia.co.za',
    key: process.env.INDEXNOW_KEY, // Get from Bing Webmaster Tools
    keyLocation: `https://endpointmedia.co.za/${process.env.INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  try {
    // 3. Fire and Forget to Bing
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({ success: response.ok });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to sync with IndexNow' }, { status: 500 });
  }
}
"""
    },
    # 2. THE TELEMETRY (Web Vitals Reporter)
    {
        "path": os.path.join("components", "analytics", "web-vitals.tsx"),
        "content": """'use client';
 
import { useReportWebVitals } from 'next/web-vitals';
 
export function WebVitals() {
  useReportWebVitals((metric) => {
    // Only log Core Web Vitals
    if (['CLS', 'LCP', 'INP'].includes(metric.name)) {
      // Send to GA4 if available
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_category: 'Web Vitals',
          event_label: metric.id,
          non_interaction: true,
        });
      }
      // Optional: Log to console in dev
      if (process.env.NODE_ENV === 'development') {
        console.log('[Vital]', metric.name, metric.value);
      }
    }
  });
 
  return null;
}
"""
    },
    # 3. THE PERFORMANCE SHIELD (Partytown GTM)
    {
        "path": os.path.join("components", "analytics", "gtm-partytown.tsx"),
        "content": """'use client';

import Script from 'next/script';

export function GoogleTagManager({ containerId }: { containerId: string }) {
  return (
    <>
      <Script
        id="gtm-partytown"
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${containerId}');
          `,
        }}
      />
    </>
  );
}
"""
    },
    # 4. THE SOCIAL ENGINE (Dynamic OG Image for Blogs)
    {
        "path": os.path.join("app", "blog", "[slug]", "opengraph-image.tsx"),
        "content": """import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Placeholder data fetcher - In a real DB app, you'd fetch the post title here.
// For now, we extract the slug to make a decent title.
function getTitleFromSlug(slug: string) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default async function Image({ params }: { params: { slug: string } }) {
  const title = getTitleFromSlug(params.slug);

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#111827', // Gray-900
          padding: '80px',
        }}
      >
        {/* Brand Accent Line */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '16px', background: '#14b8a6' }} />

        {/* Logo / Brand */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: 30, color: '#14b8a6', fontWeight: 800 }}>Endpoint.Media</div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 70,
            fontWeight: 900,
            color: 'white',
            lineHeight: 1.1,
            marginBottom: '30px',
            textTransform: 'uppercase',
          }}
        >
          {title}
        </div>

        {/* Tagline */}
        <div style={{ fontSize: 30, color: '#9ca3af', fontWeight: 500 }}>
          Expert Insights for Johannesburg Businesses
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
"""
    }
]

def generate_undo_script(created_files, backed_up_files):
    undo_content = f"""import os
import shutil

# AUTO-GENERATED UNDO SCRIPT
FILES_TO_REMOVE = {created_files}
BACKUPS_TO_RESTORE = {backed_up_files}

def main():
    print("=== STARTING UNDO PROCESS ===")
    for file_path in FILES_TO_REMOVE:
        if os.path.exists(file_path):
            try:
                os.remove(file_path)
                print(f"[DELETED] {{file_path}}")
                try:
                    os.rmdir(os.path.dirname(file_path))
                except OSError:
                    pass 
            except Exception as e:
                print(f"[ERROR] Could not delete {{file_path}}: {{e}}")

    for original, backup in BACKUPS_TO_RESTORE.items():
        if os.path.exists(backup):
            try:
                shutil.move(backup, original)
                print(f"[RESTORED] {{original}}")
            except Exception as e:
                print(f"[ERROR] Could not restore {{original}}: {{e}}")

    print("=== UNDO COMPLETE ===")

if __name__ == "__main__":
    main()
"""
    with open(UNDO_SCRIPT_NAME, "w", encoding="utf-8") as f:
        f.write(undo_content)
    print(f"[SAFETY] Undo script created at: {UNDO_SCRIPT_NAME}")

def main():
    print("=== ORACLE SEO UPGRADE: ENDPOINT MEDIA ===")
    created_files = []
    backed_up_files = {}

    for item in FILES_TO_CREATE:
        full_path = os.path.join(SRC_DIR, item["path"])
        dir_name = os.path.dirname(full_path)
        
        if not os.path.exists(dir_name):
            os.makedirs(dir_name, exist_ok=True)

        if os.path.exists(full_path):
            backup_path = full_path + ".bak_oracle"
            shutil.copy2(full_path, backup_path)
            backed_up_files[full_path] = backup_path
            print(f"[BACKUP] {full_path} -> {backup_path}")

        try:
            with open(full_path, "w", encoding="utf-8") as f:
                f.write(item["content"])
            created_files.append(full_path)
            print(f"[WRITE] {item['path']}")
        except Exception as e:
            print(f"[ERROR] Failed to write {item['path']}: {e}")

    generate_undo_script(created_files, backed_up_files)
    print("\\n=== UPGRADE COMPLETE ===")
    print("Please perform the manual integration steps in `layout.tsx`.")

if __name__ == "__main__":
    main()