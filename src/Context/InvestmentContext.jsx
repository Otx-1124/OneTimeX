import { createContext, useContext, useState } from "react";

const InvestmentContext = createContext();

export const useInvestment = () => useContext(InvestmentContext);

export const InvestmentProvider = ({ children }) => {
  const [selectedDetail, setSelectedDetail] = useState(null);

  return (
    <InvestmentContext.Provider value={{ selectedDetail, setSelectedDetail }}>
      {children}
    </InvestmentContext.Provider>
  );
};
