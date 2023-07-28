import Nav from "../components/Nav";

export default function About() {
  return (
    <div className="h-screen w-full">
      <Nav></Nav>
      <div className="p-5 md:p-10 text-2xl text-gray-700 text-ellipsis font-Edu-SA">
        <h3 className="text-5xl">Hello!</h3>
        <br />
        <p>
          My name is AmirMohammad.I am student of computer engineering and a
          front-end developer
          <br />
          I love computer and programming.
          <br />
          This is a music player app.
          <br />I coded this project with focusing on React.js library and css
          tailwind framework. <br/>I haven&apos;t any real music api for this project and
          this project hasn&apos;t any backend <br/>so i used some music audios and covers links from <a className="text-[#16a34a]" href="https://pixabay.com/">pixabay website</a> .<br/>Also all logos are free.
        </p>
      </div>
    </div>
  );
}
