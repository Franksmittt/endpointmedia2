import os

# --- Configuration ---

# 1. SET THIS to the name you save this script as.
SCRIPT_NAME = "create_context.py"

# 2. This will be the name of the file created.
OUTPUT_FILE = "project_context.txt"

# 3. Add any folder *names* you want to skip.
EXCLUDED_FOLDERS = {
    "node_modules",
    ".next",
    ".git",          # Good to exclude git history
    "venv",          # Good to exclude virtual environments
    "__pycache__"    # Good to exclude Python cache
}

# 4. Add any file *extensions* you want to skip (images, video, etc.)
EXCLUDED_EXTENSIONS = {
    # Images
    ".png", ".jpg", ".jpeg", ".gif", ".bmp", ".svg", ".webp", ".ico",
    # Video/Audio
    ".mp4", ".mov", ".avi", ".mkv", ".mp3", ".wav", ".ogg",
    # Fonts
    ".ttf", ".woff", ".woff2", ".eot",
    # Other binary
    ".pdf", ".zip", ".gz", ".rar", ".exe", ".dll", ".so", ".bin"
}

# --- End of Configuration ---


def main():
    # Get the directory where this script is located
    root_dir = os.getcwd()
    print(f"Scanning directory: {root_dir}\n")

    # Get the full, absolute paths for the script and output file
    script_path = os.path.abspath(os.path.join(root_dir, SCRIPT_NAME))
    output_path = os.path.abspath(os.path.join(root_dir, OUTPUT_FILE))

    try:
        # Open the output file in 'write' mode (clears it first)
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as outfile:
            
            # Walk through the directory tree
            for root, dirs, files in os.walk(root_dir, topdown=True):
                
                # Prune excluded directories
                # We modify 'dirs' in-place to stop os.walk from entering them
                dirs[:] = [d for d in dirs if d not in EXCLUDED_FOLDERS]
                
                # Process files
                for file in files:
                    file_path = os.path.join(root, file)
                    abs_file_path = os.path.abspath(file_path)

                    # --- Check for Exclusions ---
                    
                    # 1. Skip the script itself
                    if abs_file_path == script_path:
                        continue
                        
                    # 2. Skip the output file
                    if abs_file_path == output_path:
                        continue

                    # 3. Skip based on extension
                    file_ext = os.path.splitext(file)[1].lower()
                    if file_ext in EXCLUDED_EXTENSIONS:
                        continue
                        
                    # --- Process the File ---
                    try:
                        # Write the file path header (as requested)
                        outfile.write(f"--- Path: {abs_file_path} ---\n\n")
                        
                        # Read and write the file content
                        with open(abs_file_path, 'r', encoding='utf-8') as infile:
                            content = infile.read()
                            outfile.write(content)
                        
                        # Add a separator for readability
                        outfile.write("\n\n---\n\n")
                        print(f"Processed: {abs_file_path}")

                    except UnicodeDecodeError:
                        # This happens for binary files we didn't filter
                        outfile.write("[Error: Could not read file. Likely binary or non-text file.]\n\n---\n\n")
                        print(f"Skipped (binary): {abs_file_path}")
                    except Exception as e:
                        outfile.write(f"[Error reading file {abs_file_path}: {e}]\n\n---\n\n")
                        print(f"Error on file: {abs_file_path} ({e})")

        print(f"\n✅ Success! All content written to {OUTPUT_FILE}")

    except Exception as e:
        print(f"\n❌ An error occurred: {e}")

if __name__ == "__main__":
    main()