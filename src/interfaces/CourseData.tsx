import { ReactNode } from "react";

export default interface CourseData {
  title: string;
  description: string;
  picturePath: string;
  price: string;
  teacher: string;
  numberOfSessions: string;
  duration: string;
  numberOfStudents: string;
  // content
  children: ReactNode;
  preViews?: string;
}
