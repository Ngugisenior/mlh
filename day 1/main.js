const root = document.querySelector('.root');

const date = new Date().getFullYear();
const n = createElem('li');
n.innerHTML=`${date}`
root.appendChild(n);
function createElem(tag){
    return document.createElement(tag);
}