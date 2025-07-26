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
        src={'/images/game-designers.png'}
        alt={'Game Designers'}
        className={AnimatedImage}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 3, ease: 'easeOut' }}
      />
      <motion.img
        src={'/images/game-designers-toy.png'}
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
  bg-[#f6f4f0]
  flex
  flex-col
  items-center
  justify-center
  md:px-[15px]
`

const TextWrapper = `
`

const Title = `
  font-['Suez']
  text-[50px]
  max-w-[720px]
  text-center
  mb-5
  md:text-[26px]
`

const Subtitle = `
  text-[21px]
  mb-5
  font-bold
  mt-[50px]
  text-center
  md:text-lg
`

const Text = `
  text-lg
  mb-10
  max-w-[720px]
  text-center
  md:text-base
`

const LearnMoreButton = `
  w-[142px]
  h-[60px]
  text-base
  bg-[#da392b]
  text-[#f6f4f0]
  border
  border-[#da392b]
  rounded-lg
  cursor-pointer
  text-center
  transition-all
  duration-500
  mb-10
  hover:bg-[#f6f4f0]
  hover:border-[#272443]
  hover:text-[#272443]
`

const AnimatedImage = `
  rounded-[20px]
  w-[695px]
  h-[395px]
  hover:opacity-80
  transition-opacity
  duration-500
  md:w-[95%]
  md:h-auto
`

const AnimatedToy = `
  rounded-[20px]
  mb-[70px]
  w-[229px]
  h-[246px]
  -mt-[200px]
  -ml-[650px]
  z-[100]
  lg:-mt-[100px]
  lg:ml-auto
  md:-mt-[70px]
  md:w-[160px]
  md:h-[176px]
`

export default AboutTripo
