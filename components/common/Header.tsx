import React from "react";
import styels from "@/styles/header.module.scss";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styels.header}>
      <div className={styels.flexitem}>
        <Link href="/" className={styels.logo}>
          <Image src="/logo.png" alt="건강증진센터" width={40} height={40} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
