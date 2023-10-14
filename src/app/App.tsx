import "./styles/index.scss";
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Suspense } from "react";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <Suspense fallback="translating...">
                <Navbar />
                <div className="content">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App;
