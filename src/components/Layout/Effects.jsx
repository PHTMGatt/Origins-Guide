// src/components/Effects.jsx
import React, { createContext, useState } from 'react';

export const EffectsContext = createContext();

const EffectsProvider = ({ children }) => {
  const [showEffects, setShowEffects] = useState(true);
  const toggleEffects = () => setShowEffects(prev => !prev);

  return (
    <EffectsContext.Provider value={{ showEffects, toggleEffects }}>
      {children}
    </EffectsContext.Provider>
  );
};

export default EffectsProvider;
