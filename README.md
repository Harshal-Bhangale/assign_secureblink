# 🌐 ReconScope (By Secure Blink) 
### Comprehensive Domain Reconnaissance Tool

ReconScope is a powerful, open-source reconnaissance tool designed to provide **clear visibility into a domain's public attack surface**.  
By automating subdomain enumeration and asset identification, ReconScope helps organizations, security professionals, and students **proactively identify exposed assets, assess risk, and take necessary security measures**.

---

## ✨ Features

- **Subdomain Discovery**  
  Utilizes powerful tools like **OWASP Amass** to identify hidden and exposed subdomains.

- **Active Asset Verification**  
  Determines which discovered subdomains are live and accessible, distinguishing active services from inactive ones.

- **Risk-Based Asset Classification**  
  Assigns risk levels (Critical, High, Medium, Low) to active assets based on exposure and characteristics.

- **Structured Reporting**  
  Generates detailed, machine-readable reports in **JSON** or **CSV** formats.

- **Infrastructure Insights**  
  Provides visibility into infrastructure exposure and overall security posture.

---

## 🎯 Use Cases

- **Attack Surface Discovery**  
  Gain a complete view of all publicly accessible assets.

- **Security Assessments and Audits**  
  Support comprehensive security evaluations with accurate reconnaissance data.

- **Penetration Testing Reconnaissance**  
  Collect initial intelligence on target domains.

- **Infrastructure Visibility and Monitoring**  
  Maintain an up-to-date inventory of public-facing services.

- **Cybersecurity Education and Learning**  
  A practical tool for learning real-world offensive security concepts.

---

## 👥 Target Users

- Security Engineers  
- Penetration Testers  
- SOC Teams  
- DevOps Engineers  
- Cybersecurity Students  

---

## 📁 Project Structure

```text
assign_secureblink/
│
├── docker/                         # Docker configuration
│   ├── Dockerfile                 # Container definition
│   └── docker-compose.yml         # Service orchestration
│
├── server/                         # Express.js API
│   ├── src/
│   │   ├── app.js                 # Express app configuration
│   │   ├── server.js              # Server entry point
│   │   ├── routes/
│   │   │   └── recon.routes.js    # API routes
│   │   ├── controllers/
│   │   │   └── recon.controller.js# API logic
│   │   ├── services/
│   │   │   └── python.service.js  # Python execution service
│   │   ├── middlewares/
│   │   │   ├── validate.middleware.js
│   │   │   └── error.middleware.js
│   │   └── utils/
│   │       └── logger.js
│   ├── package.json
│   │
│
├── python/                         # Reconnaissance Core (Python)
│   ├── main.py                    # Orchestrates recon workflow
│   ├── amass_runner.py            # Runs OWASP Amass
│   ├── subdomain_parser.py        # Parses Amass output
│   ├── validator.py               # Active subdomain validation
│   ├── resolver.py                # DNS resolution
│   ├── whois_service.py           # WHOIS lookup
│   ├── shodan_service.py          # Shodan enrichment (optional)
│   ├── report_generator.py        # JSON / CSV report generator
│   ├── config.py                  # Configuration
│   ├── exceptions.py              # Custom exceptions
│   └── requirements.txt
│
├── output/                         # Generated reports
│   ├── json/                      # JSON outputs
│   └── csv/                       # CSV outputs
│
├── client/                         # Frontend (React + Tailwind)
│   ├── src/
│   │   ├── app/                   # App entry
│   │   ├── components/            # UI components
│   │   ├── pages/                 # Pages
│   │   ├── services/              # API services
│   │   └── styles/                # Styling
│   └── package.json
│
├── postman/                        # API testing
│   └── Amass-Recon.postman_collection.json
│
├── docs/                           # Documentation
│   ├── Architecture.md
│   ├── API_Documentation.md
│   └── Sample_Report.md
│
├── README.md
└── LICENSE
```

## 🛠️ Tech Stack

- Backend API: Express.js (Node.js)
- Recon Engine: Python
- Recon Tool: OWASP Amass
- Frontend: React + Tailwind CSS
- Containerization: Docker & Docker Compose
- API Testing: Postman


## 📘 Postman Collection

The Secure Blink API is documented using Postman, allowing interactive exploration and testing of all available endpoints.

👉 **Postman API Documentation**  
https://documenter.getpostman.com/view/37932689/2sB3dTs7TA

The Postman collection includes:
- Endpoint descriptions
- Sample requests
- Example responses
- Error handling details

---

## 📌 Available Endpoints Overview

| Method | Endpoint     | Description                                  |
|--------|-------------|----------------------------------------------|
| GET    | `/health`    | Check API health status                      |
| POST   | `/enumerate` | Perform passive reconnaissance on a domain  |

