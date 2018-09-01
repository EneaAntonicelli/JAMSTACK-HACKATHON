import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hello Everyone</h1>
    <p>My name is Enea Antonicelli, and I am fairly new to coding. I am currently attending the UC Davis Coding Bootcamp and working on applying the express framework with node.js, handlebars, and mySQL.</p>
    <p>I am looking forward to attending this hackathon and am hoping to to secure a seat. I believe there will be some inspring exposure that might narrow my career path decisions.</p>
    <Link to="/page-2/">next</Link>
  </div>
)

export default IndexPage
