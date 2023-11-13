import FormWrapper from "@/Components/common/FormWrapper";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {
  className?: string;
  onLoginClick: () => void;
}

interface IFormInput {
  email: string;
}

const SignUpForm = ({ className, onLoginClick }: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => console.log(data)

  return (
    <FormWrapper
      className={className}
      handleSubmit={handleSubmit(onSubmit)}
      onOptionClick={onLoginClick}
      submitText="ثبت نام"
      title="ثبت نام"
      description="برای ثبت نام اطلاعات خود را در فیلد های زیر وارد کنید"
    >
      <div>
        <input defaultValue="" type="email" placeholder="Example@email.com" {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
      </div>
    </FormWrapper>
  );
};

export default SignUpForm;
