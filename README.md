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


# 📘 Postman Collection

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

## 🔍 Endpoint Details

### GET `/health`

Checks whether the API service is running and accessible.

**Response Example**
```json
{
  "status": "ok",
  "message": "API is running"
}

## 🔍 POST `/enumerate`

Performs **passive reconnaissance** on the provided domain and returns the results in a structured JSON format.

This endpoint triggers the reconnaissance engine to discover subdomains and identify active assets without performing intrusive scanning.

---

### 📥 Request

**Endpoint**
{
  "domain": "example.com"
}



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
