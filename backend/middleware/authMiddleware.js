// authMiddleware.js
exports.isAuthenticated = (req, res, next) => {
    // Authentication logic here
    if (/* user is authenticated */) {
        next();
    } else {
        return res.status(401).json({ message: "Unauthorized" });
    }
};
