import Document, { Html, Head, Main, NextScript } from 'next/document'
import styles from '../styles/Home.module.css';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body className={styles.dark}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument