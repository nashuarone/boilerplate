import classes from './Navbar.module.scss';
import { AppLink } from "shared/ui/AppLink/AppLink";

interface INavbarProps {
    className?: string;
}


export const Navbar = ({ className }: INavbarProps) => {
    return (<div className={classes.Navbar}>
        <div className={classes.NavbarLinks}>
            <AppLink to={'/'}>Main</AppLink>
            <AppLink to={'/about'}>About</AppLink>
        </div>
    </div>)
};
