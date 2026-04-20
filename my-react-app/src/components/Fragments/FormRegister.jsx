import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input/index";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        placeholder="insert your name here"
        name="fullname"
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="******"
        name="password"
      />
      <InputForm
        label="Confirm password"
        type="password"
        placeholder="******"
        name="confirmPassword"
      />

      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
