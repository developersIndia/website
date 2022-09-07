import axios, { AxiosError } from "axios";
import CtaSection from "../components/cta";
import FooterSection from "../components/footer";
import Header from "../components/header";
import MissionSection from "../components/mission";
import Stats from "../components/stats/index";
import Team from "../components/team";
import { StatsData } from "../utils/interfaces";


interface Props {
  statsData: StatsData
}

function IndexPage(props: Props) {
  const { statsData } = props;
  return (
    <main>
      <Header />
      <MissionSection />
      <Stats data={statsData} />
      <Team />
      <CtaSection />
      <FooterSection />
    </main>
  );
}

export async function getServerSideProps(context: any) {
  const { res } = context;
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  let response;
  let data: StatsData;

  try {
    response = await axios("https://developersindia.github.io/metrics/data");
    const { totalMembers, yesterdayUniquePageViews } = response.data;
    data = {
      dailySubredditViews: yesterdayUniquePageViews,
      subredditMembers: totalMembers,
      discordServerMembers: 5000,
    }
  } catch (error) {
    data = {
      dailySubredditViews: 19000,
      subredditMembers: 66600,
      discordServerMembers: 5000,
    }
  }

  return {
    props: { statsData: data },
  }
}

export default IndexPage;
