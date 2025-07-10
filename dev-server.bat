@echo off
echo Starting local development server...
echo.
echo Your site is now running at:
echo http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo.

REM Start a simple Python HTTP server (if Python is available)
python -m http.server 8000 2>nul || (
    echo Python not found. Opening the HTML file directly...
    start index.html
)
