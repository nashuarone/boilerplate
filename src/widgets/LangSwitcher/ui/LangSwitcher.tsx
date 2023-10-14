import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";

export const LangSwitcher = () => {
    const { t, i18n } = useTranslation();

    const changeLang = () => {
        i18n.changeLanguage(
            i18n.language === 'ru' ? 'en' : 'ru'
            // switch (i18n.language) {
            //     case 'en':
            //         return 'en'
            // }
        )
    }

    return (
        <Button onClick={changeLang} theme={ThemeButton.Clear}>{t('language')}</Button>
    )
};
