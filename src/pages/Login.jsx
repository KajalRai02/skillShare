import { Container, Typography, Box, TextField, Button, FormControl, FormHelperText } from "@mui/material";
import { useForm } from "react-hook-form";


function LoginPage() {

    const {
        register,
        handleSubmit,
        reset,
        formState:{errors, isSubmitting}
    } = useForm()

    const onSubmit=(data)=>{
        console.log(data)
        reset()

    }

  return (
    <Container maxWidth="sm">

        <Typography variant="h3" component="h2">
            Login
        </Typography>

        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
            display: "flex",
            flexDirection:"column",
            gap:4,
            mt:5
            }}
        >

        <FormControl >
            <TextField
            id="outlined-required"
            label="Username"
            defaultValue=""
            {...register("Username",{
                required:"Username is required", 
                maxLength:20})}  
            />
            <FormHelperText>{errors.Username?.message}</FormHelperText>
        </FormControl>

        <FormControl >

            <TextField
            type="Password"
            id="outlined-required"
            label="Password"
            defaultValue=""
            {...register("Password",{
                required:"Password is required", 
                minLength:{value:8, message:"Password must be atleast 6 character"},
                maxLength:{value:16, message:"Password cannot exceed 20 character"}})}  
            />
            <FormHelperText>{errors.Password?.message}</FormHelperText>
        </FormControl>        

        <Button 
            variant="contained" 
            type="submit"
            disabled={isSubmitting}
        >
            {isSubmitting ? "Submitting..." :"Submit"}
        </Button>

      </Box>
    </Container>
  );
}

export default LoginPage;
