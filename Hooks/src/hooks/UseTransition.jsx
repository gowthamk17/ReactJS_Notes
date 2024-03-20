import { useState, useTransition } from "react"

export default function UseTransition() {
    const [tab, setTab] = useState('about')
    const [isPending, startTransition] = useTransition()

    function selectTab(nextTab) {
        startTransition(() => {
            setTab(nextTab)
        })
    }


    return (
        <>
            <h4>"useTransition"</h4>
             <div>
                <button onClick={() => selectTab('about')}>About</button>
                <button onClick={() => selectTab('contact')}>Contact</button>
                <button onClick={() => selectTab('post')}>Post (slow)</button>
             </div>
             <div>
                {tab === 'about' && <About />}
                {tab === 'contact' && <Contact />}
                {tab === 'post' && <Post />}
             </div>
            <div>-------------------------------</div>
        </>
    )
}

const About = () => <p>About</p>
const Contact = () => <p>Contact</p>
const Post = () => {
    let posts = []
    for (let i = 0; i < 10; i++) {
        delay(100)
        posts.push(<p key={i}>Post #{i}</p>)
    }
    return (
        <>
            {posts}
        </>
    )
}


function delay(ms) {
    const start = new Date().getTime()
    let end = start
    while (end < start + ms) {
        end = new Date().getTime()
    }
}