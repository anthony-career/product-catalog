import { dbClient } from "lib/db/client";
import { getOneByEmail } from "./getOneByEmail";
import { create } from "./create";

export const UserRepository = {
  getOneByEmail,
  create,
  $native: dbClient.user,
};
