import { useState, useEffect } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import raw from './static/README.md'

const Home = () => {
    const [markdown, setMarkDown] = useState('');
    useEffect(() => {
        fetch(raw)
        .then(r => r.text())
        .then(text => {
            setMarkDown(text);
        })
    }, []);
    
    return (
        <div class='mt-3 mx-3 text-start'>
            <ReactMarkdown
                components={{img: ({node, ...props}) => <img style={{maxWidth: '100%'}}{...props} alt=""/>}}
            >{markdown.split("<br />").join("\n")}</ReactMarkdown>
        </div>
    );
};

export default Home;