from http.server import BaseHTTPRequestHandler
import json
from urllib.parse import urlparse, parse_qs

SOLUTIONS = [
    {"id": 1, "name": "Digital Standee Hub", "category": "Advertisement Screens", "description": "Premium commercial kiosks with industrial-grade displays", "specifications": "32\" to 100\" | 4K Resolution | Remote CMS | Free Signage Software"},
    {"id": 2, "name": "LED Video Walls", "category": "Advertisement Screens", "description": "Indoor & outdoor high-performance LED displays", "specifications": "P1-P10 Pixel Pitch | Up to 6500 Nits | 3840Hz+ Refresh | IP65 Weatherproof"},
    {"id": 3, "name": "PLC Interface Display", "category": "Industrial Display", "description": "Universal protocol screens for machinery integration", "specifications": "TCP/IP | MODBUS | RS485 | PROFINET"},
    {"id": 4, "name": "Production Count Display", "category": "Industrial Display", "description": "Real-time shop floor output tracking", "specifications": "Multi-sensor input | High-visibility LED"},
    {"id": 5, "name": "Air Quality Display", "category": "Industrial Display", "description": "Precision environmental monitoring", "specifications": "PM2.5, PM10, CO2, Humidity | Factory-grade"},
    {"id": 6, "name": "IoT Dashboard", "category": "Industrial Display", "description": "Consolidated telemetry visualization", "specifications": "Cloud monitoring | Mesh connectivity"},
    {"id": 7, "name": "Sports Scoreboard", "category": "Industrial Display", "description": "Multi-sport scoring systems", "specifications": "Wireless controls | Precision timing"},
    {"id": 8, "name": "Thermal Hub", "category": "Industrial Display", "description": "High-precision thermal monitoring", "specifications": "RTD | Thermocouple | 0.05% Accuracy"},
    {"id": 9, "name": "VX1 Series", "category": "E-Mobility", "description": "Integrated electric propulsion attachment", "specifications": "Permanent integration | Industrial Logic V1"},
    {"id": 10, "name": "VX2 Series", "category": "E-Mobility", "description": "Detachable modular electric unit", "specifications": "Manual/Electric switching | Hybrid Flex Core"},
    {"id": 11, "name": "VX3 Enterprise", "category": "E-Mobility", "description": "3-wheel business EV platform", "specifications": "Load capacity 150kg+ | Industrial logistics"},
    {"id": 12, "name": "Joystick Assist", "category": "E-Mobility", "description": "Power wheelchair solution", "specifications": "Sub-millisecond response | Neural Assist Logic"},
    {"id": 13, "name": "E-Folding Trike", "category": "E-Mobility", "description": "Portable electric tricycle", "specifications": "High-tensile folding | Ultra-compact"},
    {"id": 14, "name": "Universal PID Controller", "category": "Embedded AIML", "description": "IoT-enabled universal controller", "specifications": "Logic Core | Remote monitoring"},
    {"id": 15, "name": "Temperature Indicator", "category": "Embedded AIML", "description": "Universal thermal monitoring", "specifications": "Multi-sensor support | High precision"},
    {"id": 16, "name": "Signal Isolator", "category": "Embedded AIML", "description": "Universal signal conditioning", "specifications": "Signal Sync technology"},
    {"id": 17, "name": "AI Voice Hub", "category": "Embedded AIML", "description": "Voice-synthesis for educational campuses", "specifications": "Dynamic scheduling | Exam-mode logic"},
    {"id": 18, "name": "Dharti Netra", "category": "Embedded AIML", "description": "Agricultural intelligence system", "specifications": "Weather & soil monitoring | Real-time insights"},
]

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        parsed = urlparse(self.path)
        params = parse_qs(parsed.query)
        category = params.get('category', [None])[0]
        data = [s for s in SOLUTIONS if s['category'] == category] if category else SOLUTIONS
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps(data).encode())
