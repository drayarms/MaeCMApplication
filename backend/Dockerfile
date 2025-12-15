FROM python:3.10-slim
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV DEBIAN_FRONTEND=noninteractive

WORKDIR /app

# system deps (if any)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# expose internal port
EXPOSE 5000

# Run with Gunicorn for production
# Adjust worker count as needed; using 3 as a safe default
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "server:app", "--workers", "3", "--threads", "2", "--timeout", "120"]





#This assumes your Flask entrypoint exposes app in server.py (which you already have: app = Flask(__name__)).

#If your app is in another module path change server:app accordingly.