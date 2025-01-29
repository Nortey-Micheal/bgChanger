import { BgChanger } from "./components/bgChanger"
import { Navbar } from "./components/navbar"


function App() {
  const navLinks = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Services", url: "/services" },
    { label: "Contact", url: "/contact" }
  ]

  return (
    <>
      <Navbar 
      image="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
      links={navLinks} />
      <BgChanger />
    </>
  )
}

export default App
