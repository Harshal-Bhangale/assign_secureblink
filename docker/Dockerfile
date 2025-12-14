# ================================
# Base Image
# ================================
FROM node:18-bullseye

# ================================
# Install system dependencies
# ================================
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    curl \
    git \
    amass \
    && rm -rf /var/lib/apt/lists/*

# ================================
# Set working directory
# ================================
WORKDIR /app

# ================================
# Copy backend code
# ================================
COPY server ./server
COPY python ./python
COPY output ./output

# ================================
# Install Node.js dependencies
# ================================
WORKDIR /app/server
RUN npm install

# ================================
# Install Python dependencies
# ================================
WORKDIR /app/python
RUN pip3 install --no-cache-dir -r requirements.txt

# ================================
# Expose API port
# ================================
EXPOSE 3000

# ================================
# Start Express.js API
# ================================
WORKDIR /app/server
CMD ["npm", "start"]
