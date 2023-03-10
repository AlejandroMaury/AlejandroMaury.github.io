// Step 1: Import React
import * as React from 'react'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to my Gatsby site! para mi CV en tech</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <a href='https://www.gatsbyjs.com/'> Gatsby site</a>
      

      <a href='https://pages.github.com/'> github page site</a>

    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage