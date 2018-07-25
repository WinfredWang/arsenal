import * as showdown from 'showdown';

let markdown = new showdown.Converter();
markdown.setOption('headerLevelStart', true);
markdown.setOption('simplifiedAutoLink', true);
markdown.setOption('tables', true);
markdown.setOption('tablesHeaderId', true);
markdown.setOption('strikethrough', true);
markdown.setOption('tasklists', true);
markdown.setOption('openLinksInNewWindow', true);
markdown.setOption('ghCodeBlocks', true);
markdown.setOption('smoothLivePreview', true);


export function toHTML(markdownText) {
    return markdown.makeHtml(markdownText);
}