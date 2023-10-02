import Hero from "@components/landing_components/hero/hero"
import HeroNavbar from "@components/landing_components/navbar/heronavbar"

const Home = () => {
  return (
    <div className="flex flex-col w-full h-screen overflow-y-auto overflow-x-hidden sm:px-20 px-8">
      <HeroNavbar />
      <div className="pt-28">
      <Hero />
      </div>
      
    </div>
  )
}

export default Home
