import { SubmitHandler, useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Header from "../ui/Header";

interface IFormInput {
  name: string;
  email: string;
  phone: string;
}

const PersonalInfo = () => {
  const title = "Personal info";
  const subtitle = "Please provide your name, email address, and phone number.";
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    navigate("/form/plans");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container">
      <Header title={title} subtitle={subtitle} />
      <div className="mt-10 flex gap-6 flex-col">
        <div className="flex flex-col gap-1 text-sm">
          <div className="flex justify-between items-center">
            <label className="text-gray-800">Name</label>
            {errors.name && (
              <span className="text-red-500 text-sm font-medium">
                {errors.name.message}
              </span>
            )}
          </div>
          <input
            type="text"
            placeholder="e.g. Stephen King"
            className={`w-full rounded-md border border-gray-200 hover:border-blue-900 ${
              errors.name ? "outline-red-400" : ""
            } placeholder:text-gray-400 px-8 py-4`}
            {...register("name", {
              required: "This field is required",
            })}
          />
        </div>

        <div className="flex flex-col gap-1 text-sm">
          <div className="flex justify-between items-center">
            <label className="text-gray-800">Email Address</label>
            {errors.email && (
              <span className="text-red-500 text-sm font-medium">
                {errors.email.message}
              </span>
            )}
          </div>
          <input
            type="text"
            placeholder="e.g. stephenking@lorem.com"
            className={`w-full rounded-md border border-gray-200 hover:border-blue-900 ${
              errors.email ? "outline-red-400" : ""
            } placeholder:text-gray-400 px-8 py-4`}
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
        </div>

        <div className="flex flex-col gap-1 text-sm">
          <div className="flex justify-between items-center">
            <label className="text-gray-800">Phone Number</label>
            {errors.phone && (
              <span className="text-red-500 text-sm font-medium">
                {errors.phone.message}
              </span>
            )}
          </div>
          <input
            type="text"
            placeholder="e.g. +1 234 567 890"
            className={`w-full rounded-md border border-gray-200 hover:border-blue-900 ${
              errors.phone ? "outline-red-400" : ""
            } placeholder:text-gray-400 px-8 py-4`}
            {...register("phone", {
              required: "This field is required",
              minLength: {
                value: 11,
                message: "Invalid phone number",
              },
              maxLength: {
                value: 11,
                message: "Invalid phone number",
              },
            })}
          />
        </div>
      </div>

      <div className="flex mt-20 justify-end">
        <Button>Next Step</Button>
      </div>
    </form>
  );
};

export default PersonalInfo;
