const typing = () => {
    const msg = ["Hello Every One How are You. ", "I am Fine Just Got From Vacation. ", "Nice where did you go? "];
    const msgcont = document.getElementById('msg');
    const cursor = document.getElementById('typingcursor');

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
            clearInterval(loop);
    },100);
}