import React, { createContext, useRef, useContext } from 'react';

const Context = createContext();

export const AppContext = ({ children }) => {
  const sectionRefs = useRef({});
  const sectionsRefs = useRef({});

  const scrollToSection = (section) => {
    sectionRefs.current[section]?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollTotheSection = (section) => {
    sectionsRefs.current[section]?.scrollIntoView({ behavior: 'smooth' });
  };
const bundle={
    sectionRefs, scrollToSection ,
    sectionsRefs, scrollTotheSection 
}
  return (
    <Context.Provider value={bundle}>
      {children}
    </Context.Provider>
  );
};

export const useScroll = () => useContext(Context);