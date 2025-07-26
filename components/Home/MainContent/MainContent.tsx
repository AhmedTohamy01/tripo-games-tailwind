'use client'
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

/*---> Component <---*/
function MainContent() {
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      // Image width is 1621px, subtract current viewport width
      const imageWidth = 1621
      const screenWidth = window.innerWidth
      const maxScrollX = Math.max(0, imageWidth - screenWidth)

      // Scroll left, but don't go beyond image edge
      const offsetX = Math.min(scrollY * 0.5, maxScrollX)

      if (backgroundRef.current) {
        backgroundRef.current.style.backgroundPosition = `-${offsetX}px center`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div ref={backgroundRef} className={MainWrapper}>
      <div className={ContentWrapper}>
        <div className={Title}>Made to Be Played</div>
        <div className={Subtitle}>The Very Best in Mobile Gaming</div>
        <div className={AppStoesWrapper}>
          <img
            src={'/images/app-store.png'}
            alt={'App Store Logo'}
            className={AppleStore}
          />
          <img
            src={'/images/google-play.png'}
            alt={'Google Play Logo'}
            className={GooglePlayStore}
          />
        </div>
      </div>
    </motion.div>
  )
}

/*---> styles <---*/
const MainWrapper = `
  border
  border-transparent
  bg-[url('/images/main-background.jpg')]
  bg-no-repeat
  bg-center
  bg-cover
  h-[800px]
  -mt-[60px]
  relative
  overflow-hidden
  z-0
  lg:h-[500px]
  lg:-mt-[30px]
  md:h-[300px]
`

const ContentWrapper = `
  mt-[170px]
  ml-[100px]
  lg:mt-[100px]
  lg:ml-10
  md:mt-[100px]
  md:ml-5
`

const Title = `
  font-['Suez']
  text-[80px]
  lg:text-[50px]
  md:text-[30px]
`

const Subtitle = `
  text-2xl
  mb-5
  lg:text-xl
  md:text-base
`

const AppStoesWrapper = `
`

const AppleStore = `
  mr-5
  cursor-pointer
  w-[120px]
  h-10
  md:w-[105px]
  md:h-[35px]
`

const GooglePlayStore = `
  mr-5
  cursor-pointer
  w-[137px]
  h-10
  md:w-[117px]
  md:h-[35px]
`

export default MainContent
