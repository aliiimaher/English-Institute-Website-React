import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../components/Card";
import "swiper/css"
import { useState, useEffect } from "react";
import axios from "axios";

export const Slider = () => {

    const [courses, setCourses] = useState([] as any[])

    const fetchCourses = () => {
        axios.get("http://localhost:8000/course/")
            .then((res) => {
                setCourses(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchCourses()
    }, [])



    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={true}
            autoplay={{ delay: 3000 }}
        >
        
            {courses.map((course) => {
                return (
                    <SwiperSlide key={course.id}>
                        <Card
                            icon={course.course_image}
                            courseTitle={course.title}
                            shortDescription={course.short_description}
                            courseTeacher={course.teacher.fullname}
                            coursePrice={course.price}
                            className="my-card"
                            onclick={() => (window.location.href = "courses/")}
                        />
                    </SwiperSlide>
                )
            }
            )}


        </Swiper>
    )

}