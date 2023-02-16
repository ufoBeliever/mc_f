import axios from "axios";
import React, { useState } from "react";
import { Heading, Input, Button } from "../../components";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const navigate = useNavigate();
  interface IForm {
    email?: string;
    username?: string;
    password1?: string;
    password2?: string;
  }
  const [formData, setFormData] = useState<IForm>({
    email: "",
    username: "",
    password1: "",
    password2: "",
  });

  const [formErrors, setFormErrors] = useState<IForm>({});

  const setField = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const resetForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFormData({
      email: "",
      username: "",
      password1: "",
      password2: "",
    });
  };

  const authRequest = async () => {
    try {
      await axios
        .post(process.env.REACT_APP_DOMAIN! + "/registrate/", formData)
        .then((e) => navigate(`/user/${e.data.username}`));
    } catch (e: any) {
      setFormErrors(e.response.data);
    }
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await authRequest();
  };

  return (
    <div className="m-8 flex items-center justify-center flex-col">
      <Heading label="Register now" />
      <form className="space-y-6 w-full mt-12 md:mt-8" onSubmit={submitForm}>
        <Input
          type="text"
          label="Email"
          value={formData.email}
          onChange={(e) => setField("email", e.target.value)}
          error={formErrors.email?.[0]}
        />
        <Input
          label="Username"
          value={formData.username}
          onChange={(e) => setField("username", e.target.value)}
          error={formErrors.username?.[0]}
        />
        <Input
          type="password"
          label="Password"
          value={formData.password1}
          onChange={(e) => setField("password1", e.target.value)}
          error={formErrors.password1?.[0]}
        />
        <Input
          type="password"
          label="Type your password again"
          value={formData.password2}
          onChange={(e) => setField("password2", e.target.value)}
          error={formErrors.password2?.[0]}
        />
        <div className="flex justify-between w-full">
          <Button label="Reset" onClick={resetForm} type="reset" />
          <Button label="Submit" type="submit" isPrimary={true} />
        </div>
      </form>
    </div>
  );
};
