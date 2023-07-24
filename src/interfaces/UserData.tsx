export default interface UserData {
  f_name: string;
  l_name: string;
  username: string;
  email: string;
  password: string;
  sex?: "مرد" | "زن";
  phoneNumber: string;
  location: string;
  picSrc: string;
}
