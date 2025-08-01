import { ServerUserRegistration } from "domain/user/models";
import { UserRepository } from ".";
import { UserEntity } from "domain/user/entity";
import { dbClient } from "lib/db/client";

export const create = async (
  data: ServerUserRegistration
): Promise<UserEntity> => {
  const user = await dbClient.user.create({
    data: {
      authMethod: "EMAIL_PASSWORD",
      ...data,
    },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
    },
  });
  return user;
};
