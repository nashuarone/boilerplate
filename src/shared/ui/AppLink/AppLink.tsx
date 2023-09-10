import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import classNames from 'classnames';
import classes from './AppLink.module.scss';

export enum AppLinkVariant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface IAppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariant;
}

export const AppLink: FC<IAppLinkProps> = (props) => {
    const { to, children, className, variant = AppLinkVariant.PRIMARY, ...otherProps } = props;
    return (
        <Link to={to} className={classNames(classes.AppLink, className, classes[variant])} {...otherProps}>
            {children}
        </Link>
    )
};
