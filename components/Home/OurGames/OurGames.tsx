'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import GameCard from '../GameCard/GameCard'

/*---> Component <---*/
function OurGames() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div className={MainWrapper}>
      <motion.div
        ref={ref}
        className={TextWrapper}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <div className={Title}>Our Games</div>
        <div className={Text}>
          I'm a paragraph. Click here to add your own text and edit me. I'm a
          great place for you to tell a story and let your users know a little
          more about you.
        </div>
      </motion.div>
      <div className={ContentWrapper}>
        <div className={FirstRowGames}>
          <GameCard
            imageUrl={'/images/kipon-icon.png'}
            name={'Kipon'}
            category={'Casual - Free'}
            description={`I'm a paragraph. Click here to add your own text and edit me. I'm a great place for you to tell a story and let your users know a little more about you.`}
          />
          <GameCard
            imageUrl={'/images/robotrix-icon.png'}
            name={'Robotrix'}
            category={'RPG - Free'}
            description={`I'm a paragraph. Click here to add your own text and edit me. I'm a great place for you to tell a story and let your users know a little more about you.`}
          />
        </div>
        <div className={SecondRowGames}>
          <GameCard
            imageUrl={'/images/treasure-box-icon.png'}
            name={'Treasure Box'}
            category={'Adventure - Free'}
            description={`I'm a paragraph. Click here to add your own text and edit me. I'm a great place for you to tell a story and let your users know a little more about you.`}
          />
          <div className={OurGamesIconWrapper}>
            <motion.img
              src={'/images/games-icon.png'}
              alt={'Games Icon'}
              className={OurGamesIcon}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 2, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>
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
  pb-[100px]
  overflow-hidden
  md:px-[15px]
  md:-mt-[50px]
`

const TextWrapper = `
  mb-[100px]
  sm:mb-[50px]
`

const ContentWrapper = `
  bg-[url('/images/games-bg.png')]
  bg-no-repeat
  bg-center
  bg-cover
  w-full
  h-fit
  min-h-[1300px]
  max-w-[1800px]
`

const Title = `
  font-['Suez']
  text-[50px]
  max-w-[720px]
  text-center
  mb-5
  md:text-[26px]
`

const Text = `
  text-lg
  mb-10
  max-w-[720px]
  text-center
  md:text-base
`

const FirstRowGames = `
  flex
  justify-between
  z-[100]
  px-[160px]
  mb-[450px]
  xl:flex-col
  xl:gap-[30px]
  xl:mb-[30px]
  xl:items-center
  xl:justify-center
`

const SecondRowGames = `
  flex
  justify-between
  z-[100]
  px-[160px]
  xl:flex-col
  xl:gap-[30px]
  xl:items-center
  xl:justify-center
`

const OurGamesIconWrapper = `
  h-[390px]
  w-[390px]
  flex
  items-center
  justify-center
`

const OurGamesIcon = `
  w-[275px]
  h-[300px]
`

export default OurGames
