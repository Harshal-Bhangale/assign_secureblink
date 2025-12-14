const validateDomain = (req, res, next) => {
    const { domain } = req.body;

    if (!domain || typeof domain !== "string" || !domain.includes(".")) {
        return res.status(400).json({
            success: false,
            error: "Invalid domain provided"
        });
    }

    next();
};

module.exports = validateDomain;
    