import React, { useEffect } from 'react'
import About_usvtwo from './About_usvtwo'
import Clients_feedback from './Clients_feedback'
// import Header from './Header'
import Story_banner from './Story_banner'
import Story_wework from './Story_wework'
import Story_whyus from './Story_whyus'
import Latest from './Latest'
import Our_team from './Our_team'


function Our_story() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
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