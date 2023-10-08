import { Theme, useTheme } from 'app/providers/ThemeProvider';
import classes from './ThemeSwitcher.module.scss';
import SunIcon from 'shared/assets/icons/sun.svg';
import MoonIcon from 'shared/assets/icons/moon.svg';

interface IThemeSwitcherProps {
    className?: string;
}


export const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className={classes.ThemeSwitcher}>
            {theme === Theme.DARK ? <SunIcon /> : <MoonIcon />}
        </button>
    );
};
