export default interface CardHData {
  picture: string;
  courseTitle: string;
  courseDescription: string;
  courseTeacher: string;
  coursePrice: string;
  onClick?: () => void;
  background?: "yes" | "no";
}
