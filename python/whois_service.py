from typing import Dict
import whois


def get_domain_whois(domain: str) -> Dict:
    """
    Performs a WHOIS lookup for the given domain.
    """

    try:
        whois_data = whois.whois(domain)

        return {
            "domain": domain,
            "registrar": whois_data.registrar,
            "creation_date": _to_string(whois_data.creation_date),
            "expiration_date": _to_string(whois_data.expiration_date),
            "name_servers": whois_data.name_servers
        }

    except Exception:
        return {
            "domain": domain,
            "registrar": None,
            "creation_date": None,
            "expiration_date": None,
            "name_servers": []
        }


def _to_string(value):
    """
    Converts WHOIS date fields (which may be list/datetime) to string safely.
    """
    if isinstance(value, list) and value:
        return str(value[0])
    return str(value) if value else None
