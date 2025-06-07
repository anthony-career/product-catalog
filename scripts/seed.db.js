const { PrismaClient, Prisma } = require("@prisma/client");
const fs = require("fs");

const logNoTableFound = () => {
  console.error(new Error("no table was passed"));
};
const getScriptArgs = () => {
  const payload = {};
  const args = process.argv;
  args.forEach((arg, index, arr) => {
    const isLastArg = index === arr.length;
    const hasTable = arg === "--table";
    if (isLastArg && !hasTable) return logNoTableFound();
    if (hasTable) {
      const value = arr[index + 1];
      if (!value) return logNoTableFound();
      payload.table = value;
    }
  });

  return payload;
};

const validTables = {
  product: true,
  shipping: true,
};
function validateTable(table) {
  if (!validTables[table]) throw new Error("Table is not a valid table");
  return true;
}

const getTableData = (table) => {
  const rawData = fs.readFileSync(`seed/${table}.json`);
  return JSON.parse(rawData);
};

const getTableHandler = (table) => {
  const client = new PrismaClient();
  const clients = {
    product: client.product.createMany,
    shipping: client.product.createMany,
  };
  return clients[table];
};

const seedByTable = async (table) => {
  validateTable(table);
  const tableData = getTableData(table);
  const handler = getTableHandler(table);
  await handler({ data: tableData });
};

const main = async () => {
  const { table } = getScriptArgs();
  await seedByTable(table);
};

main();
