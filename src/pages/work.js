import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "components/Layout"
import ProjectCard from "components/ProjectCard"
import dimensions from "styles/dimensions"
import colors from "styles/colors"

const WorkTitle = styled("h1")`
  margin-bottom: 1em;
  position: relative;
  display: inline-block;

  &:after {
    z-index: -1;
    content: "";
    display: block;
    position: absolute;
    height: 50%;
    width: 100%;
    opacity: 0.25;
    background-color: ${colors.qimodaLight};
    bottom: 0;
    right: 0;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      height: calc(45%);
    }
  }
`

const Work = ({ projects, meta }) => (
  <>
    <Helmet
      title={`Work | Qimoda`}
      titleTemplate={`%s`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: `Work | Qimoda`,
        },
        {
          property: `og:description`,
          content: meta.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: meta.author,
        },
        {
          name: `twitter:title`,
          content: meta.title,
        },
        {
          name: `twitter:description`,
          content: meta.description,
        },
      ].concat(meta)}
    />
    <Layout>
      <WorkTitle>OUR PROJECTS</WorkTitle>
      <>
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            category={project.node.project_category}
            title={project.node.project_title}
            description={project.node.project_preview_description}
            thumbnail={project.node.project_preview_thumbnail}
            thumbnailSharp={project.node.project_preview_imageSharp}
            uid={project.node._meta.uid}
          />
        ))}
      </>
    </Layout>
  </>
)

export default ({ data }) => {
  const projects = data.prismic.allProjects.edges
  const meta = data.site.siteMetadata
  if (!projects) return null

  return <Work projects={projects} meta={meta} />
}

Work.propTypes = {
  projects: PropTypes.array.isRequired,
}

export const query = graphql`
  {
    prismic {
      allProjects {
        edges {
          node {
            project_title
            project_preview_description
            project_preview_thumbnail
            project_preview_image
            project_preview_imageSharp {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            project_category
            project_post_date
            _meta {
              uid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
