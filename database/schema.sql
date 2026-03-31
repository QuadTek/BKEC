-- Database Schema for BKEC Website

-- Services Table
CREATE TABLE IF NOT EXISTS services (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    icon VARCHAR(100),
    category VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Solutions Table
CREATE TABLE IF NOT EXISTS solutions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(200) NOT NULL,
    category VARCHAR(100),
    description TEXT,
    specifications TEXT,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Industries Table
CREATE TABLE IF NOT EXISTS industries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    icon VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_name VARCHAR(200) NOT NULL,
    company VARCHAR(200),
    position VARCHAR(200),
    testimonial TEXT,
    rating INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact Inquiries Table
CREATE TABLE IF NOT EXISTS contact_inquiries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL,
    phone VARCHAR(20),
    company VARCHAR(200),
    message TEXT,
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Career Applications Table
CREATE TABLE IF NOT EXISTS career_applications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    position VARCHAR(200) NOT NULL,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL,
    phone VARCHAR(20),
    resume_path VARCHAR(255),
    cover_letter TEXT,
    status VARCHAR(50) DEFAULT 'received',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Blog/Insights Table
CREATE TABLE IF NOT EXISTS insights (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(300) NOT NULL,
    slug VARCHAR(300) NOT NULL UNIQUE,
    content TEXT,
    excerpt TEXT,
    author VARCHAR(200),
    category VARCHAR(100),
    image_url VARCHAR(255),
    published BOOLEAN DEFAULT 0,
    published_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Sample Data

-- Services
INSERT INTO services (title, description, icon, category) VALUES
('Technology Consulting', 'Strategic technology advisory for digital transformation and operational excellence', 'lightbulb', 'consulting'),
('Project Execution', 'End-to-end implementation from R&D to deployment', 'cog', 'execution'),
('Indigenisation Solutions', 'Reduce import dependency through domestic component manufacturing', 'flag', 'manufacturing'),
('System Integration', 'Seamless integration of multi-sector technology solutions', 'network', 'integration'),
('Maintenance & Support', 'Comprehensive post-deployment support and optimization', 'wrench', 'support'),
('R&D & Prototyping', 'Custom solution development and rapid prototyping', 'flask', 'innovation');

-- Solutions
INSERT INTO solutions (name, category, description, specifications) VALUES
('Digital Standee Hub', 'Advertisement Screens', 'Premium commercial kiosks with industrial-grade displays', '32" to 100" | 4K Resolution | Remote CMS | Free Signage Software'),
('LED Video Walls', 'Advertisement Screens', 'Indoor & outdoor high-performance LED displays', 'P1-P10 Pixel Pitch | Up to 6500 Nits | 3840Hz+ Refresh | IP65 Weatherproof'),
('PLC Interface Display', 'Industrial Display', 'Universal protocol screens for machinery integration', 'TCP/IP | MODBUS | RS485 | PROFINET'),
('Production Count Display', 'Industrial Display', 'Real-time shop floor output tracking', 'Multi-sensor input | High-visibility LED'),
('Air Quality Display', 'Industrial Display', 'Precision environmental monitoring', 'PM2.5, PM10, CO2, Humidity | Factory-grade'),
('IoT Dashboard', 'Industrial Display', 'Consolidated telemetry visualization', 'Cloud monitoring | Mesh connectivity'),
('Sports Scoreboard', 'Industrial Display', 'Multi-sport scoring systems', 'Wireless controls | Precision timing'),
('Thermal Hub', 'Industrial Display', 'High-precision thermal monitoring', 'RTD | Thermocouple | 0.05% Accuracy'),
('VX1 Series', 'E-Mobility', 'Integrated electric propulsion attachment', 'Permanent integration | Industrial Logic V1'),
('VX2 Series', 'E-Mobility', 'Detachable modular electric unit', 'Manual/Electric switching | Hybrid Flex Core'),
('VX3 Enterprise', 'E-Mobility', '3-wheel business EV platform', 'Load capacity 150kg+ | Industrial logistics'),
('Joystick Assist', 'E-Mobility', 'Power wheelchair solution', 'Sub-millisecond response | Neural Assist Logic'),
('E-Folding Trike', 'E-Mobility', 'Portable electric tricycle', 'High-tensile folding | Ultra-compact'),
('Universal PID Controller', 'Embedded AIML', 'IoT-enabled universal controller', 'Logic Core | Remote monitoring'),
('Temperature Indicator', 'Embedded AIML', 'Universal thermal monitoring', 'Multi-sensor support | High precision'),
('Signal Isolator', 'Embedded AIML', 'Universal signal conditioning', 'Signal Sync technology'),
('AI Voice Hub', 'Embedded AIML', 'Voice-synthesis for educational campuses', 'Dynamic scheduling | Exam-mode logic'),
('Dharti Netra', 'Embedded AIML', 'Agricultural intelligence system', 'Weather & soil monitoring | Real-time insights');

-- Industries
INSERT INTO industries (name, description, icon) VALUES
('Agriculture', 'Precision farming, agri-drones, and smart monitoring systems', 'leaf'),
('Defence', 'Indigenous surveillance tech and reconnaissance solutions', 'shield'),
('Manufacturing', 'Automation, component indigenisation, and process optimization', 'industry'),
('Infrastructure', 'Smart city solutions and modernisation projects', 'building'),
('Railways', 'Component manufacturing and operational efficiency solutions', 'train'),
('Education', 'Campus automation and smart learning infrastructure', 'graduation-cap');

-- Testimonials
INSERT INTO testimonials (client_name, company, position, testimonial, rating) VALUES
('Rajesh Kumar', 'AgriTech Solutions Pvt Ltd', 'Operations Director', 'BKEC transformed our farming operations with their precision drone technology. The ROI was visible within the first season itself.', 5),
('Priya Sharma', 'Maharashtra Railways', 'Chief Engineer', 'Their indigenised traction motor components saved us millions in forex while maintaining superior quality standards.', 5),
('Amit Patel', 'Defence Systems India', 'Project Manager', 'BKEC delivered reconnaissance drones that exceeded our expectations in both performance and cost-effectiveness.', 5);

-- Insights
INSERT INTO insights (title, slug, content, excerpt, author, category, published, published_at) VALUES
('The Future of Indigenous Defence Technology', 'future-indigenous-defence-technology', 'Full article content here...', 'How India is reducing dependency on foreign defence technology through innovation and indigenisation.', 'Aditya Shyam Kaple', 'Defence', 1, datetime('now')),
('Precision Agriculture: Transforming Indian Farming', 'precision-agriculture-transforming-farming', 'Full article content here...', 'Exploring how drone technology and AI are revolutionizing agricultural practices across India.', 'Saurav Suresh Bombatkar', 'Agriculture', 1, datetime('now')),
('Make in India: The Manufacturing Revolution', 'make-in-india-manufacturing-revolution', 'Full article content here...', 'Understanding the impact of component indigenisation on India''s manufacturing sector.', 'Aditya Shyam Kaple', 'Manufacturing', 1, datetime('now'));
