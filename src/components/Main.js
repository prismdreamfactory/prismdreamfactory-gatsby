import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="vision"
          className={`${this.props.article === 'vision' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Our Vision</h2>
          <ul>
            <li>To Be True</li>
            <li>To Be Honest</li>
            <li>To Connect</li>
          </ul>
        </article>

        <article
          id="services"
          className={`${this.props.article === 'services' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Services</h2>
          <ul>
            <li>Company Website, Platform, Development, SEO</li>
            <li>Branding Decks, Graphical Assets</li>
            <li>
              Investor Decks, Investment Plans, One-Pager, Sales Decks/Pitches &
              Executive Summaries
            </li>
            <li>
              Market Strategy, Penetration Strategy & Marketing Plans,
              Advertising & Digital PR
            </li>
            <li>
              Marketing Media Content Creation: <br />
              Video/Film, Photo, Commercial Content, Viral Content, Consumer
              Education, Social Media Content, Audio Production, Company
              Graphics & Design, 3D Modeling, Product Design, Visual Effects,
              Motion Graphics, Animation
            </li>
            <li>Social Media Account Management & Growth Strategies </li>
          </ul>
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <p>
            We help clients solve business problems by fusing creativity,
            innovation, strategy, and craft.
          </p>
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <a href="mailto:dennis@prismgateway.com">dennis@prismgateway.com</a>
        </article>
        {close}
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
