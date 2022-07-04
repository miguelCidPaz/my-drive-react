import { TaskBar } from "../components/TaskBar/TaskBar"

export const Desktop = ({ theme }) => {

    return (
        <main className="desktop--main">
            <section className="desktop--file-explorer">

            </section>
            <TaskBar theme={theme} />
        </main>
    )
}