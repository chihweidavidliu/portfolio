import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import {
  faDesktop,
  faDatabase,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'
import SkillCard from '../components/SkillCard'

const DEFAULT_IMAGES = [
  {
    id: '1',
    source: full01,
    thumbnail: thumb01,
    caption: 'Photo 1',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '2',
    source: full02,
    thumbnail: thumb02,
    caption: 'Photo 2',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '3',
    source: full03,
    thumbnail: thumb03,
    caption: 'Photo 3',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '4',
    source: full04,
    thumbnail: thumb04,
    caption: 'Photo 4',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '5',
    source: full05,
    thumbnail: thumb05,
    caption: 'Photo 5',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '6',
    source: full06,
    thumbnail: thumb06,
    caption: 'Photo 6',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
]

const IntroImageWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  max-width: 1000px;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  margin-bottom: 100px;
  img:first-child {
    position: relative;
    left: 50px;
  }
  img:nth-child(2) {
    position: relative;
    top: 50px;

    z-index: 1;
  }
  img:nth-child(3) {
    position: relative;
    right: 50px;
  }
`

const StyledImage = styled.img`
  width: 100%;
  border-radius: 5px;
  box-shadow: 9px 10px 59px -19px rgba(0, 0, 0, 0.61);
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.8s;
  &:hover {
    transform: scale(1.03);
  }
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 40px;
`

const frontEndCategories = [
  {
    name: 'Fundamentals',
    content: 'HTML, CSS, Javascript',
  },
]

const backendCategories = []
const otherCategories = []

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'David Liu Web Development'
    const siteDescription = 'David Liu Web Development'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>Welcome</h2>
            </header>
            <p>
              I’m a self-taught full-stack web developer who creates beautiful,
              powerful web apps.
            </p>
            <IntroImageWrapper>
              <StyledImage
                src="https://res.cloudinary.com/dhccfu1un/image/upload/v1584202957/portfolio/taskmaster/taskmaster-thumbnail_vamjxs.png"
                alt="dashboard"
              />
              <StyledImage
                src="https://res.cloudinary.com/dhccfu1un/image/upload/v1584202941/portfolio/myinternship/myinternship-thumbnail_nvtgiz.png"
                alt="dashboard"
              />
              <StyledImage
                src="https://res.cloudinary.com/dhccfu1un/image/upload/v1584202924/portfolio/lingualink/lingualink-student-detail_mzbai1.png"
                alt="dashboard"
              />
            </IntroImageWrapper>
          </section>

          <section>
            <header>
              <h2>Skills</h2>
              <SkillsGrid>
                <SkillCard
                  title="Front End"
                  icon={faDesktop}
                  categories={frontEndCategories}
                />
                <SkillCard
                  title="Back End"
                  icon={faDatabase}
                  categories={backendCategories}
                />
                <SkillCard
                  title="Other"
                  icon={faPlusCircle}
                  categories={otherCategories}
                />
              </SkillsGrid>
            </header>
          </section>

          <section id="two">
            <h2>Recent Work</h2>

            <Gallery
              images={DEFAULT_IMAGES.map(
                ({ id, source, thumbnail, caption, description }) => ({
                  source,
                  thumbnail,
                  caption,
                  description,
                })
              )}
            />

            <ul className="actions">
              <li>
                <a href="#" className="button">
                  Full Portfolio
                </a>
              </li>
            </ul>
          </section>

          <section id="three">
            <h2>Get In Touch</h2>
            <p>
              Accumsan pellentesque commodo blandit enim arcu non at amet id
              arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi
              lorem vulputate lorem neque lorem ipsum dolor.
            </p>
            <div className="row">
              <div className="8u 12u$(small)">
                <form method="post" action="#">
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                </form>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    1234 Somewhere Rd.
                    <br />
                    Nashville, TN 00000
                    <br />
                    United States
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    000-000-0000
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="#">hello@untitled.tld</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
