import sys
import json

from amass_runner import run_amass
from subdomain_parser import parse_subdomains
from validator import check_active_subdomains
from resolver import resolve_subdomains
from whois_service import get_domain_whois
from report_generator import generate_json_report, generate_csv_report
from exceptions import InvalidDomainError, ReconError
from config import validate_config
from shodan_service import enrich_ips


def execute_recon(domain: str):
    if not domain or "." not in domain:
        raise InvalidDomainError("Invalid domain provided")

    print("[DEBUG] Step 1: validate domain", file=sys.stderr)
    validate_config()
    print("[DEBUG] Step 2: validate config", file=sys.stderr)

    print("[DEBUG] Step 3: run amass", file=sys.stderr)
    raw_output = run_amass(domain)

    subdomains = parse_subdomains(raw_output)
    active_subdomains = check_active_subdomains(subdomains)
    resolved_ips = resolve_subdomains(subdomains)
    whois_info = get_domain_whois(domain)
    shodan_enrichment = enrich_ips(resolved_ips)

    # 1️⃣ Generate JSON report
    report = generate_json_report(
        domain=domain,
        all_subdomains=subdomains,
        active_subdomains=active_subdomains,
        resolved_ips=resolved_ips,
        whois_info=whois_info,
        shodan_enrichment=shodan_enrichment
    )

    # 2️⃣ Generate CSV report (side-effect only)
    # generate_csv_report(domain, active_subdomains)

    print("[DEBUG] Recon completed", file=sys.stderr)
    return report


if __name__ == "__main__":
    try:
        if len(sys.argv) != 2:
            raise InvalidDomainError("Usage: python main.py <domain>")

        domain_input = sys.argv[1]
        result = execute_recon(domain_input)

        # ✅ ONLY JSON goes to stdout (Express-safe)
        print(json.dumps({
            "success": True,
            "data": result
        }))

    except ReconError as error:
        print(json.dumps({
            "success": False,
            "error": str(error)
        }))
        sys.exit(0)

    except Exception as error:
        print(json.dumps({
            "success": False,
            "error": str(error)
        }))
        sys.exit(0)
