export interface IUser{
    id: string | number
    name: string
    email: string
    password: string
}
export interface Data {
  id: string;
  email: string;
  name: string;
  role: string;
  iat: number;
  exp: number;
}