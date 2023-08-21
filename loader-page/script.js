let number = document.querySelector('#value');
var count_value = 0;

function runnig_animation(){
    if(count_value == 100){
        clearInterval();
    }else{
        count_value = count_value + 1;
        number.innerHTML = count_value + '%';
    }
}
runnig_animation()
setInterval(runnig_animation , 40);


const body = document.querySelector('body');
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.minHeight = '100vh';
body.style.backgroundColor = 'rgba(7, 7, 7, 0.829)';
body.style.padding = '0';
body.style.margin = '0';
body.style.boxSizing = 'border-box';

number.style.display = 'flex';
number.style.justifyContent = 'center';
number.style.alignItems = 'center';
number.style.width = '360px';
number.style.height = '360px';
number.style.borderRadius = '50%';
number.style.backgroundColor = 'rgba(255, 255, 255, 0.468)';
number.style.color = '#fff';
number.style.fontSize = '5em';
number.style.textShadow = '0 0 20px #fff';