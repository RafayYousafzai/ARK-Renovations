"use client";
import { motion } from "framer-motion";

const SectionHeader = ({ headerInfo }) => {
  const { title, subtitle, description } = headerInfo;

  return (
    <>
      {/* <!-- Section Title Start --> */}
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
        className="animate_top mx-auto text-center my-6"
      >
        <div className="mb-4 inline-block rounded-full bg-[#6f1d1b] px-4.5 py-1.5 dark:border dark:border-strokedark dark:bg-blacksection">
          <span className="text-sectiontitle font-medium text-white dark:text-white">
            {title}
          </span>
        </div>
        <h2 className="mx-auto mb-4 text-3xl font-bold text-[#6f1d1b] dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
          {subtitle}
        </h2>
        <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%] text-slate-800">{description}</p>
      </motion.div>
      {/* <!-- Section Title End --> */}
    </>
  );
};

export default SectionHeader;
