import * as showdown from 'showdown';

class CodeEditor {

    constructor() {
        this.create();
    }
    create() {
        this.editor = monaco.editor.create(document.getElementById('container'), { language: 'markdown' });
        this.editor.onDidChangeModelContent(e => {
            this.preview();
        });
    }

    preview() {
        var converter = new showdown.Converter();
        document.getElementById('preview').innerHTML = converter.makeHtml(this.editor.getValue());
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
        let width = document.body.clientWidth - 505;
        editor.resize(width, document.body.clientHeight - 30);
        document.getElementById('container').style.width = `${width}px`;
    }
});

