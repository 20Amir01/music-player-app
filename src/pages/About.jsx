import Nav from "../components/Nav";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";

export default function About() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [setIsLoading]);
  if (isLoading) return <Loading></Loading>;
  return (
    <div className="h-screen w-full">
      <Nav></Nav>
      <div className="p-5 md:p-10 text-2xl text-gray-900 text-ellipsis font-Edu-SA">
        <div className="bg-white bg-opacity-90 p-5 rounded-md w-full md:w-[800px]">
          <h3 className="text-5xl font-bold">Hello!</h3>
          <br />
          <p>
            My name is AmirMohammad. I am computer engineering student and front-end developer .
            <br />
            I love computer and programming.
            <br />
            This is a music player app.
            <br />I coded this project with focusing on React.js library and css
            tailwind framework. <br />I haven&apos;t any real music api for this
            project and this project hasn&apos;t any backend <br />
            so i used some music audios and covers links from{" "}
            <a className="text-green-500 inline-block bg-opacity-90 px-2 bg-black rounded" href="https://pixabay.com/">
              pixabay website
            </a>{" "}
            <br />
            Also all logos are free.
          </p>
        </div>
      </div>
    </div>
  );
}
