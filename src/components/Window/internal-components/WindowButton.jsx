export const WindowButton = ({ color, info, Symbol, click, id }) => {

    return (
        <>
            <div className="window--button-info">{info}</div>
            <button className={`window--button window--button-${color}`}
                onClick={() => click(id)}>
                <Symbol className="window--button-symbol" />
            </button>
        </>
    )
}