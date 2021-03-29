const root = document.querySelector('.root');

const date = new Date().getFullYear();
let n = createElem('li');
n.innerHTML=`${date}`
root.appendChild(n);
function createElem(tag){
    return document.createElement(tag);
}


const images = [
    {
        name: "#1",
        subtitle:"I gif Up!",
        url: "assets/D__700-1.jpg",
        description: "People vs Foxes"
    },
    {
        name: "#2",
        subtitle:"",
        url: "assets/P__880.jpg",
        description: "People vs Foxes"
    },
    {
        name: "#3",
        subtitle:"",
        url: "assets/P__881.jpg",
        description: "People vs Foxes"
    },
    {
        name: "#4",
        subtitle:"",
        url: "assets/P__882.jpg",
        description: "People vs Foxes"
    },
    {
        name: "#5",
        subtitle:"",
        url: "assets/P__883.jpg",
        description: "People vs Foxes"
    },
    {
        name: "#6",
        subtitle:"",
        url: "assets/P__884.jpg",
        description: "People vs Foxes"
    },
    {
        name: "#7",
        subtitle:"",
        url: "assets/P__885.jpg",
        description: "People vs Foxes"
    }
];

const articles_styles = `width:400px; height:400px;`

const img_styles = `max-height:300px; max-width:400px`;

function getImage(){
    let n_div = createElem('div');
    n_div.setAttribute('style', 'display:flex; flex-wrap:wrap;');
    for (i in images){
        let nss = createElem('article');
        let ns = createElem('img');
        let nt_title = createElem('div');
        nt_title.innerHTML = `<p><strong>${ images[i].name}</strong></p><br/>  <h2><strong>${ images[i].subtitle}</strong></h2> `
        ns.setAttribute('src', images[i].url);
        ns.setAttribute('alt', images[i].description);
        ns.setAttribute('loading', 'lazy');
        ns.setAttribute('style', img_styles);
        nss.setAttribute('style', articles_styles);
        nss.appendChild(nt_title);
        nss.appendChild(ns);
        n_div.appendChild(nss);
    }

    root.appendChild(n_div);

}
getImage();