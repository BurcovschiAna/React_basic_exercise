import {useState} from "react";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import CardsContext from "./components/CardContext"
import Cards from "./components/Cards";
import "./App.css"
function App() {
  let [cartNumber, setCardNumber] = useState(0);  
  
  const data = {
    discount1: "90% off !!!",
    discount2: "80% off",
    img: [require("./assets/smile1.png"), 
      require("./assets/smile2.png"),
      require("./assets/smile3.png"),
      require("./assets/smile4.png"),
      require("./assets/smile5.png"),
      require("./assets/smile6.png")
     ],
    addToCart: () => setCardNumber(cartNumber + 1)

}
  return (
    <>
      <Heading cartNumber={cartNumber}/>
        <CardsContext.Provider value={{data}}>
          <Cards />
        </CardsContext.Provider>

      <Footer promo={data.discount1}/>
    </>
    
  );
}

export default App;