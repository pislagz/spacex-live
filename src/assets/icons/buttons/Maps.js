import { Flex } from "app/components/common/ui";
import React from "react";

export const Maps = ({ lat, lon }) => (
  <Flex
    as="a"
    target="_blank"
    href={`https://maps.google.com/?q=${lat},${lon}`}
    justifyContent="center"
    alignItems="center"
  >
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="#353535" />
      <path
        d="M16 7.25C11.875 7.25 8.5 10.625 8.5 14.75C8.5 21.05 15.25 26.375 15.55 26.6C15.7 26.675 15.85 26.75 16 26.75C16.15 26.75 16.3 26.675 16.45 26.6C16.75 26.375 23.5 21.05 23.5 14.75C23.5 10.625 20.125 7.25 16 7.25ZM16 17.75C14.35 17.75 13 16.4 13 14.75C13 13.1 14.35 11.75 16 11.75C17.65 11.75 19 13.1 19 14.75C19 16.4 17.65 17.75 16 17.75Z"
        fill="white"
      />
    </svg>
  </Flex>
);
