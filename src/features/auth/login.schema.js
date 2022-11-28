import { string, object, ref } from "yup";

export const loginSchema = object().shape({
    username: string()
        .required("must provide a username")
        .min(2, "This field minimum 2 character long."),
    password: string()
        .required("must provide a password")
        .min(2, "This field minimum 2 character long.")
        .max(25,"This field minimum 25 character long."),
});