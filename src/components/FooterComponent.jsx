import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaRegCalendarCheck,
  FaFilePdf,
} from 'react-icons/fa';

import resume from '../assets/resume.pdf';

function FooterComponent() {
  return (
    <footer>
      <div className="wrapper">
        <div className="socialIcons">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/serjqazi/">
                <FaLinkedin />
              </a>
              <p>Linkedin</p>
            </li>

            <li>
              <a href="https://github.com/SerjQazi">
                <FaGithub />
              </a>
                <p>GitHub</p>
            </li>

            <li>
              <a href="https://twitter.com/serj_qazi">
                <FaTwitter />
              </a>
              <p>Twitter</p>
            </li>

            <li>
              <a href="https://calendly.com/serj-qazi">
                <FaRegCalendarCheck />
              </a>
              <p>Calendly</p>
            </li>

            <li>
              <a href={resume}>
                <FaFilePdf />
              </a>
              <p>Resume</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
