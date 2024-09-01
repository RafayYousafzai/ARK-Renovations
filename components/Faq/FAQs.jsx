"use client";

import { Accordion, ThemeIcon } from "@mantine/core";
import classes from "./styleFAQs.module.css";

export default function FAQs() {
  return (
    <Accordion
      chevronPosition="right"
      defaultValue="reset-password"
      chevronSize={26}
      variant="separated"
      disableChevronRotation
      styles={{
        label: { color: "var(--mantine-color-black)" },
        item: { border: 0 },
      }}
      chevron={
        <ThemeIcon radius="xl" className={classes.gradient} size={26}>
          {/* <IconPlus style={{ width: rem(18), height: rem(18) }} stroke={1.5} /> */}
        </ThemeIcon>
      }
    >
      <Accordion.Item className={classes.item} value="consultation-charge">
        <Accordion.Control>
          Is there a charge for your consultation?
        </Accordion.Control>
        <Accordion.Panel>
          Our in-home consultations are complimentary. We use this time to get a
          basic understanding of your space, your goals, and your budget. We
          want to make sure there’s a good fit, and there’s absolutely no
          obligation to continue further if you aren’t interested.
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item className={classes.item} value="in-house-trades">
        <Accordion.Control>
          Whats the benefit to in-house trades?
        </Accordion.Control>
        <Accordion.Panel>
          From your architectural and interior designers, to your project
          manager, to the installers on site, you’ll be working with employees
          of Ultimate. The benefit? Higher standards, better communication, and
          no runaway contractors.
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item className={classes.item} value="process-duration">
        <Accordion.Control>How long does the process take?</Accordion.Control>
        <Accordion.Panel>
          Every client, house, and space is unique. Depending on the size of
          your project and the complexity of your design, time through planning,
          design, and renovation will vary anywhere from 3 months to 1 year +.
          The best way to get a more accurate answer is to give us a call!
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
