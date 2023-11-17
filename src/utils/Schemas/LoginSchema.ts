import { z } from "zod";

export const schema = z.object({
    login_email: z
      .string()
      .min(7, { message: "ایمیل حداقل باید ۸ کاراکتر باشد" })
      .email({ message: "ایمیل نامعتبر است" }),
    login_password: z.string().min(8, { message: "رمز عبور حداقل باید ۸ کاراکتر باشد" }),
  });