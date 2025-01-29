import React, { useEffect } from 'react'
import About_usvtwo from './About_usvtwo'
import Clients_feedback from './Clients_feedback'
// import Header from './Header'
import Story_banner from './Story_banner'
import Story_wework from './Story_wework'
import Story_whyus from './Story_whyus'
import Latest from './Latest'
import Our_team from './Our_team'
import { Helmet } from "react-helmet";


function Our_story() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
    <Helmet>
        <meta name="title" content="Find Your Dream Home in Bangalore – Exclusive Listings and Expert Advice - Stanely-Estate" />
        <title>About Us - Stanley Estates</title>
        <meta
          name="description"
          content="Discover a wide range of luxury homes, condos, and apartments for sale in Bangalore. Our experienced real estate agents are here to guide you through the buying process. Start your search today and find your dream home."
        />
      </Helmet>
      <Story_banner />
      <Story_whyus />
      <About_usvtwo/>
      <Our_team />
      <Story_wework />
      {/* <Latest /> */}
      {/* <Clients_feedback /> */}
      {/* <Footer /> */}
      </>
  )
}

export default Our_story;