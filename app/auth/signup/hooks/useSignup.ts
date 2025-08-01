import { useState } from "react";
import { ClientUserRegistration } from "domain/user/models";
import { createNewUser } from "app/api/_services/user/createNewUser";
import { UserEntity } from "domain/user/entity";

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<UserEntity | null>(null);

  const signup = async (data: ClientUserRegistration) => {
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const user = await createNewUser(data);
      setData(user);
      setIsSuccess(true);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    signup,
    isSuccess,
    isError,
  };
};
