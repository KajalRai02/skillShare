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

      const token = response.headers['authorization'] || response.headers['Authorization'];

      if (token) {
        // Optionally store the token in localStorage or sessionStorage for future requests
        localStorage.setItem('accessToken', token);

        console.log("Login Successful, token stored");
      } else {
        console.error("No token found in headers");
      }

    }
    catch(error){
      console.log(error)

    }
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
