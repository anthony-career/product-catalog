import { Hash } from "app/api/utils/hashStr";
import {
  ClientUserRegistration,
  ServerUserRegistration,
} from "domain/user/models";

export const transformClientUserToServerUser = async (
  clientUser: ClientUserRegistration
): Promise<ServerUserRegistration> => {
  const { password, ...rest } = clientUser;
  const passwordHash = await Hash.encrypt(password);
  const serverUser: ServerUserRegistration = {
    ...rest,
    passwordHash,
  };

  return serverUser;
};
