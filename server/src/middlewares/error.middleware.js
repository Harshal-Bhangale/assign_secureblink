/**
 * Centralized error handling middleware
 */
const errorHandler = (err, req, res, next) => {
    console.error("[ERROR]", err);

    // Default error response
    const statusCode = err.statusCode || 500;
    const message =
        typeof err === "string"
            ? err
            : err.message || "Internal Server Error";

    res.status(statusCode).json({
        success: false,
        error: message
    });
};

module.exports = errorHandler;
