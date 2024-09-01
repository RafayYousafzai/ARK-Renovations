"use client";

import {
  Container,
  Text,
  UnstyledButton,
  Overlay,
  SimpleGrid,
} from "@mantine/core";
import FAQs from "./FAQs";
import classes from "./style.module.css";
import Link from "next/link";

const categories = [
  {
    label: "Our Process",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    href: "/about/our-process",
  },
  {
    label: "Our Story",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    href: "/about/our-story",
  },
  {
    label: "Blogs",
    image:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    href: "/blogs",
  },
];

export default function FaqWithHeader() {
  const items = categories.map((category) => (
    <UnstyledButton
      style={{ backgroundImage: `url(${category.image})` }}
      className={classes.categoryCard}
      key={category.label}
    >
      <Link href={category.href}>
        <Overlay color="#000" opacity={0.6} zIndex={1} />
        <Text size="xl" ta="center" fw={700} className={classes.categoryLabel}>
          {category.label}
        </Text>
      </Link>
    </UnstyledButton>
  ));

  return (
    <Container className={classes.wrapper} size="lg">
      <div className={classes.header}>
        {/* <div className={classes.contact}> */}
          <br />
          <FAQs />
          <br />
        </div>
      {/* </div> */}

      <SimpleGrid cols={{ base: 1, sm: 3 }}>{items}</SimpleGrid>
    </Container>
  );
}
