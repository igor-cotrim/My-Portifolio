import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Permanent+Marker&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Desenvolvedor a procura de emprego e mostranado seus projetos"
          />
          <meta
            name="keywords"
            content="Desenvolvedor web, Freelancer, JAMStack"
          />
        </Head>
        <body className="bg-gradient-to-r from-indigo to-gray-900 dark:from-dark-500 dark:to-dark-700 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
