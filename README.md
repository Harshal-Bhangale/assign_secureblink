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

---


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

## 📜 License

- **MIT License**  
  This project is licensed under the MIT License, allowing free use, modification, and distribution.  
  See the `LICENSE` file for more details.

---

## ⚠️ Legal Disclaimer

- **Authorized Use Only**  
  This tool must only be used on domains you own or have explicit permission to test.

- **Ethical Responsibility**  
  Unauthorized reconnaissance may be illegal. The developers are not responsible for misuse or damage caused by this tool.

---

## 🏁 Conclusion

- **Complete Attack Surface Visibility**  
  ReconScope helps users understand what is publicly exposed about their domain.

- **Proactive Security Decisions**  
  Enables early identification of risks before attackers can exploit them.

- **Built for Real-World Security Workflows**  
  Designed for professionals, learners, and organizations focused on improving security posture.
