'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/*---> Component <---*/
function AboutTripo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div className={MainWrapper}>
      <motion.div
        ref={ref}
        className={TextWrapper}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <div className={Subtitle}>About Tripo</div>
        <div className={Title}>Your Source for Mobile Entertainment</div>
        <div className={Text}>
          I'm a paragraph. Click here to add your own text and edit me. It's
          easy. Just click "Edit Text" or double click me to add your own
          content and make changes to the font. I'm a great place for you to
          tell a story and let your users know a little more about you.
        </div>
      </motion.div>
      <button className={LearnMoreButton}>Learn More</button>
      <motion.img
        src={'/images/game-designers.avif'}
        alt={'Game Designers'}
        className={AnimatedImage}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 3, ease: 'easeOut' }}
      />
      <motion.img
        src={'/images/game-designers-toy.avif'}
        alt={'Game Designers Toy'}
        className={AnimatedToy}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 3, ease: 'easeOut' }}
      />
    </div>
  )
}

/*---> styles <---*/
const MainWrapper = `
  px-[15px] md:px-[0px]
  bg-[#f6f4f0]
  flex
  flex-col
  items-center
  justify-center
`

const TextWrapper = `
`

const Title = `
  text-[26px] md:text-[50px]
  max-w-[720px]
  text-center
  mb-[20px]
  [font-family:var(--font-suez)]
`

const Subtitle = `
  text-[18px] md:text-[21px]
  mb-[20px]
  font-[700]
  mt-[50px]
  text-center
`

const Text = `
  text-[16px] md:text-[18px]
  mb-[40px]
  max-w-[720px]
  text-center
`

const LearnMoreButton = `
  w-[142px]
  h-[60px]
  text-base
  bg-[#da392b]
  text-[#f6f4f0]
  border
  border-[#da392b]
  rounded-[8px]
  cursor-pointer
  text-center
  transition-all duration-500
  mb-[40px]
  hover:bg-[#f6f4f0]
  hover:border-[#272443]
  hover:text-[#272443]
`

const AnimatedImage = `
  w-[95%] md:w-[695px]
  h-auto md:h-[395px]
  rounded-[20px]
  hover:opacity-80
  transition-opacity duration-500
`

const AnimatedToy = `
  w-[160px] md:w-[229px]
  h-[176px] md:h-[246px]
  mt-[-70px] md:mt-[-100px] md:lg-[-200px]
  ml-[0px] xl:ml-[-650px]
  rounded-[20px]
  mb-[70px]
  z-[100]
`

export default AboutTripo
