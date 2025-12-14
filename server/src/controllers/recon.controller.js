const { runPythonRecon } = require("../services/python.service");

const enumerateDomain = async (req, res, next) => {
    try {
        const { domain } = req.body;

        if (!domain || typeof domain !== "string" || !domain.includes(".")) {
            return res.status(400).json({
                error: "Invalid domain provided"
            });
        }

        console.log(`[+] Recon request received for: ${domain}`);

        const result = await runPythonRecon(domain);

        return res.status(200).json({
            success: true,
            data: result
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    enumerateDomain
};
