import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import Crop32Icon from '@mui/icons-material/Crop32';
import { WindowButton } from './internal-components/WindowButton';
import { useState } from 'react';
import { useTranslation } from "react-i18next";


export const Window = ({ theme, children, id, closeWindow }) => {

    const [t, i18n] = useTranslation("global");

    const [maximize, setMaximize] = useState(false)
    const [minimize, setMinimize] = useState(false)

    const resizeWindow = (option) => {
        if (option === 'max') {
            if (!minimize) {
                setMaximize(!maximize)
            }
        }

        if (option === 'min') {
            if (!maximize) {
                setMinimize(!minimize)
            }
        }
    }

    const options = [
        { info: t("Info.close"), Symbol: CloseIcon, color: "close", id: id, click: closeWindow },
        { info: t("Info.maximize"), Symbol: Crop32Icon, color: "maximize", id: 'max', click: resizeWindow },
        { info: t("Info.minimize"), Symbol: MinimizeIcon, color: "minimize", id: 'min', click: resizeWindow }
    ]

    return (
        <section className={`window--main ${theme}`}>
            <div className='window--bar'>
                <div className="window--options">
                    <p className='window--title'>Configuracion</p>
                </div>
                <div className="window--options">
                    {options.map((e, i) => {
                        return <WindowButton
                            key={i}
                            info={e.info}
                            Symbol={e.Symbol}
                            color={e.color}
                            click={e.click}
                            id={e.id}
                        />
                    })}
                </div>
            </div>
            <>
                {children}
            </>
        </section>
    )
}