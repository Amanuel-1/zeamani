import React from 'react'
import styles from 'fireup/styles/notfound.module.css';


const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <html lang="en">
    <body  className={styles.container}>
        {children}
         </body>
  </html>
  )
}

export default layout