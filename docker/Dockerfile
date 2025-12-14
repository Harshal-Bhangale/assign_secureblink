# ================================
# Base Image
# ================================
FROM node:18-bullseye

# ================================
# Install System Dependencies
# ================================
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    curl \
    tar \
    git \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# ================================
# Install OWASP Amass
# ================================
RUN curl -L https://github.com/owasp-amass/amass/releases/latest/download/amass_linux_amd64.tar.gz \
    -o amass.tar.gz && \
    tar -xzf amass.tar.gz && \
    mv amass_linux_amd64/amass /usr/local/bin/amass && \
    chmod +x /usr/local/bin/amass && \
    rm -rf amass.tar.gz amass_linux_amd64

# ================================
# Set Working Directory
# ================================
WORKDIR /app

# ================================
# Copy Backend Code
# ================================
COPY server ./server
COPY python ./python

# ================================
# Install Node Dependencies
# ================================
WORKDIR /app/server
RUN npm install

# ================================
# Install Python Dependencies
# ================================
WORKDIR /app/python
RUN pip3 install --no-cache-dir -r requirements.txt

# ================================
# Expose Port
# ================================
EXPOSE 3000

# ================================
# Start Server
# ================================
WORKDIR /app/server
CMD ["npm", "start"]
