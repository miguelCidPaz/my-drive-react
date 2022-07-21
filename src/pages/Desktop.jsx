import { useEffect, useState, useContext } from "react";
import { TaskBar } from "../components/TaskBar/TaskBar"
import { Window } from "../components/Window/Window";
import { ConfigExplorer } from "../components/ConfigExplorer/ConfigExplorer";
import { FolderExplorer } from "../components/FolderExplorer/FolderExplorer";
import { useTranslation } from "react-i18next";
import { UserContext } from "../components/Context/userContext";
import { reconnect } from "../helpers/reconnect";

export const Desktop = ({ theme, changeTheme }) => {
    const [windows, setWindows] = useState([]);
    const [t, i18n] = useTranslation("global");
    const { username, token, connectSession } = useContext(UserContext)

    const openWindow = (id, foldername) => {
        if (windows.indexOf({ id: id, foldername: foldername }) === -1) {
            const newWindows = [...windows, { id: id, foldername: foldername }];
            setWindows(newWindows);
        }
    }

    const closeWindow = (id) => {
        const newWindows = windows.filter(e => e.id !== id)
        setWindows(newWindows);
    }

    const reviseToken = async () => {
        const localToken = localStorage.getItem('uToken')
        if (localToken) {
            const response = await reconnect(localToken)
            if (response) {
                const myUser = {
                    id: response.id,
                    name: response.username
                }
                connectSession(myUser, localToken)
            }
        }
    }

    const whatWindowOpen = (id) => {
        switch (id) {
            case 'config':
                return <ConfigExplorer theme={theme} changeTheme={changeTheme} />

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
                    let WindowTitle = e.foldername === undefined ? '' : e.foldername

                    if (WindowTitle.length < 1) {
                        if (e === 'login') {
                            WindowTitle = t("Info.account")
                        } else if (e === 'config') {
                            WindowTitle = t("Info.options")
                        } else {
                            WindowTitle = t("Info.folders")
                        }
                    }

                    return (
                        <Window theme={theme} id={e.id} closeWindow={closeWindow} key={i} title={WindowTitle}>
                            {whatWindowOpen(e.id)}
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