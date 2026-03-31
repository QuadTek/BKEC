from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)

DATABASE = 'bkec.db'

def get_db():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    if not os.path.exists(DATABASE):
        conn = sqlite3.connect(DATABASE)
        schema_path = os.path.join(os.path.dirname(__file__), '..', 'database', 'schema.sql')
        with open(schema_path, 'r') as f:
            conn.executescript(f.read())
        conn.commit()
        conn.close()

@app.route('/api/services', methods=['GET'])
def get_services():
    conn = get_db()
    services = conn.execute('SELECT * FROM services').fetchall()
    conn.close()
    return jsonify([dict(row) for row in services])

@app.route('/api/solutions', methods=['GET'])
def get_solutions():
    category = request.args.get('category')
    conn = get_db()
    if category:
        solutions = conn.execute('SELECT * FROM solutions WHERE category = ?', (category,)).fetchall()
    else:
        solutions = conn.execute('SELECT * FROM solutions').fetchall()
    conn.close()
    return jsonify([dict(row) for row in solutions])

@app.route('/api/industries', methods=['GET'])
def get_industries():
    conn = get_db()
    industries = conn.execute('SELECT * FROM industries').fetchall()
    conn.close()
    return jsonify([dict(row) for row in industries])

@app.route('/api/testimonials', methods=['GET'])
def get_testimonials():
    conn = get_db()
    testimonials = conn.execute('SELECT * FROM testimonials ORDER BY created_at DESC').fetchall()
    conn.close()
    return jsonify([dict(row) for row in testimonials])

@app.route('/api/insights', methods=['GET'])
def get_insights():
    conn = get_db()
    insights = conn.execute('SELECT * FROM insights WHERE published = 1 ORDER BY published_at DESC').fetchall()
    conn.close()
    return jsonify([dict(row) for row in insights])

@app.route('/api/insights/<slug>', methods=['GET'])
def get_insight(slug):
    conn = get_db()
    insight = conn.execute('SELECT * FROM insights WHERE slug = ? AND published = 1', (slug,)).fetchone()
    conn.close()
    if insight:
        return jsonify(dict(insight))
    return jsonify({'error': 'Not found'}), 404

@app.route('/api/contact', methods=['POST'])
def submit_contact():
    data = request.json
    conn = get_db()
    conn.execute(
        'INSERT INTO contact_inquiries (name, email, phone, company, message) VALUES (?, ?, ?, ?, ?)',
        (data.get('name'), data.get('email'), data.get('phone'), data.get('company'), data.get('message'))
    )
    conn.commit()
    conn.close()
    return jsonify({'success': True, 'message': 'Thank you for contacting us. We will get back to you soon.'})

@app.route('/api/careers/apply', methods=['POST'])
def apply_career():
    data = request.json
    conn = get_db()
    conn.execute(
        'INSERT INTO career_applications (position, name, email, phone, cover_letter) VALUES (?, ?, ?, ?, ?)',
        (data.get('position'), data.get('name'), data.get('email'), data.get('phone'), data.get('coverLetter'))
    )
    conn.commit()
    conn.close()
    return jsonify({'success': True, 'message': 'Application submitted successfully.'})

@app.route('/api/stats', methods=['GET'])
def get_stats():
    return jsonify({
        'projectsCompleted': 150,
        'clientsSatisfied': 85,
        'industriesServed': 6,
        'yearsExperience': 5
    })

if __name__ == '__main__':
    init_db()
    app.run(host='0.0.0.0', port=5000, debug=True)