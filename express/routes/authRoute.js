import express from "express";
import { body } from "express-validator";
import { login, register } from "../controllers/authController.js";
import { validateUser } from "../middelwares/validateUsers.js";

const router = express.Router();

router.post(
  "/register",
  [
    body("email", "Formato de email invlido").trim().isEmail().normalizeEmail(),
    body("password", "Mínimo 6 caracteres").trim().isLength({ min: 6 }),
  ],
  [
    body("password", "La contraseña debe tener un mínimo 6 caracteres").custom(
      (value, { req }) => {
        if (value !== req.body.repassword) {
          throw new Error("Las contraseñas no coinciden");
        }
        return value;
      }
    ),
  ],
  validateUser,
  register
);

router.get(
  "/login",
  [
    body("email", "Formato de email invlido").trim().isEmail().normalizeEmail(),
    body("password", "Mínimo 6 caracteres").trim().isLength({ min: 6 }),
  ],
  validateUser,
  login
);

export default router;
