import "./home.scss"
import Featured from "../../components/featured/Featured"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import PropertyList from "../../components/propertyList/PropertyList"
import FeaturedPrperties from "../../components/featuredProperties/FeaturedPrperties"

const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <div className="homeContainer">
      <Featured/>
      <h2 className="hometitle">Browse by Property type</h2>
      <PropertyList/>

      <h2 className="hometitle">Home guests love</h2>
      <FeaturedPrperties/>
    </div>
    </>
  )
}

export default Home