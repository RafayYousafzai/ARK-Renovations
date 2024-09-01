import Hero from "components/Hero";
import Testimonial from "components/Testimonial";
import GetInspired from "components/GetInspired";
import BlogsListing from "components/BlogsListing";
import Services from "components/Services";
import Comparison from "components/Comparison";
import BookShowing from "components/BookShowing";

export default function Page() {
  return (
    <>
      <Hero />
      <br />
      <br />
      <br />
      <GetInspired />
      <BlogsListing />
      <Comparison />
      <Testimonial />
      <BookShowing />
      <Services />
    </>
  );
}
