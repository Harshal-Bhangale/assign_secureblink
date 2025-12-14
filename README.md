# 🌐 ReconScope  
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

## 🛠️ Installation and Setup

ReconScope requires **Node.js** (for the Express.js API) and **Python 3** (for reconnaissance logic).

---

### Step 1: Install Dependencies

ReconScope relies on **OWASP Amass** for passive subdomain enumeration.

```bash
# Using Homebrew (macOS / Linux)
brew install amass

## 🛠️ Installation & Setup

### Step 2: Clone the Repository

```bash
git clone https://github.com/Harshal-Bhangale/assign_secureblink
cd reconscope

## 🛠️ Installation & Setup

### Step 3: Setup Python Environment

Install the required Python dependencies:

```bash
pip install -r requirements.txt

### Step 4: Start the Express.js API

Install the Node.js dependencies and start the API server:

```bash
npm install
npm start

The API will be available at:
http://localhost:3000


## 🔌 API Usage

ReconScope exposes its core functionality through a REST API.

### Endpoint


### Request Body (JSON)
POST /api/recon
```json
{
  "domain": "example.com"
}


{
  "domain": "example.com",
  "scan_summary": {
    "total_subdomains_discovered": 48,
    "active_subdomains": 16,
    "inactive_subdomains": 32,
    "scan_type": "Passive Reconnaissance"
  },
  "active_assets": [
    {
      "subdomain": "dev.example.com",
      "ip_address": "34.102.45.41",
      "http_status": 200,
      "risk_level": "Critical"
    }
  ]
}

## 📊 Output & Reporting

ReconScope generates detailed reconnaissance reports containing:

- Discovered subdomains  
- Active and inactive services  
- IP addresses and HTTP status codes  
- Risk-based asset classification  
- Infrastructure exposure insights  
- Security recommendations  

Reports can be exported in **JSON** or **CSV** formats for further analysis or integration with other security tools.

---

## 🚧 Future Enhancements

Planned improvements include:

- Continuous asset monitoring  
- Asset change detection (scan diffing over time)  
- Authentication and access control  
- External intelligence enrichment (Shodan, CVE mapping)  
- Docker and cloud deployment options  

---

## 📜 License

This project is licensed under the **MIT License**.  
See the `LICENSE` file for more details.

---

## ⚠️ Legal Disclaimer

This tool must only be used on domains you own or have **explicit authorization** to test.  
Unauthorized reconnaissance may be illegal. The developers are **not responsible for misuse or damage** caused by this tool.

---

## 🏁 Conclusion

ReconScope empowers users with complete visibility into a domain’s public attack surface, enabling proactive security decisions and helping secure exposed assets before attackers exploit them.

