'use client'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/*---> Component <---*/
function JoinTeam() {
  const ref = useRef(null)
  const imageRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className={MainWrapper}
      style={{ backgroundImage: "url('/images/join-team-background.png')" }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 2, ease: 'easeOut' }}
    >
      <div className={TextWrapper}>
        <div className={Subtitle}>Join Our Team</div>
        <div className={Title}>
          It takes the world's best talent to change the game.
        </div>
        <button className={ExploreButton}>Explore Careers</button>
      </div>
      <motion.div
        ref={imageRef}
        className={ImageWrapper}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <Image
          src='/images/join-team-img.png'
          width={400}
          height={340}
          alt='join team image'
        />
      </motion.div>
    </motion.div>
  )
}

/*---> styles <---*/
const MainWrapper = `
  bg-center
  bg-no-repeat
  bg-cover
  h-[670px]
  px-[100px]
  flex
  flex-col
  justify-between
  lg:px-[50px]
  md:px-[15px]
`

const Title = `
  font-['Suez']
  text-[50px]
  max-w-[720px]
  mb-10
  text-white
  md:text-[26px]
`

const Subtitle = `
  text-[21px]
  mb-5
  font-bold
  mt-[50px]
  text-white
  md:text-lg
`

const TextWrapper = `
  z-[10]
`

const ImageWrapper = `
  flex
  justify-end
  -mt-[150px]
`

const ExploreButton = `
  w-[142px]
  h-[60px]
  text-base
  bg-[#fcff72]
  text-black
  border
  border-[#fcff72]
  rounded-lg
  cursor-pointer
  text-center
  transition-all
  duration-500
  hover:bg-[#f6f4f0]
  hover:border-[#f6f4f0]
  hover:text-[#272443]
`

export default JoinTeam
