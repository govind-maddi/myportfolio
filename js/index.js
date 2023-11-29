const menuextender = document.getElementById('menu_extend_btn');
const mouse = document.getElementById('mouse');
const menu_cont_mobile = document.getElementById('menu_cont_mobile');

const scrollTop = window.scrollY;

const screenwidth = screen.width;

document.addEventListener('scroll',() => {
    if(screenwidth <= 768)
    {
        if( window.scrollY > 0  )
        {
            mouse.style.opacity = "0";
            mouse.style.pointerEvents = "none";

            menu_cont_mobile.style.opacity = "1";
            menu_cont_mobile.style.pointerEvents = "initial";
        }
            
        else
        {
            mouse.style.opacity = "1";
            mouse.style.pointerEvents = "initial"

            menu_cont_mobile.style.opacity = "";
            menu_cont_mobile.style.pointerEvents = "";
        }
    }
})

menuextender.addEventListener('click',() => {
    if(document.getElementById('menu_cont').offsetLeft === -133 )
    {
        console.log('ji')
        document.getElementById('menu_cont').style.left = '0px';
        document.getElementById('menu_extend_icon').style.transform = 'rotate(180deg) translate(5px)'
    }
    else if(document.getElementById('menu_cont').offsetLeft === 0 ){
        document.getElementById('menu_cont').style.left = '-133px';
        document.getElementById('menu_extend_icon').style.transform = ''
    }
    //alert(document.getElementById('menu_cont').offsetLeft === -133)
});

const scrollToDetails = () => {
    const details = document.getElementById('home_details_intro');
    if(details)
    {
        window.scrollTo(
            {
                top:details.offsetTop,
                behavior:"smooth"
            }
        );
    }
}

const typing = () => {
    const msg = ["I'm an Eager Frontend Dev. ", "Devoted to Company Growth. ", "Craft My Path To Success. "];
    const msgcont = document.getElementById('msg');
    const cursor = document.getElementById('cursor');

    const msgcontchildren = msgcont.children;

    let temp = "";
    let i = 0;
    let j = 1;
    let index = 0;
    
    const loop = setInterval(() => {

        const typing = () => {
            temp+=msg[index].charAt(i);
            
            if(temp.length !== msg[index].length)
            {
                i++;
                const span = document.createElement('span');
                span.innerHTML = temp.charAt(temp.length - 1);
                msgcont.append(span);
                
            }
            else
                i++;

        }

        const backspace = () => {
            
            msgcont.lastElementChild.remove();
            //index = 3;
            j++;

            if(msgcontchildren.length === 0)
            {
                index+=1;
                i = 0;
                temp = '';
            }

        }

        if(msg[index].length > i)
        {
            if(cursor.style.animationDuration === '')
                cursor.style.animationDuration = '0s';

            typing();
            j = 1;
        }
        else if(msg[index].length === temp.length && i < (temp.length + 20) - 1)
        {
            typing();
            
            if(cursor.style.animationDuration === '0s')
                cursor.style.animationDuration = '500ms';

        }
        else if(i === ((msg[index].length + 20) - 1))
        {
         
            if(cursor.style.animationDuration === '500ms')
                cursor.style.animationDuration = '';

                backspace();
        }

        if(index === 3)
            index = 0;
    },100);
}

const redirectResume = () => {
    window.open('https://drive.google.com/file/d/1LGQS5vqzCLSR1jOcQRzAK5KHBr86J2Wc/view?usp=sharing', '_blank');
}

const redirectLinkedin = (element) => {
    window.open('https://www.linkedin.com/in/govindraj-maddi/', '_blank');
}

const redirectGithub = (element) => {
    window.open('https://github.com/govind-maddi', '_blank');
}

const redirectMail = (element) => {
    const mailReciptent = 'maddigovindraj3@gmail.com';
    const mailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(mailReciptent)}`;

    window.open(mailUrl, '_blank');
}