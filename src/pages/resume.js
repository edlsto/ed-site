import React from "react"
import Layout from "../components/layout"
import Tags from "../components/tags"
import { css } from "@emotion/core"

const H2Resume = props => (
  //eslint-disable-next-line
  <h2
    css={css`
      margin-top: 2em;
    `}
    {...props}
  />
)

const Resume = () => {
  return (
    <Layout>
      <div
        className="styles"
        css={css`
          .header {
            margin-top: 1em;
          }
        `}
      >
        <p
          css={css`
            line-height: 1.7;
          `}
        >
          I'm a front-end-focused software engineer with experience across
          full-stack Web applications. Previously worked in news industry as
          corporate content director and editor. Outside of technical abilities,
          skills include audience development, content creation and management.
        </p>
        <H2Resume>Skills</H2Resume>
        <h3 className="header">Languages/Frameworks</h3>
        <div
          className="tags-container"
          css={css`
            display: flex;
            flex-wrap: wrap;
          `}
        >
          <Tags
            tags={[
              "Vue",
              "Nuxt",
              "Vuex",
              "C#",
              ".NET",
              "TypeScript",
              "React",
              "React Native",
              "Redux",
              "JavaScript",
              "Sass",
              "SQL",
              "Bootstrap",
              "HTML/CSS",
              "D3",
              "Node.js",
              "Express",
              "MongoDB",
              "socket.io",
              "Greensock",
              "Expo",
              "PostgreSQL"            ]}
          />
        </div>
        <h3 className="header">Testing</h3>
        <div
          className="tags-container"
          css={css`
            display: flex;
            flex-wrap: wrap;
          `}
        >
          <Tags
            tags={[
              "Mocha",
              "Chai",
              "Jest",
              "React Testing Library",
              "Selenium",
            ]}
          />
        </div>
        <h3 className="header">Systems/Practices</h3>
        <div
          className="tags-container"
          css={css`
            display: flex;
            flex-wrap: wrap;
          `}
        >
          <Tags
            tags={[
              "Test-Driven Development",
              "Git",
              "Github",
              "Gitlab",
              "Project Development",
              "AWS",
            ]}
          />
        </div>
        <H2Resume>Education</H2Resume>
        <p>
          <a href="http://www.vanderbilt.edu">Vanderbilt University</a>, BA,
          English, Spanish
        </p>
        <p>
          <a href="http://turing.edu">Turing School of Software and Design</a>,
          Front-End Engineering Program
        </p>
        <H2Resume>Professional Experience</H2Resume>{" "}
        <h3 className="header">
          <a href="http://www.ethopass.com">eGifter</a>
        </h3>
        <h4 className="header">Front-End Developer</h4>{" "}
        <h5>Huntington, NY/Remote, Oct. 2021 to present</h5>
        <ul>
          <li>
            Work in Vue, Sass, TypeScript and Nuxt to build and maintain modern user interfaces for leading platform for eCommerce gifting and for gift card rewards and incentives.
          </li>
          <li>
            Implement new feature requests for internal projects, eGifter-branded marketplaces and client marketplaces.
          </li>
          <li>
            Work on framework improvements in Vue/Nuxt codebase.
          </li>
          <li>
            Fix bugs and work with QA team through testing process.
          </li>
          <li>
            Implemented new features, in Vue front end and C#/.NET back end, in content management system to allow for management of clients and products.
          </li>
        </ul>
        <h3 className="header">
          <a href="http://www.ethopass.com">Ethopass</a>
        </h3>
        <h4 className="header">Software Engineer</h4>{" "}
        <h5>Boulder, CO, Aug. 2020 to Oct. 2021</h5>
        <ul>
          <li>
            Work in Vue, Vuex, TypeScript, Sass and Jest to build out front end
            of secure authentication solution at startup.
          </li>
          <li>
            Built out the Ethopass admin panel, which allows administrators to
            provision, delete and modify user credentials within an
            organization.
          </li>
          <li>
            Implemented new designs for the product's web extension,
            incorporating back-end API.
          </li>
          <li>
            Implemented unit tests using Vue Test Utils and Jest. Implemented
            end-to-end testing using Selenium and Mocha/Chai.
          </li>
          <li>
            Built out documentation site for Ethopass project using Vuepress.
          </li>
        </ul>
        <h3 className="header">
          <a href="https://swiftcom.com/">Swift Communications</a>
        </h3>
        <h4 className="header">Director of Content</h4>{" "}
        <h5>Gypsum, CO, Jan. 2017 to Feb. 2019</h5>
        <ul>
          <li>
            Leader of the overall content plan for 18 newspapers/websites across
            Colorado, California and Utah — including all digital, print, news,
            niche and social media produced by the local operations.
          </li>
          <li>Grew company's overall digital audience by 45% in two years.</li>
        </ul>
        <h3 className="header">
          <a href="http://www.vaildaily.com">Vail Daily</a>
        </h3>{" "}
        <h4 className="header"> Managing Editor </h4>
        <h5>Vail, CO, June 2010 to Jan. 2017</h5>
        <ul>
          <li>
            Oversaw all editorial content on a daily basis, managing a staff of
            10-15 editorial employees.
          </li>
          <li>
            Created daily On the Hill video ski/activity report in Vail, Aspen,
            Summit County and Tahoe that achieved nearly 1 million video views
            and $250,000 revenue in four years.
          </li>
          <li>
            Covered Olympics in Sochi, Russia, in 2014 and Pyeongchang, South
            Korea, in 2018.
          </li>
        </ul>
        <H2Resume>Awards</H2Resume>{" "}
        <h3 className="header">
          <a href="http://turing.io">Turing School of Software and Design</a>
        </h3>{" "}
        <h4>First place, Demo Comp</h4>
        <h5>June 2020</h5>
        <ul>
          <li>
            Won first place for the Trackbasket app at Demo Comp, which was open
            to all upper- level students in the school. Six projects were
            accepted into the demo comp.
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default Resume
