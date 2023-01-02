import styles from './page.module.css'

import Image from 'next/image'
import BlurImage from '../ui/blur-image'
import { PageTransition } from '@components/container'

export default function Home() {
  return (
    <PageTransition width="content">
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <BlurImage src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.content}>
        <h2>Next.js v13 Starter Kit</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, nesciunt? Voluptas laudantium ut nisi odit ab aliquid odio numquam. Voluptas quam odio, inventore necessitatibus deleniti impedit facere nulla distinctio. Labore?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nam animi earum, excepturi rem quis recusandae fugit totam corporis, sit delectus debitis minima voluptatibus distinctio quae qui et commodi impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias beatae, neque impedit incidunt suscipit! Quod iure deserunt iste placeat minima ab facere, repudiandae saepe quaerat provident fugiat mollitia maxime.
        </p>
      </div>
    </PageTransition>
  )
}
