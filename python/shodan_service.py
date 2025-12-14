import os
import shodan
import sys


SHODAN_API_KEY = os.getenv("SHODAN_API_KEY")

def enrich_ips(ip_map: dict) -> dict:
    """
    Fetch Shodan data for resolved IPs
    """
    if not SHODAN_API_KEY:
        return {}

    api = shodan.Shodan(SHODAN_API_KEY)
    shodan_data = {}

    for subdomain, ips in ip_map.items():
        for ip in ips:
            try:
                host = api.host(ip)
                shodan_data[ip] = {
                    "open_ports": host.get("ports", []),
                    "organization": host.get("org"),
                    "os": host.get("os")
                }
            except:
                continue

    return shodan_data
