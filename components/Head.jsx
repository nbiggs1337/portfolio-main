import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Noah Biggs is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="noah, noah biggs, biggs, web developer, noah web developer, noah biggs developer, mern stack, noah biggs portfolio, react portfolio"
      />
      <meta property="og:title" content="Noah Biggs' Portfolio" />
      <meta
        property="og:description"
        content="A full-stack MERN developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Noah Biggs',
};
