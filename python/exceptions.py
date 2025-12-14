class ReconError(Exception):
    """Base exception for reconnaissance errors"""
    pass


class AmassExecutionError(ReconError):
    """Raised when Amass fails to execute properly"""
    pass


class InvalidDomainError(ReconError):
    """Raised when an invalid domain is provided"""
    pass


class ValidationError(ReconError):
    """Raised during subdomain validation failures"""
    pass
