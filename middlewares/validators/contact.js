const { check,validationResult  } = require("express-validator");

exports.addingValidation = () => [
  check("name", " Fullname is required").not().isEmpty(),
  check("pseudo", "pseudo is required").not().isEmpty(),
  check("email", "enter a valid email").isEmail(),
  check("phone","enter a valid phone").not().isEmpty(),
    check("adress","enter a valid adresse").not().isEmpty(), 
];
exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};