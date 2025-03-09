import Joi from "joi";

const signUpSchema = Joi.object({
    name: Joi.string().required().messages({
        "string.empty": "Name is required",
        "any.required": "Name is required",
    }),
    email: Joi.string().email().trim().lowercase().required().messages({
        "string.empty": "Email is required",
        "string.email": "Email must be a valid email address",
        "any.required": "Email is required",
    }),
    password: Joi.string().min(6).required().messages({
        "string.empty": "Password is required",
        "string.min": "Password must be at least 6 characters long",
        "any.required": "Password is required",
    }),
});

const signInSchema = Joi.object({
    email: Joi.string().email().trim().lowercase().required().messages({
        "string.empty": "Email is required",
        "string.email": "Email must be a valid email address",
        "any.required": "Email is required",
    }),
    password: Joi.string().required().messages({
        "string.empty": "Password is required",
        "any.required": "Password is required",
    }),
});

export { signInSchema, signUpSchema };