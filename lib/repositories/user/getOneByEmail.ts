import { UserEntity } from "domain/user/entity";
import { dbClient } from "lib/db/client";

export async function getOneByEmail(email: string): Promise<UserEntity | null> {
  const data = await dbClient.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
    },
  });

  if (!data) {
    return null;
  }

  return data;
}
