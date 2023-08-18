import Course from "./Course";

export default interface Cart {
  items: number;
  price: number;
  course: Course[];
}
