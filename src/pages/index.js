// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'



// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Hongos"
        src="../images/Hongos.png"
      />
    </Layout>




    // <main>
    //   <h1>Welcome to my Gatsby site! para mi CV en tech</h1>
    //   <p>I'm making this by following the Gatsby Tutorial.</p>

    //   <a href='https://www.gatsbyjs.com/'> Gatsby site</a>


    //   <a href='https://pages.github.com/'> github page site</a>

    // </main>
  )
}

// You'll learn about this in the next task, just copy it for now
// export const Head = () => <title>Alejandro Arango</title>

// Step 3: Export your component
export const Head = () => <Seo title="Home Page" />
export default IndexPage