import axios from "axios";
import React, { useState } from "react";
import { Heading, Input, Button } from "../../components";

export const Auth = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password1: "",
    password2: "",
  });

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

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post(
      process.env.REACT_APP_DOMAIN! + "/registrate/",
      formData
    );
  };

  return (
    <div className="m-8 flex items-center justify-center flex-col">
      <Heading label="Register now" />
      <form className="space-y-6 w-full mt-12 md:mt-8" onSubmit={submitForm}>
        <Input
          type="email"
          label="Email"
          value={formData.email}
          onChange={(e) => setField("email", e.target.value)}
          error="Хейтеры, SORRY, я рождён чтобы нездаваться"
        />
        <Input
          label="Username"
          value={formData.username}
          onChange={(e) => setField("username", e.target.value)}
        />
        <Input
          type="password"
          label="Password"
          value={formData.password1}
          onChange={(e) => setField("password1", e.target.value)}
        />
        <Input
          type="password"
          label="Type your password again"
          value={formData.password2}
          onChange={(e) => setField("password2", e.target.value)}
        />
        <div className="flex justify-between w-full">
          <Button label="Reset" onClick={resetForm} type="reset" />
          <Button label="Submit" type="submit" isPrimary={true} />
        </div>
      </form>
    </div>
  );
};
