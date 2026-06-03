import zipfile
import os

def build_extension(zip_name, files_to_include):
    print(f"Creating bundle: {zip_name}...")
    with zipfile.ZipFile(zip_name, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for file in files_to_include:
            if os.path.exists(file):
                zipf.write(file)
                print(f"  Added {file}")
            else:
                print(f"  Warning: {file} not found!")
    print("Bundle complete!\n")

if __name__ == "__main__":
    assets = ["manifest.json", "content.js", "poli-perly.html"]
    
    # Generate Zip for Chrome / Firefox uploads 
    build_extension("PoliPerly.zip", assets)