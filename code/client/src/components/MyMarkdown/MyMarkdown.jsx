import style from "./MyMarkdown.module.scss";
import "highlight.js/styles/atom-one-dark.css";
import React, { Component } from "react";
import { Input } from "antd";
import marked, { Renderer } from "marked";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

const { TextArea } = Input;

const escapeMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
};
// 将需要转换的字符通过上面 escapeMap 的枚举进行转换
let escapeForHTML = (input) =>
    input.replace(/([&<>'"])/g, (char) => escapeMap[char]);

/**
 * Marked + highlight 形成左书写右预览两栏的 md 组件
 *
 * @class MyMarkdown
 * @extends {Component}
 */
class MyMarkdown extends Component {
    constructor(props) {
        super(props);
        let { mdTextarea,mdContent } = this.props;
        this.state = {
            mdContent: mdTextarea ?marked(mdTextarea) : "",
            mdTextarea: mdTextarea ? mdTextarea : "",
        };
    }
    /**
     * 对 marked 进行的一些配置
     * @memberof MyMarkdown
     */
    componentDidMount() {
        const renderer = new Renderer();
        renderer.code = (code, language) => {
            // 检测是否存在语言
            const validLang = !!(language && hljs.getLanguage(language));
            // 如果语言存在，则 highlighted 为 HTML 高亮字符串，否则为转换后的特殊字符
            const highlighted = validLang
                ? hljs.highlight(language, code).value
                : escapeForHTML(code);
            // 使用 <pre></pre> 标签转为 HTML
            // 同时加上 class="hljs 属性使得代码大块能够有背景
            return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
        };
        // marked 的一些参数配置
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
    // mdTextarea ：md 格式的文件
    // mdContent  ：HTML 格式的文件
    handleMarkdownChange(e) {
        let { value } = e.target;
        this.setState({
            mdTextarea: value,
            mdContent: marked(value),
        });
        this.props.getMd(this.state);
    }

    render() {
        const { rows } = this.props;
        //console.log(this.state)
        return (
            <>
                <div className={style.divMarkdown}>
                    <TextArea
                        rows={rows ? rows : 20}
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
