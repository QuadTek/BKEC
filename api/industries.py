from http.server import BaseHTTPRequestHandler
import json

INDUSTRIES = [
    {"id": 1, "name": "Agriculture", "description": "Precision farming, agri-drones, and smart monitoring systems", "icon": "leaf"},
    {"id": 2, "name": "Defence", "description": "Indigenous surveillance tech and reconnaissance solutions", "icon": "shield"},
    {"id": 3, "name": "Manufacturing", "description": "Automation, component indigenisation, and process optimization", "icon": "industry"},
    {"id": 4, "name": "Infrastructure", "description": "Smart city solutions and modernisation projects", "icon": "building"},
    {"id": 5, "name": "Railways", "description": "Component manufacturing and operational efficiency solutions", "icon": "train"},
    {"id": 6, "name": "Education", "description": "Campus automation and smart learning infrastructure", "icon": "graduation-cap"},
]

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps(INDUSTRIES).encode())
