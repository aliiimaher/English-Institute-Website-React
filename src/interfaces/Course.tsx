export default interface Course {
  title: string;
  short_description: string;
  course_image: string;
  price: number;
  teacher: Teacher;
}

export interface Teacher {
  fullname: string;
}
