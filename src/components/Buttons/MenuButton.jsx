export const MenuButton = ({ theme, Symbol, info, type }) => {
    return (
        type === 'search' ?
            <div className="search--main">
                <input type="text" className="search--input" />
                <button className={`buttons--general ${theme}`}>
                    <Symbol className={`buttons--symbol ${theme}`} />
                </button>
            </div>
            :
            <button
                className={`buttons--general ${theme} ${type === 'main' ? 'mainbutton--main' : 'microbutton--main'}`}>
                <Symbol className={`buttons--symbol ${theme}`} />
            </button>
    )
}