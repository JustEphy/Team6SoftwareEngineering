import os

DATABASE_URL = "postgresql://myuser:mypassword@localhost:5432/mydatabase"
SECRET_KEY = os.getenv("FLASK_SECRET_KEY", "supersecretkey")