import FormWrapper from "@/Components/common/FormWrapper";
import InputWrapper from "@/Components/common/InputWrapper";
import Layout from "@/Layout";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { schema } from "@/utils/Schemas/EditProfileSchema";
import { ProfileTypes, UserTypes } from "@/types/UserTypes";
import userApi from "@/utils/Services/user.api";
import authApi from "@/utils/Services/auth.api";
import { toast } from "react-toastify";

interface IFormInput {
  username: string;
  profile: ProfileTypes;
}

const EditProfile = () => {
  // const token = localStorage.getItem("token");
  const editProfile = async (data: IFormInput) => {
    try {
      await userApi.editUser(data, user._id);
      window.location.href = "/profile";
    } catch (e) {
      toast("خطایی رخ داده است", {
        type: "error",
      });
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: zodResolver(schema) });
  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) =>
    editProfile(data);

  const decodedToken = authApi.getCurrentUser();
  const user: UserTypes = decodedToken as UserTypes;

  const inputClass =
    "w-full max-h-[140px] outline-none border border-[#dddddd] bg-[#f6f6f6] py-3 px-3 rounded-[3px] text-sm focus:border-[#47aa76] duration-300";

  return (
    <Layout title="ویرایش پروفایل" className="max-w-xl">
      <FormWrapper
        handleSubmit={handleSubmit(onSubmit)}
        submitText="ویرایش "
        title="ویرایش پروفایل"
        description=" "
      >
        <InputWrapper error={errors.username} id="username" text="نام کاربری">
          <input
            id="username"
            type="text"
            className={inputClass}
            placeholder={"Username"}
            dir="ltr"
            {...register("username", { value: user.username })}
          />
        </InputWrapper>
        <InputWrapper error={errors.profile?.name} id="name" text="نام">
          <input
            id="name"
            type="text"
            className={inputClass}
            placeholder={"نام"}
            dir="rtl"
            {...register("profile.name", { value: user.profile?.name })}
          />
        </InputWrapper>
        <InputWrapper error={errors.profile?.job} id="job" text="شغل / تخصص">
          <input
            id="job"
            type="text"
            className={inputClass}
            placeholder={"مقال: مهندس کامپیوتر"}
            dir="rtl"
            {...register("profile.job", { value: user.profile?.job })}
          />
        </InputWrapper>
        <InputWrapper error={errors.profile?.bio} id="bio" text="درباره من">
          <textarea
            id="bio"
            className={inputClass}
            placeholder="درباره خود بنویسید"
            dir="rtl"
            {...register("profile.bio", { value: user.profile?.bio })}
          ></textarea>
        </InputWrapper>
        <InputWrapper
          error={errors.profile?.website}
          id="website"
          text="وبسایت"
        >
          <input
            id="website"
            type="text"
            className={inputClass}
            placeholder={"https://example.com"}
            dir="rtl"
            {...register("profile.website", { value: user.profile?.website })}
          />
        </InputWrapper>
      </FormWrapper>
    </Layout>
  );
};

export default EditProfile;
