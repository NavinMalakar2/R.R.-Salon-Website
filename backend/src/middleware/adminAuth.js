import jwt from "jsonwebtoken";

export const adminAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    console.log(token)
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log( "email konshi aarhi he "+decoded.email)

    // Check admin by email OR role
    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.status(403).json({ message: "Access denied: Not an Admin" });
    }

    req.admin = decoded;
    console.log("req.admin"+req.admin.email)
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
