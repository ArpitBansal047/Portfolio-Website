import sys
path = r"C:\Apps\Docs\Arpit_Bansal_24May26.pdf"
try:
    import pypdf
    r = pypdf.PdfReader(path)
    for p in r.pages:
        print(p.extract_text() or "")
except Exception:
    try:
        import PyPDF2
        r = PyPDF2.PdfReader(open(path, "rb"))
        for p in r.pages:
            print(p.extract_text() or "")
    except Exception as e:
        print("FAILED", e, file=sys.stderr)
        sys.exit(1)
