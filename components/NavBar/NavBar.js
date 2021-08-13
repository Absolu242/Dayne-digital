import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import menu from "../../public/assets/icons/Menublack.svg"
import menuClose from "../../public/assets/icons/Close.svg"
//local imports
import {
  NavContainer,
  NavLogo,
  NavItems,
  NavList,
  NavLink,
  NavButton,
} from "./Navbar.styles.js"
import ContactPopup from "../ContactPopup/ContactPopup"

// component data
const navItems = [
  { name: "home", link: "/" },
  { name: "services", link: "/services" },
  { name: "about", link: "/about" },
  { name: "projects", link: "/projects" },
  { name: "career", link: "/career" },
]

export default function NavBar() {
  const router = useRouter()
  const { pathname } = router

  const [Open, setOpen] = useState(false)
  const [btnClick, setBtnClick] = useState(false)
  return (
    <>
      <NavContainer>
        <NavLogo>
          <Link href='/'>
            <a>
              <p>
                Dayne<span>Digital</span>
              </p>
            </a>
          </Link>
        </NavLogo>
        <div className='menu' onClick={() => setOpen((Open) => !Open)}>
          <img src={Open ? menuClose : menu} alt='menu' />
        </div>
        <NavItems className={Open ? "open" : "close"}>
          <NavList>
            {navItems.map((item, i) => (
              <NavLink key={i}>
                <Link href={item.link}>
                  <a className={pathname === item.link ? "active" : ""}>
                    {item.name}
                  </a>
                </Link>
              </NavLink>
            ))}
          </NavList>
          <div className='btn'>
            <NavButton onClick={() => setBtnClick(true)}>Contact us</NavButton>
          </div>
        </NavItems>

        <ContactPopup btnClick={btnClick} setBtnClick={setBtnClick} />
      </NavContainer>
    </>
  )
}
