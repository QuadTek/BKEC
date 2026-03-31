from http.server import BaseHTTPRequestHandler
import json

INSIGHTS = [
    {"id": 1, "title": "The Future of Indigenous Defence Technology", "slug": "future-indigenous-defence-technology", "excerpt": "How India is reducing dependency on foreign defence technology through innovation and indigenisation.", "author": "Aditya Shyam Kaple", "category": "Defence", "image_url": None, "published": 1, "published_at": "2026-03-01T00:00:00", "content": "India's defence sector is undergoing a transformative shift. With the government's push for Atmanirbhar Bharat, indigenous defence technology is no longer a distant dream but a rapidly evolving reality. BKEC is at the forefront of this revolution, developing surveillance drones, reconnaissance systems, and embedded solutions that reduce our dependence on foreign technology. The journey involves not just manufacturing but deep R&D, testing, and iterative improvement — a process that BKEC has mastered across multiple defence projects."},
    {"id": 2, "title": "Precision Agriculture: Transforming Indian Farming", "slug": "precision-agriculture-transforming-farming", "excerpt": "Exploring how drone technology and AI are revolutionizing agricultural practices across India.", "author": "Saurav Suresh Bombatkar", "category": "Agriculture", "image_url": None, "published": 1, "published_at": "2026-02-15T00:00:00", "content": "Indian agriculture is at a crossroads. With increasing pressure on yields, water scarcity, and the need to reduce chemical inputs, precision agriculture offers a compelling path forward. BKEC's Dharti Netra system combines soil sensors, weather monitoring, and AI-driven insights to help farmers make data-backed decisions. Coupled with agri-drones for targeted spraying, the results speak for themselves — reduced input costs, higher yields, and a more sustainable farming model."},
    {"id": 3, "title": "Make in India: The Manufacturing Revolution", "slug": "make-in-india-manufacturing-revolution", "excerpt": "Understanding the impact of component indigenisation on India's manufacturing sector.", "author": "Aditya Shyam Kaple", "category": "Manufacturing", "image_url": None, "published": 1, "published_at": "2026-01-20T00:00:00", "content": "The Make in India initiative has catalyzed a fundamental rethinking of how Indian companies source and manufacture components. BKEC's indigenisation solutions help industries replace imported parts with domestically manufactured equivalents — without compromising on quality. From traction motor components for railways to precision electronic assemblies for defence, BKEC is proving that Indian manufacturing can compete on the global stage."},
]

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        # Extract slug from path: /api/insights/[slug]
        slug = self.path.strip('/').split('/')[-1]
        insight = next((i for i in INSIGHTS if i['slug'] == slug), None)
        if insight:
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(insight).encode())
        else:
            self.send_response(404)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({'error': 'Not found'}).encode())
