import Image from "next/image";
import Link from "next/link";

import { FaHome } from "react-icons/fa";

function NotFoundPage() {
  return (
    <main className="page404">
      <Image src="/404.svg" width={500} height={350} alt="404" />
      <p className="text">Page not found! </p>
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

export default NotFoundPage;
