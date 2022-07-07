export const WindowButton = ({ color, info, Symbol, click, id }) => {

    return (
        <button className={`window--button window--button-${color}`}
            onClick={() => click(id)}>
            <div className="window--button-info">{info}</div>
            <Symbol className="window--button-symbol" fontSize="30px" />
        </button>
    )
}