import { Suspense, useState } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import "./styles/index.scss";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { useTheme } from './theme/useTheme';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <br />TEXTTEXTTEXT
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPageLazy />} />
                    <Route path="/" element={<Counter />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;
