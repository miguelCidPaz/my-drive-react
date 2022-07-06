import { useEffect, useState } from "react";
import { TaskBar } from "../components/TaskBar/TaskBar"
import { Window } from "../components/Window/Window";
import { ConfigExplorer } from "../components/ConfigExplorer/ConfigExplorer";
import { FolderExplorer } from "../components/FolderExplorer/FolderExplorer";

export const Desktop = ({ theme }) => {
    const [windows, setWindows] = useState([]);

    const whatWindowOpen = (id) => {
        switch (id) {
            case 'config':
                return <ConfigExplorer />

            case 'explorer':
                return <FolderExplorer />

            default:
                return <FolderExplorer id={id} />
        }
    }

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


    useEffect(() => {

    }, [windows])

    return (
        <main className="desktop--main">
            <section className="desktop--file-explorer">

                {windows.length > 0 ? windows.map((e, i) => {
                    return (
                        <Window theme={theme} id={e} closeWindow={closeWindow} key={i}>
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