import { createContext, useContext, useState } from "react";

const UnlistedContext = createContext();

export const useUnlisted = () => useContext(UnlistedContext);

export const UnlistedProvider = ({ children }) => {
  const [selectedDetail, setSelectedDetail] = useState(null);

  return (
    <UnlistedContext.Provider value={{ selectedDetail, setSelectedDetail }}>
      {children}
    </UnlistedContext.Provider>
  );
};