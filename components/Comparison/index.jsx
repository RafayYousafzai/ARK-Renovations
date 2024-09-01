"use client";
import { Container } from "@mantine/core";
import React from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import GetInspired from "components/GetInspired";
import SectionHeader from "components/common/SectionHeader";
import BookShowing from "components/BookShowing";

const BASEMENT_AFTER_IMAGE = {
  imageUrl:
    "https://github.com/RafayKhan177/Raw-Images/blob/main/camparisn/basement/showroom-basement-after.jpg?raw=true",
};

const BASEMENT_BEFORE_IMAGE = {
  imageUrl:
    "https://github.com/RafayKhan177/Raw-Images/blob/main/camparisn/basement/showroom-basement-before.jpg?raw=true",
};

const HOUSE_AFTER_IMAGE = {
  imageUrl:
    "https://github.com/RafayKhan177/Raw-Images/blob/main/camparisn/house/showroom-complete-house-after.jpg?raw=true",
};

const HOUSE_BEFORE_IMAGE = {
  imageUrl:
    "https://github.com/RafayKhan177/Raw-Images/blob/main/camparisn/house/showroom-complete-house-before.jpg?raw=true",
};

const OUTDOOR_AFTER_IMAGE = {
  imageUrl:
    "https://github.com/RafayKhan177/Raw-Images/blob/main/camparisn/outdoor/showroom-outdoor-living-after.jpg?raw=true",
};

const OUTDOOR_BEFORE_IMAGE = {
  imageUrl:
    "https://github.com/RafayKhan177/Raw-Images/blob/main/camparisn/outdoor/showroom-outdoor-living-before.jpg?raw=true",
};

export default function Comparison() {
  return (
    <>
      <Container size={"lg"}>
        <SectionHeader
          headerInfo={{
            title: "Enhance Your Comparison Experience",
            subtitle: "Discover the changes before/after",
            description:
              "Whether its a basement renovation, a complete house makeover, or outdoor living space improvements, we have got you covered!",
          }}
        />

        <Tabs aria-label="Options">
          <Tab key="photos" title="Basement">
            <Card>
              <CardBody className="min-h-[20vh]">
                <ReactBeforeSliderComponent
                  className="overflow-hidden"
                  firstImage={BASEMENT_AFTER_IMAGE}
                  secondImage={BASEMENT_BEFORE_IMAGE}
                />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="music" title="House">
            <Card>
              <CardBody className="min-h-[20vh]">
                <ReactBeforeSliderComponent
                  className="overflow-hidden"
                  firstImage={HOUSE_AFTER_IMAGE}
                  secondImage={HOUSE_BEFORE_IMAGE}
                />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="videos" title="Outdoor">
            <Card>
              <CardBody className="min-h-[20vh]">
                <ReactBeforeSliderComponent
                  className="overflow-hidden"
                  firstImage={OUTDOOR_AFTER_IMAGE}
                  secondImage={OUTDOOR_BEFORE_IMAGE}
                />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}
