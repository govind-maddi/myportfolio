let toggleFlag = false;
let majorFlag = true;
let minorFlag = false;
let spinnerFlag = true;

const majorbtn = document.getElementById('majorbtn');
const minorbtn = document.getElementById('minorbtn');
const majorminorcont = document.getElementById('majorminor_cont');
const body_cont = document.getElementById('body_cont');

const menuextender = document.getElementById('menu_extend_btn');

const applyBackground = () => {
    console.log(majorFlag+"---"+minorFlag);
    if(majorFlag === true)
    {
        majorbtn.style.backgroundColor = "#002144";
        majorbtn.style.color = "#30d5c8";
        minorbtn.style.backgroundColor = "";
        minorbtn.style.color = "";
    }
    if(minorFlag === true){
        minorbtn.style.backgroundColor = "#002144";
        minorbtn.style.color = "#30d5c8";
        majorbtn.style.backgroundColor = "";
        majorbtn.style.color = "";
    }
}

/* window.addEventListener('scroll',() => {
    
    if(window.scrollY > 0 && majorminorcont.offsetTop >= 115 && screen.width <= 768)
    {
        majorminorcont.style.backgroundColor = '#30d5c8';
        
    }
    else{
        majorminorcont.style.backgroundColor = ''
    }
}) */

menuextender.addEventListener('click',() => {
    if(document.getElementById('menu_cont').offsetLeft === -133 )
    {
        document.getElementById('menu_cont').style.left = '0px';
        document.getElementById('menu_extend_icon').style.transform = 'rotate(180deg) translate(5px)'
    }
    else if(document.getElementById('menu_cont').offsetLeft === 0 ){
        document.getElementById('menu_cont').style.left = '-133px';
        document.getElementById('menu_extend_icon').style.transform = ''
    }
    //alert(document.getElementById('menu_cont').offsetLeft === -133)
});

majorbtn.addEventListener('click',() => {
    majorFlag = true;
    minorFlag = false;
    applyBackground();
    const major_cards = document.getElementsByClassName('major_card');
    for (let i = 0; i < major_cards.length; i++) {
        
        major_cards[i].style.display = 'block';

    }
    const minor_cards = document.getElementsByClassName('minor_card');
    for (let i = 0; i < minor_cards.length; i++) {
        
        minor_cards[i].style.display = '';

    }
})

minorbtn.addEventListener('click',() => {
    majorFlag = false;
    minorFlag = true;
    applyBackground();
    const minor_cards = document.getElementsByClassName('minor_card');
    for (let i = 0; i < minor_cards.length; i++) {
        
        minor_cards[i].style.display = 'block';

    }
    const major_cards = document.getElementsByClassName('major_card');
    for (let i = 0; i < major_cards.length; i++) {
        
        major_cards[i].style.display = 'none';

    }
})

/* if(screen.width <= 768){

    majorbtn.addEventListener("touchstart",() => {
        majorbtn.style.transform = 'scale(1.1)';
    })
    minorbtn.addEventListener("touchstart",() => {
        minorbtn.style.transform = 'scale(1.1)';
    })

} */

const setIds = () => {
    const menuicons = document.getElementsByClassName('project_card_menu');
    const menusvgs = document.getElementsByClassName('menusvgs');
    const frontcards = document.getElementsByClassName('project_card_front');
    const bottomcards = document.getElementsByClassName('project_card_bottom');

    for (let icon = 0; icon < menuicons.length; icon++) {
        
        menuicons[icon].setAttribute('id',`menuicon${icon+1}`);
        document.getElementById(`menuicon${icon+1}`).addEventListener('click',() => {
            toggleProjectDetails(menuicons[icon], menusvgs[icon],frontcards[icon], bottomcards[icon]);
        })

    }
}

const toggleProjectDetails = (menuicon, menusvg, frontcard, bottomcard) => {
    toggleFlag = !toggleFlag;

    if(toggleFlag === true)
    {
        frontcard.style.top = '230px';
        menuicon.style.backgroundColor = '#30d5c8';
        menusvg.style.fill = '#002144';

    }
    else{
        frontcard.style.top = '0px';
        menuicon.style.backgroundColor = '#002144';
        menusvg.style.fill = '#30d5c8';
    }
}