const btn = document.querySelector('button');
const bodyBackground = document.querySelector('body');
const backgroundColor = ['#FFFFFF', '#C0C0C0', '#808080', '#FF0000', '#800000', '#FFFF00', '#808000', '#00FF00', '#008000', '#00FFFF', '#008080', '#0000FF', '#000080', '#FF00FF',  ' #800080','#D98880', '#CD6155 ', '#C0392B', '#C0392B', '#A93226', '#922B21 ', '#7B241C', '#641E16 ', '#F5B7B1', '#F5B7B1 ',  '#F1948A','#EC7063 ', '#E74C3C', '#CB4335', '#E74C3C', '#CB4335 ', '#B03A2E', '#943126 ', '#78281F', '#EBDEF0', '#D7BDE2 ','#C39BD3','#AF7AC5 ','#9B59B6','#884EA0','#76448A', '#633974','#512E5F'];

const span = document.querySelector('span');


btn.addEventListener('click', ()=>{
    
    let randomNumber = Math.floor(Math.random() * backgroundColor.length);
    bodyBackground.style.backgroundColor = backgroundColor[randomNumber];
    console.log(backgroundColor[randomNumber]);
    span.innerHTML= (backgroundColor[randomNumber]);
})

//https://htmlcolorcodes.com/
