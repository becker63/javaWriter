import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
//import sound from './PartyHorn.mp3'
//import { connectionModal } from "./modals"


function ConfettiAnimation() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
      const toRef = setTimeout(() => {
        setShowComponent(true);
        clearTimeout(toRef);
      }, 1000);
    
  }, []);

  useEffect(() => {
    if (showComponent) {
      const toRef = setTimeout(() => {
        setShowComponent(false);
        clearTimeout(toRef);
      }, 6000);
    }
  }, [showComponent]);

  const [windowDimenion] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });


  const componentTwo = () => {
    //var AudioPlay = new Audio (sound);
    //AudioPlay.play();
    return (
      <div>
        <connectionModal rhost="wow"></connectionModal>
        <Confetti
          width={windowDimenion.winWidth}
          height={windowDimenion.winHeight}
          on={setShowComponent}
        />
      </div>
    );
  };
  return <>{showComponent && componentTwo()}</>;
}

export default ConfettiAnimation;
