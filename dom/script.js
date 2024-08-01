let hell = document.getElementById('unique');
console.log(hell);
hell.style.color='red';
hell.style.fontSize='2em';

let F_color = document.getElementsByClassName('bg');
  for(i=0;i<F_color.length;i++){
    let v=F_color[i].style.color='blue'
  }

let Bord_er = document.getElementsByTagName('h2');
  for(i=0;i<Bord_er.length;i++){
     Bord_er[i].style.border='2px solid black';
     Bord_er[i].style.padding='10px';
     
  }

let Fonts = document.querySelector('#nest')
  Fonts.style.fontStyle='italic';
  Fonts.style.fontSize='1.5em';
let fontera = document.querySelectorAll('.item');
  for(i=0;i<fontera.length;i++){
  fontera[i].style.margin="100px 10px 20px 30px";
  fontera[i].style.fontSize='1.5em';
  }
let favour = document.getElementById('fav-me');
// console.log(favourite);
favour.style.backgroundColor='red';
favour.style.fontSize='2em';
favour.style.fontStyle='Ariel';


