export default interface UserData {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  sex?: "مرد" | "زن";
  phone_number: string;
  location: string;
  profile_image: string;
}
