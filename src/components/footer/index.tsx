import { Stack, Text } from "@chakra-ui/react";

function FooterSection() {
  return (
    <>
      <Stack
        marginTop={32}
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
      >
        <Text as="small" color="#98A2B3">
          Made in 🇮🇳 with{" "}
          <span>
            <a
              style={{ textDecoration: "underline" }}
              href="https://github.com/developersIndia"
              rel="noopener noreferrer"
              target="_blank"
            >
              Open-Source
            </a>
          </span>{" "}
          ❤️
        </Text>
      </Stack>
    </>
  );
}

export default FooterSection;
