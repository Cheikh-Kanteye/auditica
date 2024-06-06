import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type GlobalStateContextType = {
  openSidebar: boolean;
  openPlayer: boolean;
  toggleSidebar: () => void;
  togglePlayer: () => void;
};

const initialState = {
  openSidebar: true,
  openPlayer: true,
  toggleSidebar: () => {},
  togglePlayer: () => {},
};

const GlobalStateContext =
  React.createContext<GlobalStateContextType>(initialState);

const GlobalStateProvider = ({ children }: PropsWithChildren) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openPlayer, setOpenPlayer] = useState(false);
  const toggleSidebar = () => {
    setOpenSidebar((prev) => !prev);
  };
  const togglePlayer = () => {
    setOpenPlayer((prev) => !prev);
  };

  const value = useMemo(
    () => ({
      openSidebar,
      openPlayer,
      toggleSidebar,
      togglePlayer,
    }),
    [openPlayer, openSidebar]
  );

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;

export const useGlobaleState = () => useContext(GlobalStateContext);
