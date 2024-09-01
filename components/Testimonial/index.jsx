"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import testimonialData from "./testimonialData";
import SingleTestimonial from "./SingleTestimonial";
import SectionHeader from "../common/SectionHeader";
import { Container } from "@mantine/core";

const Testimonial = () => {
  return (
    <>
      <Container size={"lg"}>
        <SectionHeader
          headerInfo={{
            title: "OUR REVIEWS",
            subtitle: "Testimonials from Satisfied Customers",
            description:
              "Discover what homeowners have to say about their experience with [Company Name]. Read our reviews to learn why people choose us for their home improvement needs.",
          }}
        />

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top  mt-15  xl:mt-20 "
        >
          {/* <!-- Slider main container --> */}
          <div className="swiper testimonial-01 mb-20 pb-22.5">
            {/* <!-- Additional required wrapper --> */}
            <Swiper
              spaceBetween={50}
              slidesPerView={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                // when window width is >= 640px
                0: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
              }}
            >
              {testimonialData.map((review) => (
                <SwiperSlide key={review?.id}>
                  <SingleTestimonial review={review} />
                  <br />
                  <br />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </Container>
    </>
  );
};

export default Testimonial;
