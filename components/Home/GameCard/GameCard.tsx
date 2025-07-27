'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/*---> Types <---*/
type PropsType = {
  imageUrl: string
  name: string
  category: string
  description: string
}

/*---> Component <---*/
function GameCard({ imageUrl, name, category, description }: PropsType) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className={MainWrapper}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 2, ease: 'easeOut' }}
    >
      <div className={CardHeader}>
        <div
          className={GameIcon}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div>
          <div className={Name}>{name}</div>
          <div>{category}</div>
        </div>
      </div>
      <div className={CardBody}>{description}</div>
      <div className={CardFooter}>
        <img
          src={'/images/app-store.png'}
          alt={'Apple Store Icon'}
          className={AppStoreIcon}
        />
        <img
          src={'/images/google-play.png'}
          alt={'Google Play Icon'}
          className={GooglePlayIcon}
        />
      </div>
    </motion.div>
  )
}

/*---> styles <---*/
const MainWrapper = `
  p-[20px] sm:p-[50px]
  w-fit sm:w-[390px]
  rounded-[20px]
  bg-white
`

const CardHeader = `
  flex
  items-center
  mb-[30px]
`

const GameIcon = `
  border-[7px] border-white
  w-[90px]
  h-[90px]
  rounded-[20px]
  bg-center
  bg-contain
  shadow-[7.07px_7.07px_10px_0px_rgba(237,75,64,0.1)]
  mr-[20px]
  cursor-pointer
`

const Name = `
  text-[21px]
  font-[700]
`

const CardBody = `
  mb-[30px]
`

const CardFooter = `
  flex
  items-center
  justify-between
  gap-[20px]
`

const AppStoreIcon = `
  cursor-pointer
`

const GooglePlayIcon = `
  cursor-pointer
`

export default GameCard
