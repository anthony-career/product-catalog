export const isValidPositiveInt = (val?: string | number) => {
  if(!val) return false
  if(typeof val === "number" && isNaN(val)) return false
  return  /^\d+$/.test(val as string);
}