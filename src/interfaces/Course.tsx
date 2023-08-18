export default interface Course {
  id: number;
  title: string;
  short_description: string;
  course_image: string;
  price: number;
  teacher: Teacher;
  description: string;
  number_of_sessions: number;
  number_of_students: number;
  duration: number;
  content: string;
  preview: [];
}

export interface Teacher {
  fullname: string;
  teacher_image: string;
  description: string;
  subtitle: string;
}
