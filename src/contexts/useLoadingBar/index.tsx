import { useState, useContext, createContext, ReactNode } from 'react';

type Props = { children: ReactNode };
export type LoadingBarProgressType = number;
export type LoadingBarProgressContextType = {
  barProgress: number;
  setLoadingBarProgress: (value: LoadingBarProgressType) => void;
};

export const loadingbarContext = createContext<LoadingBarProgressContextType | null>(null);

export function ProvideLoadingBar({ children }: Props) {
  const _loadingbar = useProvideLoadingBar();
  return <loadingbarContext.Provider value={_loadingbar}>{children}</loadingbarContext.Provider>;
}

export default function useLoadingBar() {
  return useContext(loadingbarContext);
}

function useProvideLoadingBar() {
  const [barProgress, setBarProgress] = useState<number>(0);

  const setLoadingBarProgress = (amount: number) => {
    setBarProgress(amount);
  };

  return {
    barProgress,
    setLoadingBarProgress
  };
}
