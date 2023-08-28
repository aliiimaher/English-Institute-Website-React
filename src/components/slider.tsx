import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";
import "swiper/css";
import { useState, useEffect } from "react";
import axios from "axios";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "../styles/components/Slider.scss"

const Slider = () => {
  const [courses, setCourses] = useState([] as any[]);

  const fetchCourses = () => {
    axios
      .get("http://localhost:8000/course/")
      .then((res) => {
        setCourses(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 2000 }}
      breakpoints={{
        1200: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
      }}
    >
      {courses.map((course) => {
        return (
          <SwiperSlide
            key={course.id}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              icon={course.course_image}
              courseTitle={course.title}
              shortDescription={course.short_description}
              courseTeacher={course.teacher.fullname}
              coursePrice={course.price}
              className="my-card"
              onclick={() =>
                (window.location.href = `course-info/${course.id}/`)
              }
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
