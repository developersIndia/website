import Image from "next/image";
import Link from "next/link";

import { FaHome } from "react-icons/fa";

function ServerErrorPage() {
  return (
    <main className="page500">
      <Image src="/500.svg" width={500} height={350} alt="404" />
      <p className="text">Server Error! </p>
      <br />
      <Link href="/">
        <a className="button-dark">
          <FaHome />
          &nbsp; Back to Home
        </a>
      </Link>
    </main>
  );
}

export default ServerErrorPage;
