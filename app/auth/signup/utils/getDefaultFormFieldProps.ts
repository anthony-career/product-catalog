export const getDefaultFormFieldProps = (name: string) => {
  const props: Record<string, any> = {};
  if (name.toLowerCase().includes("password")) {
    props.type = "password";
  }
  return props;
};
