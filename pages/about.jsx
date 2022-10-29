const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <h4> {'<>'} Hi, my name is Noah Biggs. I am an Full Stack Web Developer, proficient in React.js, C#, and Python.  I'm looking to help other companies build real-world applications that help make meaningful change in users daily lives.{"</>"}</h4>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
