import { useState } from 'react';
import classes from './Sidebar.module.scss';
import classNames from 'classnames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';

interface ISidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: ISidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(classes.Sidebar, className, {
            [classes.SidebarCollapsed]: collapsed,
        })}>
            <button onClick={onToggle}>toggle</button>
            <div className={classes.SidebarSwitchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
};