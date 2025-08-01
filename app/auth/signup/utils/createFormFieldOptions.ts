/**
 * this is a utility function that creates a form field options object specifically for react-form-hook
 */

import { checkIsValidNewUserEmail } from "app/api/_services/user/checkIsValidNewUserEmail";
import { RegisterOptions, UseFormGetValues } from "react-hook-form";
import { ClientUserRegistration } from "domain/user/models";

const emailOptions: RegisterOptions<ClientUserRegistration> = {
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Invalid email address",
  },
  validate: async (value) => {
    try {
      const isValid = await checkIsValidNewUserEmail(value);
      return isValid ? true : "Email already exists";
    } catch (error) {
      return "Invalid email address";
    }
  },
};

export const createFormFieldOptions = (
  name: string,
  getValues: UseFormGetValues<ClientUserRegistration>
): RegisterOptions<ClientUserRegistration> => {
  const options: RegisterOptions<ClientUserRegistration> = {
    required: { value: true, message: "This field is required" },
  };
  if (name === "email") {
    return {
      ...options,
      ...emailOptions,
    } as RegisterOptions<ClientUserRegistration>;
  }
  if (name === "confirmPassword") {
    return {
      ...options,
      validate: (value) => {
        const password = getValues("password");
        return value === password ? true : "Passwords do not match";
      },
    } as RegisterOptions<ClientUserRegistration>;
  }
  return options;
};
