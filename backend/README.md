# Foodeo Backend API

## How to Run Backend Locally

### 1. Set Up Environment Workspace
Navigate cleanly into the backend directory path zone:
```bash
cd backend

Create and run an active python virtual environment:

python -m venv .venv
# Activate on Windows PowerShell:
.venv\Scripts\Activate.ps1
# Activate on Mac/Linux:
source .venv/bin/activate

2. Install Project Requirements

python -m pip install -r requirements.txt

3. Configure Local Secrets Map

cp .env.example .env

4. Boot Up Server Pipeline

python app/main.py
Open up your browser and track live endpoint testing arrays natively via http://127.0.0.1:8000/docs!