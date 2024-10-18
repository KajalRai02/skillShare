// RegisterPage.js
import { useForm } from "react-hook-form";
import PageLayout from "../../components/PageLayout";
import LoginForm from "./components/LoginForm";
import axios from "axios";

function LoginPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    try{
      const response= await axios.post("http://localhost:8080/api/auth/login",{
        userName:data.Username,
        password:data.Password
      })
      console.log("Login Sucessful", response.data)
      reset();

    }
    catch(error){
      console.log(error)

    }
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
