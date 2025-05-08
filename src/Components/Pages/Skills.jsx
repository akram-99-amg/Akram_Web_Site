import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDatabase } from '@fortawesome/free-solid-svg-icons';
import {faHtml5,faCss3Alt,faJs, faReact, faGitAlt, faGithub, faPython,faFigma } from '@fortawesome/free-brands-svg-icons';
const Skills = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faHtml5} />
      <FontAwesomeIcon icon={faCss3Alt} />
      <FontAwesomeIcon icon={faJs} />
      <FontAwesomeIcon icon={faReact} />
      <FontAwesomeIcon icon={faGitAlt} />
      <FontAwesomeIcon icon={faGithub} />
      <FontAwesomeIcon icon={faPython} />
      <FontAwesomeIcon icon={faDatabase} />
      <FontAwesomeIcon icon={faFigma} />
    </div>
  )
}

export default Skills
