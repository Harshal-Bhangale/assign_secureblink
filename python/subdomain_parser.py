from typing import List


def parse_subdomains(raw_output: List[str]) -> List[str]:
    """
    Cleans and filters raw Amass output.
    """
    subdomains = set()

    for line in raw_output:
        cleaned = line.strip()

        if cleaned and "." in cleaned:
            subdomains.add(cleaned.lower())

    return sorted(subdomains)
