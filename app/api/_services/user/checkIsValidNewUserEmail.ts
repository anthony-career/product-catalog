"use server";

import { validateNewUserEmail } from "domain/user/validation";

export const checkIsValidNewUserEmail = async (email: string) => {
  try {
    const isValid = await validateNewUserEmail(email);
    return isValid;
  } catch (error) {
    return false; // this will prevent new users incase this call fails
  }
};
