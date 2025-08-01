"use server";

import { UserRepository } from "lib/repositories/user";
import { transformClientUserToServerUser } from "../../utils/transformClientUserToServerUser";
import { ClientUserRegistration } from "domain/user/models";
import { UserEntity } from "domain/user/entity";

export const createNewUser = async (
  data: ClientUserRegistration
): Promise<UserEntity> => {
  const user = await transformClientUserToServerUser(data);
  return await UserRepository.create(user);
};
