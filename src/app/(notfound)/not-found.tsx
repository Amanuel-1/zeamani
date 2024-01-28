// pages/404.js or pages/404.tsx

import Link from 'next/link';
import Image from 'next/image'
import styles from 'fireup/styles/notfound.module.css'; // Import your styles
import { Images } from 'fireup/app/resources';

const Custom404 = () => {
  return (
    <div className={styles.component}>
      <Image src={Images.meltingFace} alt='404' width={100} height={100}/>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.description}>
        I am afraid the page you are looking for does not exist.
      </p>
      <Link className={styles.link} href="/">
        return to home
      </Link>
    </div>
  );
};

export default Custom404;