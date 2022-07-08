import { useState, useEffect } from "react"

//arrows for deploy menu
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
//search
import SearchIcon from '@mui/icons-material/Search';
//folders
import FolderSharedIcon from '@mui/icons-material/FolderShared';
//hour
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
//language
import LanguageIcon from '@mui/icons-material/Language';

//button multiusos
import { MenuButton } from "../Buttons/MenuButton";
import { StartMenu } from "../StartMenu/StartMenu";

export const TaskBar = ({ theme, openWindow }) => {
    const [deploy, setDeploy] = useState(false)

    useEffect(() => {

    }, [deploy])

    const rightElements = [
        { type: 'main', info: 'Inicio', symbol: !deploy ? KeyboardArrowDownIcon : KeyboardArrowUpIcon, click: () => setDeploy(!deploy) },
        { type: 'search', info: 'Busqueda', symbol: SearchIcon },
        { type: 'main', info: 'Carpetas', symbol: FolderSharedIcon, click: () => openWindow('explorer') }
    ]

    const leftElements = [
        { type: 'micro', info: 'Hora', symbol: QueryBuilderIcon },
        { type: 'micro', info: 'Idioma', symbol: LanguageIcon }
    ]

    return (
        <section className={`taskbar--main ${theme}`}>

            {deploy ? <StartMenu
                theme={theme}
                openWindow={openWindow} /> : null}

            <div className="taskbar--internal-frame">
                {rightElements.map((e, i) => {
                    return (
                        <MenuButton key={i} type={e.type} info={e.info} Symbol={e.symbol} theme={theme} click={e.click} />
                    )
                })}
            </div>

            <div className="taskbar--internal-frame">
                {leftElements.map((e, i) => {
                    return (
                        <MenuButton key={i} type={e.type} info={e.info} Symbol={e.symbol} theme={theme} />
                    )
                })}
            </div>

        </section>
    )
}