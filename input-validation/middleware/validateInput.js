const validateInput = (req, res, next) => {
  const { name, email, password } = req.body;

  // Name validation
  if (!name || !/^[A-Za-z\s]+$/.test(name)) {
    return res.status(400).json({
      success: false,
      message: "Invalid name. Only letters and spaces allowed."
    });
  }

  // Email validation
  if (
    !email ||
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
  ) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format"
    });
  }

  // Password validation
  if (
    !password ||
    password.length < 8 ||
    !/[!@#$%^&*(),.?":{}|<>]/.test(password)
  ) {
    return res.status(400).json({
      success: false,
      message:
        "Password must be at least 8 characters and contain a special character"
    });
  }

  next();
};

module.exports = validateInput;