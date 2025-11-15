import Link from "next/link";

import CtaSection from "../components/cta";
import FooterSection from "../components/footer";
import Header from "../components/header";
import MissionSection from "../components/mission";
import ModProfiles from "../components/mod-profiles";
import RedditCarousel from "../components/reddit-carousel";
import { Button, Center, Container, Divider } from "@chakra-ui/react";
import { FaHandsHelping } from "react-icons/fa";

function IndexPage() {
  return (
    <Container
      maxWidth={{ base: "full", md: "container.lg" }}
      marginTop={{ base: 12, md: 28 }}
      marginBottom={{ base: 8, md: 12 }}
    >
      <Header />
      <Divider marginY={20} />
      <RedditCarousel />
      <Divider marginY={20} />

      {/* Volunteer CTA */}
      <Center marginY={12}>
        <Link href="/become-a-volunteer" passHref>
          <Button
            leftIcon={<FaHandsHelping />}
            colorScheme="green"
            size={{ base: "md", md: "lg" }}
            variant="solid"
            bgColor="gray.300"
            color="#000000ff"
            _hover={{ bgColor: "gray.400" }}
            borderRadius={90}
            boxShadow="lg"
          >
            Become a Volunteer
          </Button>
        </Link>
      </Center>

      {/* <MissionSection /> */}
      {/* <Divider marginY={20} /> */}
      {/* <ModProfiles /> */}
      {/* <Divider marginY={20} /> */}
      {/* <CtaSection /> */}
      <FooterSection />
    </Container>
  );
}

export default IndexPage;
