"use client";

import PostForm from "components/Management/PostForm";
import { postDoc } from "api/functions/post";
import SectionHeader from "components/common/SectionHeader";
import { Container } from "@mantine/core";
// import Header from "components/Header";

export default function Page() {
  const handleSave = async (id, data) => {
    try {
      const res = await postDoc(data, "blogs");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <Header admin={true} /> */}
      <Container size={"lg"}>
        <SectionHeader
          headerInfo={{
            title: "Post Form",
            subtitle: "Write New Post",
            description:
              "We offer a comprehensive range of architectural and construction services to bring your ideas to life.",
          }}
        />
        <PostForm handleSave={handleSave} />
      </Container>
    </>
  );
}
