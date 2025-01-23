import { Outfit } from "next/font/google";
import React from "react";
import Image from "next/image";
import Qrcode from "../../public/images/image-qr-code.png";
import styles from "./page.module.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bg}>
        <Image className={styles.img} 
        src={Qrcode} 
        alt="Qr-code" 
        />
        <div className={styles.containerContent}>
          <div className={`${outfit.className} ${styles.TextTitle}`}>
            Improve your front-end skills by building projects
          </div>
          <div className={`${outfit.className} ${styles.TextContent}`}>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
