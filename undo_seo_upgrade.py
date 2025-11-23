import os
import shutil

# AUTO-GENERATED UNDO SCRIPT
FILES_TO_REMOVE = ['C:\\Users\\User1\\endpointmedia\\src\\app\\api\\indexnow\\route.ts', 'C:\\Users\\User1\\endpointmedia\\src\\components\\analytics\\web-vitals.tsx', 'C:\\Users\\User1\\endpointmedia\\src\\components\\analytics\\gtm-partytown.tsx', 'C:\\Users\\User1\\endpointmedia\\src\\app\\blog\\[slug]\\opengraph-image.tsx']
BACKUPS_TO_RESTORE = {}

def main():
    print("=== STARTING UNDO PROCESS ===")
    for file_path in FILES_TO_REMOVE:
        if os.path.exists(file_path):
            try:
                os.remove(file_path)
                print(f"[DELETED] {file_path}")
                try:
                    os.rmdir(os.path.dirname(file_path))
                except OSError:
                    pass 
            except Exception as e:
                print(f"[ERROR] Could not delete {file_path}: {e}")

    for original, backup in BACKUPS_TO_RESTORE.items():
        if os.path.exists(backup):
            try:
                shutil.move(backup, original)
                print(f"[RESTORED] {original}")
            except Exception as e:
                print(f"[ERROR] Could not restore {original}: {e}")

    print("=== UNDO COMPLETE ===")

if __name__ == "__main__":
    main()
