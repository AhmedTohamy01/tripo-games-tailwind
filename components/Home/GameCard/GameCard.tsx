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
        <div className={NameCategoryWrapper}>
          <div className={Name}>{name}</div>
          <div className={Category}>{category}</div>
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
  w-[390px]
  rounded-[20px]
  bg-white
  p-[50px]
  sm:w-fit
  sm:p-5
`

const CardHeader = `
  flex
  items-center
  mb-[30px]
`

const GameIcon = `
  border-[7px]
  border-white
  w-[90px]
  h-[90px]
  rounded-[20px]
  bg-center
  bg-contain
  shadow-[7.07px_7.07px_10px_0px_rgba(237,75,64,0.1)]
  mr-5
  cursor-pointer
`

const NameCategoryWrapper = `
`

const Name = `
  text-[21px]
  font-bold
`

const Category = `
`

const CardBody = `
  mb-[30px]
`

const CardFooter = `
  flex
  items-center
  justify-between
  gap-5
`

const AppStoreIcon = `
  cursor-pointer
`

const GooglePlayIcon = `
  cursor-pointer
`

export default GameCard
