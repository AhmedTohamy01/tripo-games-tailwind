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
  h-[300px] md:h-[500px] lg:h-[800px]
  mt-[-30px] lg:mt-[-60px]
  border
  border-transparent
  bg-[url('/images/main-background.jpg')]
  bg-no-repeat
  bg-center
  bg-cover
  relative
  overflow-hidden
  z-0
`

const ContentWrapper = `
  mt-[100px] lg:mt-[170px]
  ml-[20px] md:ml-[40px] lg:ml-[100px]
`

const Title = `
  text-[30px] md:text-[50px] lg:text-[80px]
  [font-family:var(--font-suez)]
`

const Subtitle = `
  text-[16px] md:text-[20px] lg:text-[24px]
  mb-[20px]
`

const AppStoesWrapper = `
  flex
  items-center
  gap-[20px]
`

const AppleStore = `
  h-[35px] md:h-[40px]
  w-[105px] md:w-[120px]
  cursor-pointer
`

const GooglePlayStore = `
  h-[35px] md:h-[40px]
  w-[117px] md:w-[137px]
  cursor-pointer
`

export default MainContent
