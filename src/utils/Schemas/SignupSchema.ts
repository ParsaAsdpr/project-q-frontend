import { z } from "zod";

export const schema = z
.object({
  signup_name: z.string().min(2, { message: "نام شما حداقل باید ۲ کاراکتر باشد" }),
  signup_username: z
    .string()
    .min(3, { message: "نام کاربری شما حداقل باید ۳ کاراکتر باشد" })
    .refine(
      (value) => /^[a-zA-Z0-9_.]+$/.test(value),
      "نام کاربری معتبر نیست"
    ),
    signup_email: z
    .string()
    .min(7, { message: "ایمیل حداقل باید ۷ کاراکتر باشد" })
    .email({ message: "ایمیل نامعتبر است" }),
    signup_password: z
    .string()
    .min(8, { message: "رمز عبور حداقل باید ۸ کاراکتر باشد" }),
    signup_confirmPassword: z
    .string()
    .min(8, { message: "رمز عبور حداقل باید ۸ کاراکتر باشد" }),
})
.refine((data) => data.signup_password === data.signup_confirmPassword, {
  message: "رمز عبور باید یکی باشد",
  path: ["signup_confirmPassword"],
});