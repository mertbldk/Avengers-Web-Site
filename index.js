//Tags
const MenuContainer = document.getElementById('MenuContainer');
const CharactersCap = document.getElementById('CharactersCap');
const MenuUl = document.querySelectorAll('#MenuUl li');
const AvengersBack = document.getElementById('AvengersBack');
const HulkBackImg = document.getElementById('HulkBackImg');
const IronManBackImg = document.getElementById('IronManBackImg');
const SpiderManImg = document.getElementById('SpiderManImg');
const ThorBackImg = document.getElementById('ThorBackImg');
const MenuResponsiveButton = document.getElementById('MenuResponsiveButton');
const MenuResponsiveUl = document.getElementById('MenuResponsiveUl');
const footerMain = document.getElementById('footerMain');

//Codes
let MenuContainerTF = true;

window.addEventListener('scroll',()=>{
    CharactersScrollY();
    scrollYGlobal();
});

window.addEventListener('resize',()=>{
    resizeGlobal();
});

window.addEventListener('load',()=>{

    MenuUl.forEach((element,index)=>{
        setTimeout(()=>{
            element.style.top = '0px';
        },(index+1) * 300)
    }); 

    setTimeout(()=>{
        AvengersBack.style.top = 0;
        AvengersBack.style.opacity = 1;
    },1500);

});

MenuResponsiveButton.addEventListener('click',()=>{

    MenuResponsiveUl.classList.toggle('MenuResponsiveUlAdd');
    MenuResponsiveUl.classList.toggle('MenuResponsiveUlRemove');

    MenuResponsiveButton.children[0].classList.toggle('button1');
    MenuResponsiveButton.children[1].classList.toggle('button2');
    MenuResponsiveButton.children[2].classList.toggle('button3');

    MenuContainer.style.backgroundColor = "var(--backColor)";
    MenuContainerTF = !MenuContainerTF;
    scrollYGlobal();

});

function CharactersScrollY(){
    //Hulk
    if(scrollY >= 300 && scrollY <= 700){
        setTimeout(() => {
            HulkBackImg.style.left = "50%";
            HulkBackImg.style.opacity = "1";
        }, 500);
    }

    //Iron Man
    if(scrollY >= 1000 && scrollY <= 1400){
        setTimeout(() => {
            IronManBackImg.style.right = "62%";
            IronManBackImg.style.opacity = "1";
        }, 500);
    }

    //Spider-Man
    if(scrollY >= 1700 && scrollY <= 2000){
        setTimeout(() => {
            SpiderManImg.style.left = "80%";
            SpiderManImg.style.opacity = "1";
        }, 500);
    }

    //Thor
    if(scrollY >= 2200 && scrollY <= 2600){
        setTimeout(() => {
            ThorBackImg.style.right = "65%";
            ThorBackImg.style.opacity = "1";
        }, 500);
    }
}

function scrollYGlobal(){

    if(scrollY >= 50){

        MenuContainerTF ?
        MenuContainer.style.backgroundColor = "var(--backColor)"
        :'';
        
        if(window.innerWidth > '991'){
            CharactersCap.style.width = "10em";
            CharactersCap.style.height = "10em";
            CharactersCap.style.bottom = "50px";
            CharactersCap.style.right = "50px";
            CharactersCap.style.position = "fixed";
        }

    }
    else{

        MenuContainerTF ?
        MenuContainer.style.backgroundColor = "transparent"
        :'';

        if(window.innerWidth > '991'){
            CharactersCap.style.width = "25em";
            CharactersCap.style.height = "25em";
            CharactersCap.style.bottom = "";
            CharactersCap.style.right = "";
        }

    }

}

function resizeGlobal(){

    if(window.innerWidth <= '991'){
        CharactersCap.style.width = "8em";
        CharactersCap.style.height = "8em";
        CharactersCap.style.bottom = "30px";
        CharactersCap.style.right = "30px";
        CharactersCap.style.position = "fixed";
    }
    else{
        scrollYGlobal();
        MenuResponsiveUl.classList.remove('MenuResponsiveUlAdd');
        MenuResponsiveUl.classList.add('MenuResponsiveUlRemove');
        MenuResponsiveButton.children[0].classList.remove('button1');
        MenuResponsiveButton.children[1].classList.remove('button2');
        MenuResponsiveButton.children[2].classList.remove('button3');
        MenuContainerTF = true;
    }

}
resizeGlobal();

(async ()=>{

    let footerArry = [
        'Thanos',
        'Kaptan Amerika',
        'Doctor Strage',
        'Clint Barton',
        'Wanda Maximoff',
        'Groot',
        'Kara Panter',
        'Carol Danvers',
        'Bucky Barnes',
        'Nick Fury',
        'Sam Wilson',
        'Star-Lord',
        'Roket Rakun',
        'Black Widow',
        'Drax',
        'Gamora',
        
    ];

    let footerDepo = "";

    footerArry.map((element)=>{

        footerDepo += `
        <div id="footerMainCap">
            <div id="footerMainCapİmg">
                <img src="./img/Charsers/${element}.jpg">
            </div>
            <div id="footerMainCapName">${element}</div>
        </div>`;

    });

    setTimeout(()=>{
        footerMain.insertAdjacentHTML('beforeend',footerDepo);
    },1000);

})();
