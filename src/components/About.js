import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import SocialNav from './SocialNav';

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    text-align: center;
    width: 50%;
    max-width: 1200px;
    padding: 6rem 0 3rem;
    @media (max-width: 1000px) {
      width: 75%;
      padding: 4rem 1rem;
    }
    @media (max-width: 500px) {
      width: 100%;
      padding: 4rem 1rem;
    }
    h3 {
      font-size: 2.6rem;
      line-height: 3.2rem;
      padding: 0.5rem 0;
    }
    p {
      font-size: 1.2rem;
      line-height: 1.8rem;
      padding: 0.5rem;
      @media (max-width: 500px) {
        padding: 0.2rem;
        font-size: 1rem;
      }
    }
  }
`

export default function About() {

    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            hero {
              title
              subTitle
              desc
            }
          }
        }
      }
    `)

    return (
      <AboutContainer>
        <div>
          {/* <h2>{data.site.siteMetadata.hero.title}</h2> */}
          <h3>{data.site.siteMetadata.hero.title}</h3>
          <p>{data.site.siteMetadata.hero.desc}</p>
          <SocialNav flexJustification="center"/>
        </div>
      </AboutContainer>
    )
}
