import { useState, useRef } from "react";
import OpeningInvitation from "./components/OpeningInvitation";
import RoyalHero from "./components/RoyalHero";
import FamilySection from "./components/FamilySection";
import Gallery from "./components/Gallery";
import Celebrations from "./components/Celebrations";
import Countdown from "./components/Countdown";
import Muhurtham from "./components/Muhurtham";
import Venue from "./components/Venue";
import Blessing from "./components/Blessing";
import StudioSignature from "./components/StudioSignature";
import Finale from "./components/Finale";
import FallingPetals from "./components/FallingPetals";
import MusicPlayer from "./components/MusicPlayer";
import Reveal from "./components/Reveal";

export default function App() {
  const [invitationOpened, setInvitationOpened] = useState(false);
  const audioRef = useRef(null);

  const openInvitation = async () => {
    try {
      if (audioRef.current) {
        audioRef.current.volume = 0.45;
        await audioRef.current.play();
      }
    } catch (error) {
      console.log("Music could not start:", error);
    }

    setInvitationOpened(true);
  };

  return (
    <main>
      <FallingPetals />

      <MusicPlayer audioRef={audioRef} />

      {invitationOpened ? (
        <>
          <RoyalHero />
          <FamilySection />
          <Gallery />
          <Celebrations />
          <Countdown />
          <Muhurtham />
          <Venue />
          <Blessing />
          <StudioSignature />
          <Finale />
        </>
      ) : (
        <OpeningInvitation onOpen={openInvitation} />
      )}
    </main>
  );
}