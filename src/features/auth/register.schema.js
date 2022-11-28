import { string, object, ref, number, array } from "yup";

export const registarSchema = object().shape({
    companyName: string()
        .max(100, "This field must be at most 10 characters long.")
        .required("please provide a company name"),

    companyAddress: string()
        .max(100, "This field must be at most 10 characters long.")
        .required("please provide a company address"),

    contactName: string()
        .max(100, "This field must be at most 10 characters long.")
        .required("contact name required"),

    contactNumber: number()
        .min(11, "This field must be minimum 11 characters long.")
        .required("contact number required"),

    email: string()
        .max(100, "This field must be at most 20 characters long.")
        .required("please provide a business email"),

    smsSenderName: string()
        .max(11, "This field must be at most 11 characters long.")
        .required("please provide SMS sender's Name"),

    userName: string()
        .max(100, "This field must be at most 20 characters long.")
        .required("username is required"),

    password: string()
        .min(8, "This field must be at least 8 characters long.")
        .max(50, "This field must be at most 50 characters long.")
        .required("This  field must not be empty."),

    confirmPassword: string()
        .oneOf([ref("password"), null], "Password must match.")
        .required("password must match"),

    nic: string()
        .max(15, "This field must be at most 20 characters long.")
        .min("This field must be minimum 10 characters long")
        .required("please provide NID number"),

    brc: string()
        .required("please provide a working file"),

    checked: array()
        .required("read before agreeing"),
});