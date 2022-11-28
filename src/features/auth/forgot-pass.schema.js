import { object, array, string } from "yup";

export const forgotPasswordSchema = object().shape({
    username: string()
        .required("Required"),
});