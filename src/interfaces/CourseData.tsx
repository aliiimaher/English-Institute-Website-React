import { ReactNode } from "react";

export default interface CourseData {
  title: string;
  description?: string;
  picturePath?: string;
  price?: string;
  teacher?: string;
  teacherPicturePath?: string;
  teacherDescription?: string;
  numberOfSessions?: string;
  duration?: string;
  numberOfStudents?: string;
  // content
  children?: ReactNode;
  preViews?: string;
}
