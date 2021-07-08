img = ['repg.jpg', 'repg2.jpg', 'repg3.jpg', 'repg4.jpg']//,'repg5.jpg','repg6.jpg', 'repg7.jpg', 'repg8.jpg', 'repg9.jpg', 'repg10.jpg', 'repg11.jpg', 'repg12.jpg', 'repg13.jpg', 'repg14.jpg', 'repg15.jpg', 'repg16.jpg', 'repg17.jpg', 'repg18.jpg', 'repg19.jpg', 'repg20.jpg', 'repg21.jpg', 'repg22.jpg', 'repg23.jpg', 'repg24.jpg']
const num = img.length;
n = 0;
function change(){
   
    if (n < num ){

        document.querySelector('img').src= "media/image/"+img[n];
    }

    if (n == num){
        n=0;
        document.querySelector('img').src= "media/image/"+img[n];
    }

    
   
    n++;
}

function darkTheme(){
    document.body.style.background = 'black';
    document.querySelector('.e').style.background = 'skyblue'
    
}

function lightTheme(){
    document.body.style.background = 'skyblue';
    document.querySelector('.e').style.background = 'black'
    
}

document.querySelector('.img-btn').addEventListener('click',change)
setInterval(change,2000);

function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
}

