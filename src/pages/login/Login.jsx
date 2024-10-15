// RegisterPage.js
import { useForm } from "react-hook-form";
import PageLayout from "../../components/PageLayout";
import LoginForm from "./components/LoginForm";

function LoginPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <PageLayout>
      <LoginForm
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
      />
    </PageLayout>
  );
}

export default LoginPage;
