import { createContext, useContext } from "react"

const themeContext = createContext(null)

export default function UseContext() {
    return (
        <>
        <h4>"useContext"</h4>
        <themeContext.Provider value="dark-theme">
            <FirstChild />
        </themeContext.Provider>
        <div>-------------------------------</div>
        </>
    )
}

function FirstChild() {
    return <SecondChild />
}

function SecondChild() {
    const theme = useContext(themeContext)
    return (
        <>
            <div>{theme}</div>
        </>
    )
}