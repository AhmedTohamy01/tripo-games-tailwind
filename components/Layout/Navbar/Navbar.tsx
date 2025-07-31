'use client'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MenuOutlined } from '@ant-design/icons'
import { CloseOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { Button } from 'antd'

/*---> Component <---*/
function Navbar() {
  const [scrollY, setScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const ref = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <motion.div
      ref={ref}
      className={MainWrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: 'easeOut' }}
      style={{
        opacity: scrollY > 100 ? 0 : 1,
        transform: scrollY > 100 ? 'translateY(-20px)' : 'translateY(0)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
        willChange: 'opacity, transform',
      }}
    >
      <div className={Logo}>Tripo Games</div>
      <div className={NavLinksWrapper}>
        <div className={HomeLink}>Home</div>
        <div className={OtherLink}>Games</div>
        <div className={OtherLink}>Careers</div>
        <div className={OtherLink}>About</div>
        <div className={ContactLink}>Contact</div>
      </div>
      <div className={MobileMenuWrapper} onClick={toggleMenu}>
        <MenuOutlined className={StyledMenuIcon} />
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <div
            ref={menuRef}
            className={MobileMenuOverlay}
            onClick={(e: { target: any; currentTarget: any }) => {
              if (e.target === e.currentTarget) {
                setIsMenuOpen(false)
              }
            }}
          >
            <div className={MobileMenuContent}>
              <div className={MobileMenuHeader}>
                <Link href={'/'} onClick={() => setIsMenuOpen(false)}>
                  <div className={Logo}>Tripo Games</div>
                </Link>
                <button className={CloseButton} onClick={toggleMenu}>
                  <CloseOutlined />
                </button>
              </div>
              <div className={MobileNavLinks}>
                <div
                  className={MobileNavLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Games
                </div>
                <div
                  className={MobileNavLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Careers
                </div>
                <div
                  className={MobileNavLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </div>
                <div
                  className={MobileNavLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/*---> styles <---*/
const MainWrapper = `
  px-[20px] md:px-[40px] lg:px-[100px]
  h-[60px]
  flex
  items-center
  justify-between
  absolute
  top-0
  left-0
  right-0
  z-10
  bg-transparent
  lg:px-10
  md:px-5
  md:opacity-100
  md:transform-none
  md:transition-none
`

const Logo = `
  w-[170px]
  bg-[#da392b]
  text-[26px]
  text-white
  flex
  items-center
  justify-center
  h-full
  rounded-b-[10px]
  [font-family:var(--font-kaushan)]
`

const NavLinksWrapper = `
  h-full
  hidden
  lg:flex
  lg:items-center
`

const HomeLink = `
  text-white
  bg-[#da392b]
  rounded-bl-[10px]
  w-[105px]
  h-full
  flex
  items-center
  justify-center
  cursor-pointer
`

const OtherLink = `
  bg-white
  w-[105px]
  h-full
  flex
  items-center
  justify-center
  cursor-pointer
  hover:bg-[#da392b]
  hover:text-white
  transition-all
  duration-500
`

const ContactLink = `
  bg-white
  w-[105px]
  h-full
  flex
  items-center
  justify-center
  cursor-pointer
  rounded-br-[10px]
  hover:bg-[#da392b]
  hover:text-white
  transition-all
  duration-500
`

const MobileMenuWrapper = `
  bg-white
  flex
  items-center
  justify-center
  w-fit
  h-full
  rounded-b-[10px]
  px-5
  cursor-pointer
  lg:hidden
`

const StyledMenuIcon = `
  text-[30px]
  !text-[#da392b]
`

const MobileMenuOverlay = `
  fixed
  top-0
  right-0
  w-full
  h-screen
  bg-white/80
  z-[1000]
  backdrop-blur-sm
  xl:hidden
`

const MobileMenuContent = `
  absolute
  top-0
  right-0
  w-[300px]
  h-screen
  bg-[#f5f5f5]
  p-5
  flex
  flex-col
`

const MobileMenuHeader = `
  flex
  justify-between
  items-center
  mb-10
  pb-5
  border-b
  border-white/10
`

const CloseButton = `
  bg-transparent
  border-none
  text-[#222]
  cursor-pointer
  p-2
  rounded
  transition-colors
  duration-300
  hover:bg-black/5
`

const MobileNavLinks = `
  flex
  flex-col
  gap-5
  mb-10
  -mt-5
`

const MobileNavLink = `
  text-[#222]
  text-lg
  font-medium
  cursor-pointer
  py-3
  border-b
  border-black/8
  transition-colors
  duration-300
  hover:text-[#da392b]
`

export default Navbar
