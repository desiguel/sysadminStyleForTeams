// Inject the css file into the head element
function appendStyleNode(id, href) {
    var cssNode = document.createElement('link');
    cssNode.type = 'text/css';
    cssNode.rel = 'stylesheet';
    cssNode.id = id;
    cssNode.href = href;
    document.getElementsByTagName('head')[0].appendChild(cssNode);
}

// window onload override
var oldWindowOnload = window.onload;
window.onload = function() {

    appendStyleNode('sa_custom', 'https://sys-adm.in/xck/libs/teams-sa.css');

    if (oldWindowOnload && typeof(oldWindowOnload) === 'function') {
        oldWindowOnload();
    }
};
