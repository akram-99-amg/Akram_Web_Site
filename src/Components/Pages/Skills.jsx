import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGitAlt,
  faGithub,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
const Skills = () => {
  return (
    <div>
      <div id="skills" className=" pt-6 animate-slideFadeRight bg-[#070e1e]">
        <h1 className="mb-4 pt-3 text-center text-8xl text-white font-semibold">
          Skills
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-mono text-2xl gap-5 pt-4 pb-16 mx-12 sm:mx-24 ">
          {/* <Link
            to="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
            className='text-white border-2 border-white flex  flex-col items-center gap-2 py-4'>
            <FontAwesomeIcon
              icon={faHtml5}
              className='text-8xl' />
            <p>HTML</p>
          </Link>

          <Link
            to="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
            className='text-white border-2 border-white flex  flex-col items-center gap-2 py-4'>
            <FontAwesomeIcon
              icon={faCss3Alt}
              className='text-8xl' />
            <p>CSS</p>
          </Link>

          <Link
            to="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
            className='text-white border-2 border-white flex flex-col items-center gap-3 py-4 transition delay-150 duration-300'>
            <FontAwesomeIcon
              icon={faJs}
              className='text-8xl' />
            <p>Javascript</p>
          </Link> */}

          <Link
            to="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border-2 border-white rounded-md flex  flex-col items-center gap-2 py-5 hover:shadow-lg hover:shadow-white duration-200 ease-in-out hover:-translate-y-2 "
          >
            <FontAwesomeIcon icon={faReact} className="text-8xl" />
            <p>React.js</p>
          </Link>

          <Link
            to="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border-2 border-white rounded-md flex flex-col justify-center items-center gap-2 py-5 hover:shadow-lg hover:shadow-white duration-200 ease-in-out hover:-translate-y-2"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              className="text-8xl"
              role="img"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
            </svg>

            <p>Tailwind</p>
          </Link>

          <Link
            to="https://git-scm.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border-2 border-white rounded-md flex  flex-col items-center gap-3 py-5 hover:shadow-lg hover:shadow-white duration-200 ease-in-out hover:-translate-y-2"
          >
            <FontAwesomeIcon icon={faGitAlt} className="text-8xl" />
            <p>Git</p>
          </Link>

          <Link
            to="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border-2 border-white rounded-md flex  flex-col items-center gap-2 py-5 hover:shadow-lg hover:shadow-white duration-200 ease-in-out hover:-translate-y-2"
          >
            <FontAwesomeIcon icon={faGithub} className="text-8xl" />
            <p>GitHub</p>
          </Link>

          <Link
            to="https://en.wikipedia.org/wiki/SQL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border-2 border-white rounded-md flex  flex-col items-center gap-2 py-5 hover:shadow-lg hover:shadow-white duration-200 ease-in-out hover:-translate-y-2"
          >
            <FontAwesomeIcon icon={faDatabase} className="text-8xl" />
            <p>SQL</p>
          </Link>

          <Link
            to="https://www.figma.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border-2 border-white rounded-md flex  flex-col items-center gap-2 py-5 hover:shadow-lg hover:shadow-white duration-200 ease-in-out hover:-translate-y-2"
          >
            <FontAwesomeIcon icon={faFigma} className="text-8xl" />
            <p>Figma</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Skills;
