import sys

# Try to import PDF libraries
try:
    import PyPDF2
    USE_PYPDF2 = True
except ImportError:
    try:
        import pdfplumber
        USE_PYPDF2 = False
    except ImportError:
        print("Error: Neither PyPDF2 nor pdfplumber is installed.")
        print("Please install one: pip install PyPDF2  OR  pip install pdfplumber")
        sys.exit(1)

def extract_text_pypdf2(pdf_path):
    """Extract text using PyPDF2"""
    text = ""
    with open(pdf_path, 'rb') as file:
        pdf_reader = PyPDF2.PdfReader(file)
        for page in pdf_reader.pages:
            text += page.extract_text() + "\n"
    return text

def extract_text_pdfplumber(pdf_path):
    """Extract text using pdfplumber"""
    text = ""
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text += page.extract_text() + "\n"
    return text

if __name__ == "__main__":
    pdf_path = r"C:\Users\User1\endpointmedia\EndpointMedia_Research.pdf"
    
    try:
        if USE_PYPDF2:
            print("Using PyPDF2...")
            text = extract_text_pypdf2(pdf_path)
        else:
            print("Using pdfplumber...")
            text = extract_text_pdfplumber(pdf_path)
        
        # Save to a text file
        output_path = "EndpointMedia_Research_extracted.txt"
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(text)
        
        print(f"Extracted {len(text)} characters from PDF")
        print(f"Text saved to: {output_path}")
        
    except Exception as e:
        print(f"Error extracting PDF: {e}")
        sys.exit(1)

