import { UserRepository } from "lib/repositories/user";

export const validateNewUserEmail = async (email: string) => {
  const userCount = await UserRepository.$native.count({
    where: {
      email: {
        equals: email,
      },
    },
  });
  return userCount === 0;
};
