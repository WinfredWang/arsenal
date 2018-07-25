import { toHTML } from './markdown';
import './css/index.css';
import './css/markdown.css'

class CodeEditor {
    constructor() {
        this.create();
    }
    create() {
        this.editor = monaco.editor.create(document.getElementById('container'),
            { language: 'markdown', minimap: { enabled: false } });
        this.editor.onDidChangeModelContent(e => {
            this.preview();
        });
    }

    initEvents() {
    }

    preview() {
        document.getElementById('preview').innerHTML = toHTML(this.editor.getValue());
    }

    resize(width, height) {
        this.editor.layout({ height: height, width: width });
    }
}

document.addEventListener('MonacoReady', function () {
    let editor = new CodeEditor();
    resize();
    window.onresize = resize;
    function resize() {
        let rect = document.body.getBoundingClientRect();
        let width = rect.width / 2;
        let height = rect.height - 125;
        editor.resize(width - 10, height);
        document.getElementById('container').style.width = `${width}px`;
        document.getElementById('preview').style.height = `${height}px`;
    }
});

