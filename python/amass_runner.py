import subprocess
import time
from typing import List

from config import AMASS_BINARY
from exceptions import AmassExecutionError


def run_amass(domain: str) -> List[str]:
    """
    FAST Amass passive enumeration (hard-limited).
    Runtime target: 20–40 seconds
    """

    start = time.time()

    command = [
        AMASS_BINARY,
        "enum",
        "-passive",
        "-d", domain,

        # 🚀 SPEED FLAGS
        "-timeout", "2",               # minutes
        "-max-dns-queries", "1000",
        "-norecursive",
        "-noalts",
        "-nolocaldb"
    ]

    try:
        process = subprocess.run(
            command,
            capture_output=True,
            text=True,
            timeout=180,   # ⏱️ hard kill at 3 minutes
            check=True
        )

        duration = time.time() - start
        print(f"[TIME] Amass: {duration:.2f}s", file=sys.stderr)

        return process.stdout.splitlines()

    except subprocess.TimeoutExpired:
        raise AmassExecutionError("Amass timed out (fast mode)")

    except subprocess.CalledProcessError as error:
        raise AmassExecutionError(
            f"Amass execution failed: {error.stderr}"
        ) from error
