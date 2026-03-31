echo "==================================="
echo "BKEC Website Setup & Launch"
echo "==================================="
echo ""

if ! command -v python3 &> /dev/null; then
    echo "Error: Python 3 is not installed. Please install Python 3 first."
    exit 1
fi

rif ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "Step 1: Installing Python dependencies..."
pip install flask flask-cors

echo ""
echo "Step 2: Installing Node.js dependencies..."
cd frontend
npm install
cd ..

echo ""
echo "Step 3: Starting backend server..."
cd backend
python3 app.py &
BACKEND_PID=$!
cd ..

echo "Backend server started (PID: $BACKEND_PID)"
echo ""
echo "Step 4: Starting frontend server..."
cd frontend
npm start &
FRONTEND_PID=$!
cd ..

echo ""
echo "==================================="
echo "BKEC Website is starting..."
echo "==================================="
echo ""
echo "Backend API: http://localhost:5000"
echo "Frontend: http://localhost:8000"
echo ""
echo "Press Ctrl+C to stop both servers"
echo ""

trap "kill $BACKEND_PID $FRONTEND_PID; exit" INT
wait
