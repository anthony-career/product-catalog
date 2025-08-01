export interface ServerUserRegistration {
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
}

export interface ClientUserRegistration {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
