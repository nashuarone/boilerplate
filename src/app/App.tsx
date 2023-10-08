import "./styles/index.scss";
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
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
            <Navbar />
            <div className="content">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    )
}

export default App;
