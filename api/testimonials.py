from http.server import BaseHTTPRequestHandler
import json

TESTIMONIALS = [
    {"id": 1, "client_name": "Rajesh Kumar", "company": "AgriTech Solutions Pvt Ltd", "position": "Operations Director", "testimonial": "BKEC transformed our farming operations with their precision drone technology. The ROI was visible within the first season itself.", "rating": 5},
    {"id": 2, "client_name": "Priya Sharma", "company": "Maharashtra Railways", "position": "Chief Engineer", "testimonial": "Their indigenised traction motor components saved us millions in forex while maintaining superior quality standards.", "rating": 5},
    {"id": 3, "client_name": "Amit Patel", "company": "Defence Systems India", "position": "Project Manager", "testimonial": "BKEC delivered reconnaissance drones that exceeded our expectations in both performance and cost-effectiveness.", "rating": 5},
]

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps(TESTIMONIALS).encode())
