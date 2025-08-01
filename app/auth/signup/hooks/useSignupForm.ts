"use client";
import { RegisterOptions, useForm } from "react-hook-form";
import { createFormFieldOptions } from "../utils/createFormFieldOptions";
import { getDefaultFormFieldProps } from "../utils/getDefaultFormFieldProps";
import { useCallback, useEffect } from "react";
import { ClientUserRegistration } from "domain/user/models";
import { useSignup } from "./useSignup";

export const useSignupForm = () => {
  const { signup, isLoading, isSuccess, isError } = useSignup();

  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    if (isError) {
      alert("Error creating user");
    }
  }, [isError]);

  const getFieldProps = useCallback(
    (
      name: keyof ClientUserRegistration,
      options?: RegisterOptions<ClientUserRegistration>
    ) => {
      const fieldOptions = createFormFieldOptions(name, getValues);
      const hookProps = register(name, fieldOptions);
      const fieldProps = getDefaultFormFieldProps(name);
      const mergedOptions = { ...hookProps, ...fieldProps } as any;
      mergedOptions.error = errors[name]?.message ?? "";
      return mergedOptions;
    },
    [register, errors, getValues]
  );

  const onSubmit = handleSubmit(async (data) => {
    await signup(data);
  });

  return {
    handleOnSubmit: onSubmit,
    getFieldProps,
    isLoading,
    isSuccess,
    isError,
  };
};
