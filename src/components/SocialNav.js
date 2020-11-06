import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const SocialNav = ({ flexJustification }) => {
  const FooterUl = styled.ul`
      display: flex;
      justify-content: ${flexJustification};
      li {
          padding: 0.75rem;
          font-size: 1.5rem;
      }
  `;

  return (
    <FooterUl>
            <li>
              <a
                href="https://github.com/lhebia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/lhebia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/lhebia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </FooterUl>
  )
}

export default SocialNav;