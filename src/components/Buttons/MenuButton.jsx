import { useTranslation } from "react-i18next";



export const MenuButton = ({ theme, Symbol, info, type, click = null }) => {

    const [t, i18n] = useTranslation("global");

    

    return (
        type === 'search' ?
            <div className="search--main">
                <input type="text" className="search--input" placeholder={t("Buttons.placeholder")} />
                <button className={`buttons--general`}>
                    <div className="buttons--help">{info}</div>
                    <Symbol className={`buttons--symbol`} />
                </button>
            </div>
            :
            <button
                className={`buttons--general ${type === 'main' ? 'mainbutton--main' : 'microbutton--main'}`}
                onClick={click}>
                <div className="buttons--help">{info}</div>
                <Symbol className={`buttons--symbol `} />
            </button>
    )
}