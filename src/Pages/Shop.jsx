
import Hero from "../Components/Hero"
import NewCollections from "../Components/NewCollections"
import Popular from "../Components/Popular"
import Offers from "../Components/offers"


const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      {/* <NewsLetter/> */}
      
    </div>
  )
}

export default Shop