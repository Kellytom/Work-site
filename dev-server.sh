#!/bin/bash
echo "Starting local development server..."
echo ""
echo "Your site is now running at:"
echo "http://localhost:8000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start a simple Python HTTP server
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m http.server 8000
else
    echo "Python not found. Opening the HTML file directly..."
    if command -v open &> /dev/null; then
        open index.html
    elif command -v xdg-open &> /dev/null; then
        xdg-open index.html
    else
        echo "Please open index.html in your browser manually"
    fi
fi
