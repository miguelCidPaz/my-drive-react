import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import Crop32Icon from '@mui/icons-material/Crop32';
import { WindowButton } from './internal-components/WindowButton';
import { useState } from 'react';

export const Window = ({ children, id, closeWindow }) => {
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
        { info: 'Cerrar', Symbol: CloseIcon, color: "close", id: id, click: closeWindow },
        { info: 'Maximizar', Symbol: Crop32Icon, color: "maximize", id: 'max', click: resizeWindow },
        { info: 'Minimizar', Symbol: MinimizeIcon, color: "minimize", id: 'min', click: resizeWindow }
    ]

    return (
        <section className="window--main">
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
            <>
                {children}
            </>
        </section>
    )
}