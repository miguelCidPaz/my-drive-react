
export const MenuButton = ({ theme, Symbol, info, type }) => {
    return (
        type === 'search' ?
            <div className="search--main">
                <input type="text" className="search--input" placeholder="Escribe aqui para buscar" />
                <button className={`buttons--general ${theme}`}>
                    <div className="buttons--help">{info}</div>
                    <Symbol className={`buttons--symbol ${theme}`} />
                </button>
            </div>
            :
            <button
                className={`buttons--general ${theme} ${type === 'main' ? 'mainbutton--main' : 'microbutton--main'}`}>
                <div className="buttons--help">{info}</div>
                <Symbol className={`buttons--symbol ${theme} `} />
            </button>
    )
}