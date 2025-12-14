from concurrent.futures import ThreadPoolExecutor, as_completed
import dns.resolver

def _resolve(subdomain):
    try:
        answers = dns.resolver.resolve(subdomain, "A")
        return subdomain, [str(ip) for ip in answers]
    except:
        return subdomain, []

def resolve_subdomains(subdomains):
    resolved = {}

    with ThreadPoolExecutor(max_workers=20) as executor:
        futures = [executor.submit(_resolve, s) for s in subdomains]

        for future in as_completed(futures):
            subdomain, ips = future.result()
            resolved[subdomain] = ips

    return resolved
