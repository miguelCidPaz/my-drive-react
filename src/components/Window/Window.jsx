import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import Crop32Icon from '@mui/icons-material/Crop32';
import { WindowButton } from './internal-components/WindowButton';
import { useState } from 'react';
import { useTranslation } from "react-i18next";


export const Window = ({ theme, children, id, closeWindow, title }) => {

    const [t, i18n] = useTranslation("global");

    const [maximize, setMaximize] = useState(false)
    const [minimize, setMinimize] = useState(false)

    const [diff, setDiff] = useState({ diffX: 0, diffY: 0 })
    const [drag, setDrag] = useState(false)
    const [styles, setStyles] = useState({})

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

    const dragStart = (e) => {
        if (e.target.className === 'window--options') {
            const diffX = e.currentTarget.getBoundingClientRect().left;
            const diffY = e.currentTarget.getBoundingClientRect().top;
            setDiff({ diffX, diffY })
            setDrag(true)
        }
    }

    const dragEnd = () => {
        if (drag) setDrag(false)
    }

    const dragging = (e) => {
        if (drag) {
            const left = e.screenX - diff.diffX
            const top = e.screenY - diff.diffY

            if (left < e.screenX && top < e.screenY) {
                setStyles({ top: top, left: left })
            }
        }
    }

    return (
        <section className={`window--main ${theme}`}
            style={styles}
            onMouseDown={dragStart}
            onMouseMove={dragging}
            onMouseUp={dragEnd}
            onMouseLeave={dragEnd}
        >
            <div className='window--bar'>
                <div className="window--options">
                    <p className='window--title'>{title}</p>
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