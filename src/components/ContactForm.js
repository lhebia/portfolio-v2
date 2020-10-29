import React, { useReducer } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { Wrapper, SectionHeader, PageSection, siteVars, SectionSubHeader } from '../styles/globalStyles';

const PortfolioForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  input,
  textarea {
    margin: 0.5rem 0;
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid ${siteVars.mainText};
    font-family: -apple-system, "Roboto", sans-serif;
  }
  @media (max-width:768px) {
    width: 100%;
  }
`

const ContactForm = () => {

  const [loginInput, setLoginInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      namePlaceholder: "Name *",
      name: "",
      emailPlaceholder: "Email *",
      email: "",
      messagePlaceholder: "Message *",
      message: "",
    }
  )

  const handleLoginInput = event => {
    const name = event.target.name
    const value = event.target.value
    setLoginInput({ [name]: value })
  }

    return (
      <Wrapper>
        <PageSection
          id="Contact"
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            min-height: 25vh;
          `}
        >
          <SectionHeader>Contact Me</SectionHeader>
          <SectionSubHeader>Let's chat, feel free to drop a line to discuss a project or even to have a coffee.</SectionSubHeader>
          <PortfolioForm action="https://formspree.io/f/xwkrrapw" method="POST">
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleLoginInput}
              value={loginInput.name}
              placeholder={loginInput.namePlaceholder}
            />
            <input
              type="text"
              name="email"
              id="email"
              onChange={handleLoginInput}
              value={loginInput.email}
              placeholder={loginInput.emailPlaceholder}
            />
            <textarea
              id="message"
              name="message"
              rows="5"
              cols="33"
              onChange={handleLoginInput}
              placeholder={loginInput.messagePlaceholder}
            >
              {loginInput.message}
            </textarea>
            <input
              type="submit"
              value="Submit"
              css={css`
                padding: 1rem 1.2rem;
                margin-top: 1rem;
                border-radius: 5px;
                background-color: ${siteVars.mainHighlight};
                color: ${siteVars.offWhite};
                border: 1px solid ${siteVars.mainHighlight};
                opacity: 0.86;
                transition: all 0.2s;
                &:hover,
                &:focus {
                  background-color: ${siteVars.offWhite};
                  border: 1px solid ${siteVars.mainHighlight};
                  color: ${siteVars.mainHighlight};
                }
              `}
            />
          </PortfolioForm>
        </PageSection>
      </Wrapper>
    )
}

export default ContactForm;