import json
import os
import csv
from typing import List, Dict
import sys

from config import OUTPUT_DIR


def generate_json_report(
    domain: str,
    all_subdomains: List[str],
    active_subdomains: List[Dict],
    resolved_ips: Dict[str, List[str]],
    whois_info: Dict,
    shodan_enrichment: Dict
) -> Dict:
    """
    Generates and saves a structured JSON reconnaissance report.
    """

    os.makedirs(OUTPUT_DIR, exist_ok=True)

    report = {
        "domain": domain,
        "summary": {
            "total_subdomains_discovered": len(all_subdomains),
            "active_subdomains_count": len(active_subdomains)
        },
        "active_subdomains": active_subdomains,
        "resolved_ips": resolved_ips,
        "whois_information": whois_info,
        "shodan_enrichment": shodan_enrichment
    }

    file_path = os.path.join(OUTPUT_DIR, f"{domain}.json")

    with open(file_path, "w", encoding="utf-8") as file:
        json.dump(report, file, indent=4)

    return report


def generate_csv_report(domain: str, active_subdomains: List[Dict]) -> None:
    """
    Generates CSV report for active subdomains.
    """

    csv_dir = os.path.join(os.path.dirname(OUTPUT_DIR), "csv")
    os.makedirs(csv_dir, exist_ok=True)

    csv_path = os.path.join(csv_dir, f"{domain}.csv")

    with open(csv_path, "w", newline="", encoding="utf-8") as file:
        writer = csv.DictWriter(
            file,
            fieldnames=["subdomain", "status_code"]
        )
        writer.writeheader()
        writer.writerows(active_subdomains)


def generate_csv_report(domain: str, active_subdomains: List[Dict]) -> None:
    csv_dir = os.path.join(os.path.dirname(OUTPUT_DIR), "csv")
    os.makedirs(csv_dir, exist_ok=True)

    csv_path = os.path.join(csv_dir, f"{domain}.csv")

    with open(csv_path, "w", newline="", encoding="utf-8") as file:
        writer = csv.DictWriter(
            file,
            fieldnames=["subdomain", "status_code"]
        )
        writer.writeheader()
        writer.writerows(active_subdomains)
