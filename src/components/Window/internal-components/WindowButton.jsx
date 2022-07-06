export const WindowButton = ({ color, info, Symbol, click }) => {

    return (
        <>
            <div className="window--button-info">{info}</div>
            <button className={`window--button window--button-${color}`}
                onClick={click}>
                <Symbol className="window--button-symbol" />
            </button>
        </>
    )
}