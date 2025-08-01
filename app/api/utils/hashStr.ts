import bcrypt from "bcrypt";

const encrypt = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

const isSamePassword = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};

export const Hash = {
  encrypt,
  isSamePassword,
};
