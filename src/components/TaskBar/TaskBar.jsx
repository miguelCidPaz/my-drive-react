import { useState } from "react"

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

export const TaskBar = ({ theme }) => {
    const [deploy, setDeploy] = useState(false)

    const rightElements = [
        { type: 'main', info: 'Inicio', symbol: !deploy ? KeyboardArrowDownIcon : KeyboardArrowUpIcon },
        { type: 'search', info: 'Busqueda', symbol: SearchIcon },
        { type: 'main', info: 'Carpetas', symbol: FolderSharedIcon }
    ]

    const leftElements = [
        { type: 'micro', info: 'Hora', symbol: QueryBuilderIcon },
        { type: 'micro', info: 'Idioma', symbol: LanguageIcon }
    ]

    return (
        <section className={`taskbar--main ${theme}`}>
            <div className="taskbar--internal-frame">
                {rightElements.map((e, i) => {
                    return (
                        <MenuButton type={e.type} info={e.info} Symbol={e.symbol} theme={theme} />
                    )
                })}
            </div>
            <div className="taskbar--internal-frame">
                {leftElements.map((e, i) => {
                    return (
                        <MenuButton type={e.type} info={e.info} Symbol={e.symbol} theme={theme} />
                    )
                })}
            </div>
        </section>
    )
}