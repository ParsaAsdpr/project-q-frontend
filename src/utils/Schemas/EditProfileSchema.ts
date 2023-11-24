import { z } from "zod";

const profileSchema = z.object({
  name: z.string().min(3, { message: "نام شما حداقل باید ۳ کاراکتر باشد" }),
  job: z.string().min(3, { message: "شغل شما حداقل باید ۳ کاراکتر باشد" }).nullable(),
  bio: z
    .string()
    .min(20, { message: "بیوگرافی شما حداقل باید ۲۰ کاراکتر باشد" }).nullable(),
  website: z
    .string()
    .min(9, { message: "وب سایت شما حداقل باید ۹ کاراکتر باشد" })
    .refine((value) => /^https?:\/\/\w+(\.\w+)+.*$/.test(value), {
      message: "وب سایت باید یک لینک معتبر باشد",
    }).nullable(),
});

export const schema = z.object({
  username: z
    .string()
    .min(3, { message: "نام کاربری شما حداقل باید ۳ کاراکتر باشد" })
    .refine((value) => /^[a-zA-Z0-9_.]+$/.test(value), "نام کاربری معتبر نیست").nullable(),
  profile: profileSchema,
});
