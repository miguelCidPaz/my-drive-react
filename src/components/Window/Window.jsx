import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import Crop32Icon from '@mui/icons-material/Crop32';
import { WindowButton } from './internal-components/WindowButton';
import { useState } from 'react';

export const Window = ({ children, closeWindow }) => {
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
        { info: 'Cerrar', Symbol: CloseIcon, color: "close", click: closeWindow() },
        { info: 'Maximizar', Symbol: Crop32Icon, color: "maximize", click: resizeWindow('max') },
        { info: 'Minimizar', Symbol: MinimizeIcon, color: "minimize", click: resizeWindow('min') }
    ]
    return (
        <section className="window--main">
            <div className="window--options">
                {options.map((e, i) => {
                    return <WindowButton
                        info={e.info}
                        Symbol={e.Symbol}
                        color={e.color}
                        click={e.click} />
                })}
            </div>
            {children}
        </section>
    )
}