import CtaSection from "../components/cta";
import FooterSection from "../components/footer";
import Header from "../components/header";
import MissionSection from "../components/mission";
import ModProfiles from "../components/mod-profiles";
import { Container, Divider } from "@chakra-ui/react";

function IndexPage() {
  return (
    <Container
      maxWidth={{ base: "full", md: "container.lg" }}
      marginTop={{ base: 12, md: 28 }}
      marginBottom={{ base: 8, md: 12 }}
    >
      <Header />
      <Divider marginY={20} />
      <MissionSection />
      <Divider marginY={20} />
      <ModProfiles />
      <Divider marginY={20} />
      <CtaSection />
      <FooterSection />
    </Container>
  );
}

export default IndexPage;
