import React from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-5 py-4">

          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="mb-2">
              <label htmlFor="js-email" className="form-label">Email
                address</label>
              <input type="email"
                     className="form-control"
                     id="js-email"
                     aria-describedby="emailHelp"
                     {...register("email")}
              />
              <div id="emailHelp" className="form-text">We'll never share your
                email
                with anyone else.
              </div>
            </div>

            <div className="mb-2">
              <label htmlFor="js-username"
                     className="form-label">Username</label>
              <input
                type="username"
                className="form-control"
                id="js-username"
                {...register("username")}
              />
              <div id="emailHelp" className="form-text">
                The user name must be longer than 4 characters
              </div>
            </div>

            <div className="mb-2">
              <label htmlFor="js-password"
                     className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="js-password"
                {...register("password")}
                autoComplete="on"
              />
              <div id="emailHelp" className="form-text">
                The password must contain more than 8 characters
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Create Account
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
