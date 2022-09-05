import CtaSection from "../components/cta";
import FooterSection from "../components/footer";
import Header from "../components/header";
import MissionSection from "../components/mission";
import Stats from "../components/stats/index";
import Team from "../components/team";

function IndexPage() {
  return (
    <main>
      <Header />
      <MissionSection />
      <Stats />
      <Team />
      <CtaSection />
      <FooterSection />
    </main>
  );
}

export default IndexPage;
