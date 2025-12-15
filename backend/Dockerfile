# === Stage 1: Build dependencies ===
FROM python:3.10-slim AS builder

# Set noninteractive to avoid prompts during apt installs
ENV DEBIAN_FRONTEND=noninteractive

WORKDIR /app

# Install only the essential build tools needed for Python packages
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        gcc \
        g++ \
        make \
        curl \
        libffi-dev \
        libssl-dev \
        && rm -rf /var/lib/apt/lists/*

# Copy only requirements first for caching
COPY requirements.txt .

# Install Python packages into /install to copy to final image
RUN pip install --prefix=/install --no-cache-dir -r requirements.txt

# === Stage 2: Final image ===
FROM python:3.10-slim

WORKDIR /app

# Copy installed packages from builder
COPY --from=builder /install /usr/local

# Copy the rest of your app code
COPY . .

# Expose port
EXPOSE 5000

# Run Gunicorn in production
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "server:app", "--workers", "3", "--threads", "2", "--timeout", "120"]





#This assumes your Flask entrypoint exposes app in server.py (which you already have: app = Flask(__name__)).

#If your app is in another module path change server:app accordingly.