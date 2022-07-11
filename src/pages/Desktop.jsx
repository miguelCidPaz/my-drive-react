import { useEffect, useState, useContext } from "react";
import { TaskBar } from "../components/TaskBar/TaskBar"
import { Window } from "../components/Window/Window";
import { ConfigExplorer } from "../components/ConfigExplorer/ConfigExplorer";
import { FolderExplorer } from "../components/FolderExplorer/FolderExplorer";
import { useTranslation } from "react-i18next";
import { UserContext } from "../components/Context/userContext";
import { reconnect } from "../helpers/reconnect";

export const Desktop = ({ theme }) => {
    const [windows, setWindows] = useState([]);
    const [t, i18n] = useTranslation("global");
    const { username, token, connectSession } = useContext(UserContext)

    const openWindow = (id) => {
        if (windows.indexOf(id) === -1) {
            const newWindows = [...windows, id];
            setWindows(newWindows);
        }
    }

    const closeWindow = (id) => {
        const newWindows = windows.filter(e => e !== id)
        setWindows(newWindows);
    }

    const reviseToken = async () => {
        const localToken = localStorage.getItem('uToken')
        if (localToken) {
            const response = await reconnect(localToken)
            if (response) {
                connectSession(response, localToken)
            }
        }
    }

    const whatWindowOpen = (id) => {
        switch (id) {
            case 'config':
                return <ConfigExplorer theme={theme} />

            case 'login':
                return <ConfigExplorer id='login' theme={theme} />

            case 'explorer':
                return <FolderExplorer theme={theme} openWindow={openWindow} />

            default:
                return <FolderExplorer id={id} theme={theme} openWindow={openWindow} />
        }
    }

    useEffect(() => {

    }, [windows])

    useEffect(() => {
        reviseToken();
    }, [])

    return (
        <main className="desktop--main">
            <section className="desktop--file-explorer">

                {windows.length > 0 ? windows.map((e, i) => {
                    let WindowTitle = ''

                    if (e === 'login') {
                        WindowTitle = t("Info.account")
                    } else if (e === 'config') {
                        WindowTitle = t("Info.options")
                    } else {
                        WindowTitle = t("Info.folders")
                    }

                    return (
                        <Window theme={theme} id={e} closeWindow={closeWindow} key={i} title={WindowTitle}>
                            {whatWindowOpen(e)}
                        </Window>
                    )
                })
                    : null}

            </section>
            <TaskBar
                theme={theme}
                openWindow={openWindow}
                closeWindow={closeWindow} />
        </main>
    )
}