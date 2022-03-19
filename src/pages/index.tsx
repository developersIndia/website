import { Text } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      {/* Text is a NextUI component added to test the theme.ts file and for preview */}
      <Text
        h1
        size={42}
        css={{
          //myGradient is declared in @styles/theme.ts
          textGradient: "$myGradient",
        }}>
        Hello from Developers India
      </Text>
    </div>
  );
}
