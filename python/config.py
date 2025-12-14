import os

AMASS_BINARY = "amass"

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_DIR = os.path.join(BASE_DIR, "..", "output", "json")

# ⏱️ FAST TIMEOUTS
HTTP_TIMEOUT = 1

DEFAULT_HEADERS = {
    "User-Agent": "Fast-Recon/1.0"
}

SHODAN_API_KEY = os.getenv("SHODAN_API_KEY")


def validate_config():
    if not SHODAN_API_KEY:
        print("[!] SHODAN_API_KEY not set. Skipping Shodan.", file=sys.stderr)
