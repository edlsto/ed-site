import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import ReadMore from "../components/read-more"
import Tags from "../components/tags"
import { css } from "@emotion/core"

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
          I'm a front-end software developer who is passionate about using
          technology to tell stories, provide value and build audiences.
          Previously worked in news industry as corporate content director and
          editor. Outside of technical abilities, skills include audience
          development, content creation and management.
        </p>
        <h2 className="header">Skills</h2>
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
              "React",
              "React Native",
              "JavaScript",
              "Sass",
              "jQuery",
              " HTML/CSS",
              "D3",
              "Leaflet",
              "Travis CI",
              "Node.js",
              "Express",
              "MongoDB",
              "Vue",
              "socket.io",
            ]}
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
          <Tags tags={["Mocha", "Chai", "Jest", "React Testing Library"]} />
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
              "Project Development",
              "AWS",
            ]}
          />
        </div>
        <h2 className="header">Education</h2>
        <p>
          <a href="http://www.vanderbilt.edu">Vanderbilt University</a>, BA,
          English, Spanish
        </p>
        <h2 className="header">Professional Experience</h2>{" "}
        <h3 className="header">Turing School of Software and Design</h3>
        <h4 className="header">
          Front-End Engineering Program Denver, CO Oct. 2019 to June 2020
        </h4>{" "}
        <ul>
          <li>
            Completed 14 projects in solo, pair and group settings, with
            projects ranging from vanilla JavaScript to full-stack React/Rails
            applications.
          </li>{" "}
          <li>
            Gained 1,500 hours of fast-paced hands-on experience in software
            engineering, including languages, frameworks and professional
            development.
          </li>
        </ul>
        <h3 className="header">Swift Communications</h3>
        <h4>Director of Content Gypsum, CO Jan. 2017 to Feb. 2019</h4>• Leader
        of the overall content plan for 18 newspapers/websites across Colorado,
        California and Utah — including all digital, print, news, niche and
        social media produced by the local operations. • Grew company's overall
        digital audience by 45% in two years. • Oversaw all editorial content on
        a daily basis, managing a sta  of 10-15 editorial employees. • Created
        daily On the Hill video ski/activity report in Vail, Aspen, Summit
        County and Tahoe that achieved nearly 1 million video views and $250,000
        revenue in four years. • Covered Olympics in Sochi, Russia, in 2014 and
        Pyeongchang, South Korea, in 2018. Awards Turing School of Software and
        Design · First place, Demo Comp June 2020 Won  rst place for the
        Trackbasket app at Demo Comp, which was open to all upper- level
        students in the school. Six projects were accepted into the demo comp.
        Vail Daily Vail, CO Managing Editor June 2010 to Jan. 2017 /
        <ReadMore to="/">&larr; back to home</ReadMore>
      </div>
    </Layout>
  )
}

export default Resume
