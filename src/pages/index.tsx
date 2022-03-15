import { Text } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      {/* Text is a NextUI component added to test the theme.ts file and for preview */}
      <Text h1
        size={42} css={{
          textGradient: '141deg, rgba(242,119,80,0.8) 0%, rgba(57,72,179,0.4) 24%, rgba(17,35,153,0.6) 28%, rgba(6,182,34,0.5) 54%'
        }}>
        Hello from Developers India
      </Text>
    </div>
  );
}
