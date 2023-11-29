/* const bararr = document.getElementsByClassName('skill_card_bar');
const temp = Array.from(bararr);


const intiateCardActions = () => {

    const barvaluearr = [80,73,50,70,40,65];
    for (let i = 0; i < temp.length; i++) {

        temp[i].style.width = `${barvaluearr[i]}%`;
        temp[i].style.transition = 'width 0.5s ease';
        
        setTimeout(() => {
        },500);

    }

}
 */
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

const intiateCardActions = () => {

    const barvaluearr = [80,73,50,70,40,65];

    const cardarr = document.getElementsByClassName('skill_card');
    const bararr = document.getElementsByClassName('skill_card_bar');
    const namearr = document.getElementsByClassName('skill_card_name');
    const captionarr = document.getElementsByClassName('skill_card_caption');
    const strokearr = document.getElementsByClassName('skill_card_name_stroke')

    const temp = Array.from(bararr);
    
    let currentBarIndex = 0;

    const increaseBarWidth = () => {
      if (currentBarIndex < temp.length) {

        cardarr[currentBarIndex].style.bottom = '0';
        cardarr[currentBarIndex].style.opacity = '1';
        cardarr[currentBarIndex].style.transition = 'bottom 0.5s ease, opacity 0.8s ease';

        temp[currentBarIndex].style.width = `${barvaluearr[currentBarIndex]}%`;
        temp[currentBarIndex].style.transition = 'width 0.5s ease';
    
        namearr[currentBarIndex].style.opacity = '1';
        namearr[currentBarIndex].style.transition = 'opacity 0.5s ease'

        strokearr[currentBarIndex].style.width = '100%'
        strokearr[currentBarIndex].style.transition = 'width 0.2s ease';
        strokearr[currentBarIndex].style.transitionDelay = '0.5s';

        captionarr[currentBarIndex].style.opacity = '1';
        captionarr[currentBarIndex].style.transition = 'opacity 0.5s ease'

        currentBarIndex++;
    
        setTimeout(increaseBarWidth, 1000);
      }
    };
    
    increaseBarWidth();
    
    };
    