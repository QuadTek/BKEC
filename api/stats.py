from http.server import BaseHTTPRequestHandler
import json

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps({
            'projectsCompleted': 150,
            'clientsSatisfied': 85,
            'industriesServed': 6,
            'yearsExperience': 5
        }).encode())
