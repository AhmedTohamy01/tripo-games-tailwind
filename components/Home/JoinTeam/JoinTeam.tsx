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
      style={{ backgroundImage: "url('/images/join-team-background.avif')" }}
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
          src='/images/join-team-img.avif'
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
  px-[15px] md:px-[50px] lg:px-[100px]
  bg-fixed
  bg-center
  bg-no-repeat
  bg-cover
  h-[670px]
  flex
  flex-col
  justify-between
`

const Title = `
  text-[26px] md:text-[50px]
  [font-family:var(--font-suez)]
  max-w-[720px]
  mb-[40px]
  text-white
`

const Subtitle = `
  text-[18px] md:text-[21px]
  mb-[20px]
  font-[700]
  mt-[50px]
  text-white
`

const TextWrapper = `
  z-[10]
`

const ImageWrapper = `
  flex
  justify-end
  mt-[-150px]
`

const ExploreButton = `
  w-[142px]
  h-[60px]
  text-base
  bg-[#fcff72]
  text-black
  border  border-[#fcff72]
  rounded-[8px]
  cursor-pointer
  text-center
  transition-all duration-500
  hover:bg-[#f6f4f0]
  hover:border-[#f6f4f0]
  hover:text-[#272443]
`

export default JoinTeam
