from typing import List, Dict
import requests
import sys


from config import HTTP_TIMEOUT, DEFAULT_HEADERS


def check_active_subdomains(subdomains: List[str]) -> List[Dict]:
    """
    FAST HTTP validation (HEAD first, fallback GET)
    """

    active_subdomains = []

    for subdomain in subdomains:
        try:
            response = requests.head(
                f"http://{subdomain}",
                timeout=HTTP_TIMEOUT,
                headers=DEFAULT_HEADERS,
                allow_redirects=True
            )

            active_subdomains.append({
                "subdomain": subdomain,
                "status_code": response.status_code
            })

        except requests.RequestException:
            continue

    return active_subdomains
