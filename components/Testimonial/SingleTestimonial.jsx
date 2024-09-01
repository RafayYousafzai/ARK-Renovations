import Image from "next/image";

const SingleTestimonial = ({ review }) => {
  const { name, designation, content } = review;

  const person =
    "https://img.freepik.com/premium-vector/man-doubts-oops-sorry-guy-with-question-mark-search-solution-i-know-man-shrugging-shoulders-shows-helplessly-question-gesture-spread-his-hands-he-does-know-what_435184-410.jpg?w=740";

  return (
    <div
      style={{ backgroundColor: "#6f1d1b" }}
      className="rounded-lg bg-[#6f1d1b] p-9 pt-7.5 shadow-solid-9 dark:border"
    >
      <div className="mb-7.5 flex justify-between border-b border-stroke pb-6">
        <div>
          <h3 className="mb-1.5 text-metatitle3 text-white ">{name}</h3>
          <p className="text-slate-100">{designation}</p>
        </div>
        <Image
          width={60}
          height={60}
          className="object-cover rounded-full"
          src={person}
          alt={name}
        />
      </div>

      <p className="text-slate-100">{content}</p>
    </div>
  );
};

export default SingleTestimonial;
