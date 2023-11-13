import FormWrapper from "../common/FormWrapper";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {
  onSignUpClick: () => void;
  className?: string;
}

interface IFormInput {
  email: string;
}

const LoginForm = ({ onSignUpClick, className }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) =>
    console.log(data);

  return (
    <FormWrapper
      className={className}
      handleSubmit={handleSubmit(onSubmit)}
      onOptionClick={onSignUpClick}
      submitText="ورود"
      title="ورود به حساب"
      description="برای ورود اطلاعات خود را در فیلد های زیر وارد کنید"
      canLoginWithGoogle
    >
      <div>
        <input
          defaultValue=""
          type="email"
          placeholder="Example@email.com"
          {...register("email", { required: true })}
        />
        {errors.email && <span>This field is required</span>}
      </div>
    </FormWrapper>
  );
};

export default LoginForm;
