from http.server import BaseHTTPRequestHandler
import json

SERVICES = [
    {"id": 1, "title": "Technology Consulting", "description": "Strategic technology advisory for digital transformation and operational excellence", "icon": "lightbulb", "category": "consulting"},
    {"id": 2, "title": "Project Execution", "description": "End-to-end implementation from R&D to deployment", "icon": "cog", "category": "execution"},
    {"id": 3, "title": "Indigenisation Solutions", "description": "Reduce import dependency through domestic component manufacturing", "icon": "flag", "category": "manufacturing"},
    {"id": 4, "title": "System Integration", "description": "Seamless integration of multi-sector technology solutions", "icon": "network", "category": "integration"},
    {"id": 5, "title": "Maintenance & Support", "description": "Comprehensive post-deployment support and optimization", "icon": "wrench", "category": "support"},
    {"id": 6, "title": "R&D & Prototyping", "description": "Custom solution development and rapid prototyping", "icon": "flask", "category": "innovation"},
]

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps(SERVICES).encode())
