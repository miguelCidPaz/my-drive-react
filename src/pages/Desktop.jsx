import { useState } from "react";
import { TaskBar } from "../components/TaskBar/TaskBar"

export const Desktop = ({ theme }) => {
    const [windows, setWindows] = useState([]);

    const openWindow = (id) => {
        if (windows.indexOf(id) === -1) {
            const newWindows = [...windows, id];
            setWindows(newWindows);
        }
    }

    const closeWindow = (id) => {
        const newWindows = windows.filter(e => e === id)
        setWindows(newWindows);
    }

    return (
        <main className="desktop--main">
            <section className="desktop--file-explorer">

            </section>
            <TaskBar
                theme={theme}
                openWindow={openWindow}
                closeWindow={closeWindow} />
        </main>
    )
}