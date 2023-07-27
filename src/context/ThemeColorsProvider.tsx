import React, {
  createContext, ReactNode, FC, useContext,
} from 'react';

export interface IThemeColors {
  primary: string;
  secondary: string;
}

type IThemeProviderProps = {
  value: IThemeColors;
  children: ReactNode;
};

const ThemeColorsContext = createContext<Partial<IThemeColors>>({});

export const useThemeColorsContext = () => {
  const context = useContext(ThemeColorsContext);
  if (!context) {
    throw new Error('You must use useThemeColorsContext inside its Provider');
  }
  return context;
};

const ThemeColorsProvider: FC<IThemeProviderProps> = ({ value, children }) => <ThemeColorsContext.Provider value={{ ...value }}>{children}</ThemeColorsContext.Provider>;

export default ThemeColorsProvider;
