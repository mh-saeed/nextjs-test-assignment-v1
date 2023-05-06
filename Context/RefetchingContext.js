import { useState, createContext, useContext } from "react";

// Context for using and updating theme
const TriggerRefetchContext = createContext(null);

// custom hook to access & update context
export function useRefetching() {
  return useContext(TriggerRefetchContext);
}

// it works like Layout component
const RefetchProvider = ({ children }) => {
  const [triggerFetch, setTriggerFetch] = useState(false);

  function toggleFetching() {
    setTriggerFetch((prev) => !prev);
  }

  return (
    <TriggerRefetchContext.Provider value={{ triggerFetch, toggleFetching }}>
      {children}
    </TriggerRefetchContext.Provider>
  );
};

export default RefetchProvider;
