import {
  createContext,
  useContext,
  useRef,
  useState,
  ReactNode,
  Ref,
  Dispatch,
  SetStateAction,
} from "react";

type Props = {
  children: ReactNode;
};

type SwitchTheme = {
  isSwitch: boolean;
  setIsSwitch: Dispatch<SetStateAction<boolean>>;
  switchRef?: Ref<HTMLButtonElement | null>;
};

const DEFAULT_VALUES: SwitchTheme = {
  isSwitch: false,
  setIsSwitch: () => {},
};

const SwitchedContext = createContext(DEFAULT_VALUES);

export const useSwitchedContext = () => {
  return useContext(SwitchedContext);
};

export const SwitchedProvider = ({ children }: Props) => {
  const [isSwitch, setIsSwitch] = useState(false);
  const switchRef = useRef<HTMLButtonElement | null>(null);

  return (
    <SwitchedContext.Provider value={{ isSwitch, setIsSwitch, switchRef }}>
      {children}
    </SwitchedContext.Provider>
  );
};
