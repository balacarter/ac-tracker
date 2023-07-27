import React, {
  createContext, ReactNode, FC, useContext,
} from 'react';

export interface IDailyStreakContext {
  streakCount: string;
  completed: boolean;
}

type DailyStreakProviderProps = {
  value: IDailyStreakContext;
  children: ReactNode;
};

const DailyStreakContext = createContext<Partial<IDailyStreakContext>>({});

export const useDailyStreakContext = () => {
  const context = useContext(DailyStreakContext);
  if (!context) {
    throw new Error('You must use useDailyStreakContext inside its Provider');
  }
  return context;
};

const DailyStreakProvider: FC<DailyStreakProviderProps> = ({ value, children }) => <DailyStreakContext.Provider value={{ ...value }}>{children}</DailyStreakContext.Provider>;

export default DailyStreakProvider;
