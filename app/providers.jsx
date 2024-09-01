"use client";

import { MantineProvider } from "@mantine/core";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }) {
  return (
    <MantineProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </MantineProvider>
  );
}
