import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import Crop32Icon from '@mui/icons-material/Crop32';
import { WindowButton } from './internal-components/WindowButton';


export const Window = ({ children }) => {

    const options = [
        { info: 'Cerrar', Symbol: CloseIcon, color: "close", click: () => { } },
        { info: 'Maximizar', Symbol: Crop32Icon, color: "maximize", click: () => { } },
        { info: 'Minimizar', Symbol: MinimizeIcon, color: "minimize", click: () => { } }
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