---
### 📥 Sample Request
**POST /enumerate**
```bash
{
  "domain": "example.com"
}
```

**📤 Sample Response**
```bash
{
  "success": true,
  "data": {
    "domain": "example.com",
    "summary": {
      "total_subdomains_discovered": 42,
      "active_subdomains_count": 18
    },
    "active_subdomains": [
      {
        "subdomain": "www.example.com",
        "status_code": 200
      }
    ],
    "resolved_ips": {
      "www.example.com": ["93.184.216.34"]
    },
    "whois_information": {
      "registrar": "IANA",
      "creation_date": "1995-08-13",
      "expiration_date": "2025-08-13"
    }
  }
}
```

## 🧪 Testing the API

The Secure Blink API can be tested using multiple methods, depending on your workflow and preference.

### Available Testing Options

- **Postman** (recommended for interactive testing)
- **cURL** (command-line testing)

---

### 🔹 Example: Testing with cURL

Use the following command to trigger domain reconnaissance via the API:

```bash
curl -X POST http://localhost:3000/enumerate \
  -H "Content-Type: application/json" \
  -d '{"domain":"example.com"}'

```

### 📬 API Testing with Postman

This project includes a Postman collection for easy API testing.

#### Files
- `postman/Amass-Recon.postman_collection.json` – API requests
- `postman/local.postman_environment.json` – Environment variables

#### How to Use
1. Open Postman
2. Click **Import**
3. Import the collection and environment files
4. Select the environment
5. Run API requests directly

## 🚀 How to Run the Application
This application is fully containerized using Docker, so users do not need to install Node.js, Python, or Amass manually.
### ✅ Prerequisites

Before running the application, ensure the following requirements are met:

- **Docker Desktop** installed  
  👉 https://www.docker.com/products/docker-desktop/

- **WSL 2 enabled** (required for Windows users)

- **Active internet connection**  
  Required for pulling Docker images and dependencies

---


### ▶️ Step-by-Step: Run Using Docker

#### 🔹 Step 1: Clone the Repository

```bash
git clone https://github.com/Harshal-Bhangale/assign_secureblink
cd assign_secureblink
```

#### 🔹 Step 2: (Optional) Set Shodan API Key
```bash
export SHODAN_API_KEY=your_api_key_here
```

#### 🔹 Step 3: Build the Docker Image
```bash
cd docker
docker compose build
```
##### 📌 This builds the image with:
- Express.js API
- Python Recon Engine
- OWASP Amass

#### 🔹 Step 4: Run the Container
```bash
docker compose up
```
Expected output:
```bash
🚀 Server running on port 3000
```

#### 🧪 Step 5: Verify the Application
✅ Health Check

Open browser or Postman:
```bash
GET http://localhost:3000/health
```
Response:
```bash
{
  "status": "API is running"
}
```
✅ Run Recon (API Call)

Using Postman or Curl:
```bash
POST http://localhost:3000/enumerate
Content-Type: application/json

{
  "domain": "example.com"
}
```
#### 📂 Output Files Location
Results are saved automatically to:
```bash
assign_secureblink/output/json/example.com.json
assign_secureblink/output/csv/example.com.csv
```

#### ⏹️ Stop the Application
```bash
docker compose down
```


## 📊 Output & Reporting
- **Discovered Subdomains**  
  Provides a complete list of all publicly visible subdomains identified during reconnaissance.

- **Active & Inactive Services**  
  Clearly differentiates live services from inactive or unreachable assets.

- **IP Address & HTTP Status Mapping**  
  Displays resolved IP addresses and HTTP response codes for better service understanding.

- **Risk-Based Asset Classification**  
  Categorizes assets into risk levels to help prioritize security actions.

- **Infrastructure Exposure Insights**  
  Reveals how and where assets are exposed across hosting environments.

- **Security Recommendations**  
  Offers actionable guidance to reduce attack surface and mitigate risks.

Reports can be exported in **JSON** or **CSV** formats for further analysis or integration with other security tools.

---

## 🚧 Future Enhancements

- **Continuous Asset Monitoring**  
  Enable scheduled scans to track changes in the attack surface over time.

- **Asset Change Detection**  
  Compare scan results to detect newly exposed or removed assets.

- **Authentication & Access Control**  
  Secure API access with authentication and role-based permissions.

- **External Intelligence Enrichment**  
  Integrate third-party sources such as Shodan and CVE databases for deeper insights.

- **Docker & Cloud Deployment**  
  Simplify deployment using containerization and cloud-native setups.

---


## 🏁 Conclusion

- **Complete Attack Surface Visibility**  
  ReconScope helps users understand what is publicly exposed about their domain.

- **Proactive Security Decisions**  
  Enables early identification of risks before attackers can exploit them.

- **Built for Real-World Security Workflows**  
  Designed for professionals, learners, and organizations focused on improving security posture.
