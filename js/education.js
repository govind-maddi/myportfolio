const educardcoll = document.getElementsByClassName('education_card');
const dot1 = document.getElementById('dot1').offsetTop;
const dot2 = document.getElementById('dot2').offsetTop;
const dot3 = document.getElementById('dot3').offsetTop;

const menuextender = document.getElementById('menu_extend_btn');

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

const extendagain = () => {

    setTimeout(() => {
        const line = document.getElementById('line');
        line.style.height = `${dot3 - dot1}px`;
        
        setTimeout(() => {
            const temp = document.getElementById('dot3');
            temp.style.opacity = '1';
            
            educardcoll[2].style.opacity = '1';
            educardcoll[2].style.transition = 'opacity 0.5s ease';
        }, 1200);
    },1000);
    /* alert(line.style.height) */
}


const extend = () => {

    setTimeout(() => {
        const line = document.getElementById('line');
        line.style.height = `${dot2 - dot1}px`;
        setTimeout(() => {
            const temp = document.getElementById('dot2');
            temp.style.opacity = '1';

            educardcoll[1].style.opacity = '1';
            educardcoll[1].style.transition = 'opacity 0.5s ease';
            extendagain();
        },1200);
    },1000);

}

const begin = () => {

    if(screen.width <= 768)
    {
        let i = 0;
        const loop = setInterval(() => {
            educardcoll[i].style.opacity = '1';
            i++;
            if(i === 3)
                clearInterval(loop);
        }, 500);
    }
    else{
        const temp = document.getElementById('dot1');
        temp.style.opacity = '1';

        educardcoll[0].style.opacity = '1';
        educardcoll[0].style.transition = 'opacity 0.5s ease';

        setTimeout(() => {document.getElementById('line').style.opacity = '1';},1000);
        
        extend();
    }
}