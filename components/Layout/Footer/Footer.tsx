import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className={FooterWrapper}>
      <div className={FooterContainer}>
        {/* Contact */}
        <div className={FooterColumn}>
          <h3 className={FooterTitle}>Contact</h3>
          <div className={FooterTextGroup}>
            <div>Info@mysite.com</div>
            <div>Tel: 123-456-7890</div>
            <div>500 Terry Francine St</div>
            <div>San Francisco, CA 94158</div>
          </div>
        </div>
        {/* Navigation */}
        <div className={FooterColumn}>
          <h3 className={FooterTitle}>Navigation</h3>
          <div className={FooterNavGroup}>
            <Link href='/games' passHref>
              <div>Games</div>
            </Link>
            <Link href='/careers' passHref>
              <div>Careers</div>
            </Link>
            <Link href='/about' passHref>
              <div>About</div>
            </Link>
            <Link href='/contact' passHref>
              <div>Contact</div>
            </Link>
          </div>
        </div>
        {/* Social */}
        <div className={FooterColumn}>
          <h3 className={FooterTitle}>Social</h3>
          <div className={FooterNavGroup}>
            <Link href='https://discord.com/' passHref>
              <div>Discord</div>
            </Link>
            <Link href='https://youtube.com/' passHref>
              <div>YouTube</div>
            </Link>
            <Link href='https://facebook.com/' passHref>
              <div>Facebook</div>
            </Link>
            <Link href='https://x.com/' passHref>
              <div>X</div>
            </Link>
          </div>
        </div>
        {/* Find Us On */}
        <div className={FooterColumn}>
          <h3 className={FooterTitle}>Find Us On</h3>
          <div className={StoreBadges}>
            <img
              className={StoreImg}
              src='/images/google-play.png'
              alt='Google Play'
            />
            <img
              className={StoreImg}
              src='/images/app-store.png'
              alt='App Store'
            />
          </div>
        </div>
      </div>
      <div className={CopyrightBar}>
        TRIPO GAMES, INC. © {new Date().getFullYear()} ALL RIGHTS RESERVED
      </div>
    </footer>
  )
}

/*---> styles <---*/
const FooterWrapper = `
  border-t border-[#e0e0e0]
  pt-12
  pb-6
  bg-[#f6f4f0]
`

const FooterContainer = `
  max-w-[1200px]
  mx-auto
  flex
  justify-between
  flex-wrap
  px-8
`

const FooterColumn = `
  min-w-[200px]
  mb-[32px]
`

const FooterTitle = `
  font-[700]
  text-[18px]
  mb-[16px]
`

const FooterTextGroup = `
  text-[#555]
  text-[15px]
  leading-[1.8]
`

const FooterNavGroup = `
  text-[#555]
  text-[15px]
  leading-[1.8]
  flex
  flex-col
`

const StoreBadges = `
  flex
  flex-col
  gap-[12px]
`

const StoreImg = `
  w-[140px]
  h-auto
  cursor-pointer
`

const CopyrightBar = `
  border-t border-[#e0e0e0]
  mt-[32px]
  pt-[16px]
  text-center
  text-[#888]
  text-[14px]
`

export default Footer
