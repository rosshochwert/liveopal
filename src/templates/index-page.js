import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import groupSalons from '../img/group-therapy.png'
import meditation from '../img/meditation.png'
import zen from '../img/zen.png'


export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div style={{height:'50px'}}></div>
        <div className="backgroundImage" style={{height:700}}>
           <div className="container d-flex align-items-center h-100" style={{maxWidth: 1200}}>
              <div className="row">
                 <div className="col-12">
                    <div id="intro">
                       <div className="ml6">
                          We're on a mission to create
                          <div className="heroWord">
                             <div className="text-wrapper"><span className="letters"></span></div>
                          </div>
                       </div>
                    </div>
                    <div className="descriptionText">
                       Opal is a <b>physical space</b> designed to support each individual’s mental wellness journey 
                       <div className="joinSection">
                          <br />
                          <button className="btn joinButton"><a className="topJoin" href="/#join">Join Now</a></button>
                       </div>
                    </div>
                    <div className="col-2">
                    </div>
                 </div>
              </div>
           </div>
        </div>
        <div className="backgroundImageWhy">
           <div style={{height:32}} id="why"></div>
           <div className="container" style={{maxWidth: 1200}}>
              <h1 className="whyOpal"><b>Why Opal?</b></h1>
              <div className="opalDifferent">
                Mental wellness looks different for everyone. Maybe you want a quiet place for quiet reflection; maybe you want a space to share experiences with peers. <br /><br />Opal lets <b>you choose your path</b> to mental wellness. 
              </div>

            </div>
            <div style={{height:72}}  id="offer"></div>
        </div>
        <div style={{backgroundColor: '#f8f9fa'}}>
          <div style={{height:'32px'}}></div>
          <div className="container" style={{maxWidth: '1400px'}}>
             <h1 className="opalDifCenter"><b>What Makes Opal Different?</b></h1>
              <div className="row" style={{paddingLeft: '40px', paddingRight: '40px'}}>
                 <div className="col-md-4 col-xs-12 h-100">
                    <div className="mx-auto middleImage">
                       <img src={groupSalons} className="img-fluid" />
                    </div>
                    <br/>
                    <div>
                       <h4 className="offerTitles">Group Salons</h4>
                    </div>
                    <br/>
                    <div>
                       <h5 className="centerText">Share your mental wellness experiences, connect with one another and provide / receive support</h5>
                    </div>
                    <div className="mobilePadding"></div>
                 </div>
                 <div className="col-md-4 col-xs-12 h-100">
                    <div className="mx-auto middleImage">
                       <img src={zen} className="img-fluid" />
                    </div>
                    <br />
                    <div>
                       <h4 className="offerTitles">Individual Wellness Rooms</h4>
                    </div>
                    <br/>
                    <h5 className="centerText">Simply be alone, or practice individual relaxation techniques (e.g. meditation, breathwork, yoga)</h5>
                    <div className="mobilePadding"></div>
                 </div>
                 <div className="col-md-4 col-xs-12">
                    <div className="mx-auto middleImage">
                       <img src={meditation} className="img-fluid"/>
                    </div>
                    <br />
                    <div>
                       <h4 className="offerTitles">Wellness and Resiliency Workshops</h4>
                    </div>
                    <br/>
                    <h5 className="centerText">Mindfulness meditation, breathwork and resiliency training are just some of our offerings.</h5>
                    <div className="mobilePadding"></div>
                 </div>
              </div>
            </div>
              <div style={{height:'64px'}}></div>
           </div>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
