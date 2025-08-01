import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/client";

export const dbClient: PrismaClient<
  Prisma.PrismaClientOptions,
  never,
  DefaultArgs
> = (global as any).dbClient ?? new PrismaClient();
