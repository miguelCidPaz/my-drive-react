import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { MenuButton } from '../Buttons/MenuButton';

import { useTranslation } from "react-i18next";


export const StartMenu = ({ theme, openWindow }) => {

    const [t, i18n] = useTranslation("global");


    const openConfig = () => {
        openWindow('config')
    }

    const openLogin = () => {
        openWindow('login')
    }

    const menuOptions = [
        { type: 'main', info: t("Info.account"), symbol: AccountCircleIcon, click: openLogin },
        { type: 'main', info: t("Info.options"), symbol: SettingsIcon, click: openConfig }
    ]

    return (
        <section className="startmenu--main">
            <section className="startmenu--icons">
                {menuOptions.map((e, i) => {
                    return (
                        <MenuButton key={i} type={e.type} info={e.info} Symbol={e.symbol} theme={theme} click={e.click} />
                    )
                })}
            </section>
            <section className="startmenu--icons">

            </section>

        </section>
    )
}