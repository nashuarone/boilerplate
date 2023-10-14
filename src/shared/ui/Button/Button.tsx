import classNames from "classnames";
import classes from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ThemeButton {
    Clear = 'Clear',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<IButtonProps> = (props) => {
    const { className, children, theme, ...restProps } = props;

    return (
        <button
            className={classNames(classes.Button, className, {
                [classes[`Button${ThemeButton[theme]}`]]: !!ThemeButton[theme],
            })}
            {...restProps}
        >
            {children}
        </button>
    )
};