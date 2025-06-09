export const isValidId = (id: string | number): boolean => {
  const numId = typeof id === "string" ? Number(id) : id;
  return !isNaN(numId) && numId > 0 && Number.isInteger(numId);
};
