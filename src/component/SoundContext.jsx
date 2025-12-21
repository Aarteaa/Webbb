import { createContext, useContext, useState } from "react";

const SoundContext = createContext();

export const SoundProvider = ({ children }) => {
  const [soundOn, setSoundOn] = useState(true);

  return (
    <SoundContext.Provider value={{ soundOn, setSoundOn }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => useContext(SoundContext);
