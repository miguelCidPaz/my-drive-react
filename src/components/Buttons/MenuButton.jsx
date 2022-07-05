
export const MenuButton = ({ theme, Symbol, info, type, click = null }) => {
    return (
        type === 'search' ?
            <div className="search--main">
                <input type="text" className="search--input" placeholder="Escribe aqui para buscar" />
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