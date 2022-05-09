import Card from "./components/Card";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import { useState } from "react";
import scranArray from "./scranArray";
import "./styles.css";

function App() {
  const [imgIndex, setImageIndex] = useState(0);
  const [sideMenu, setSideMenu] = useState(false);

  function handleClick() {
    setImageIndex(() => imgIndex + 1);
  }

  function openSideMenu(){
    setSideMenu(true);
    if(sideMenu === true) {
      setSideMenu(false);
    }
  }


  function renderNextCard(arr, index) {
    if (imgIndex >= scranArray.length) {
      return (
        <>
          <h1>
            Acabaram as Cartas. Aqui pode ser um component similar ao card, mas
            avisando que as opções acabaram
          </h1>
        </>
      );
    }

    return (
      <Card
        name={arr[index].name}
        img={arr[index].img}
        title={arr[index].title}
        currency={arr[index].currency}
        price={arr[index].price}
        location={arr[index].location}
        source-Link={arr[index].source}
        nxtImg ={handleClick}
      />
    );
  }

  return (
    <div className="App">
      <Header openMenu={openSideMenu} />
      {sideMenu? <SideMenu /> : null}
      <div className="card-container">
        {renderNextCard(scranArray, imgIndex)}
      </div>
    </div>
  );
}

export default App;
