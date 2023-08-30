import { ReactNode } from "react";

export default interface CourseData {
  title: string;
  description?: string;
  picturePath?: string;
  price?: string;
  teacher?: string;
  teacherPicturePath?: string;
  teacherSubtitle?: string;
  teacherDescription?: string;
  numberOfSessions?: string;
  duration?: string;
  numberOfStudents?: string;
  children?: ReactNode;
  preViews?: string;
}
