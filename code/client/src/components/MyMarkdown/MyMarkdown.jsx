import style from "./MyMarkdown.module.scss";
import "highlight.js/styles/atom-one-dark.css";
import React, { Component } from "react";
import { Input } from "antd";
import marked, { Renderer } from "marked";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

const escapeMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
};
let escapeForHTML = (input) =>
    input.replace(/([&<>'"])/g, (char) => escapeMap[char]);
const { TextArea } = Input;

class MyMarkdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mdContent: "",
            mdTextarea: "",
        };
    }
    componentDidMount() {
        const renderer = new Renderer();
        renderer.code = (code, language) => {
            const validLang = !!(language && hljs.getLanguage(language));
            const highlighted = validLang
                ? hljs.highlight(language, code).value
                : escapeForHTML(code);
            return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
        };
        marked.setOptions({
            renderer: renderer,
            highlight: function (code) {
                return hljs.highlightAuto(code).value;
            },
            langPrefix: "hljs",
            pedantic: false,
            gfm: true,
            tables: true,
            breaks: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            xhtml: false,
        });
    }
    handleMarkdownChange(e) {
        let { value } = e.target;
        this.setState({
            mdTextarea: value,
            mdContent: value,
        });
        console.log(this.state.mdContent,this.state.mdTextarea)
    }
    render() {
        return (
            <>
                <div className={style.divMarkdown}>
                    <TextArea
                        rows={12}
                        className={style.left}
                        onChange={this.handleMarkdownChange.bind(this)}
                        value={this.state.mdTextarea}
                    />
                    <div
                        className={style.right}
                        dangerouslySetInnerHTML={{
                            __html: marked(this.state.mdContent),
                        }}
                    />
                </div>
            </>
        );
    }
}

export default MyMarkdown;
