

function gettitle() {
    let pagetitle= document.title
    document.getElementById("pagetitle").innerText=pagetitle
}


class specialheader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <div class="specialheader" id="specialheader">
        <img class="headerimage" src="https://i.postimg.cc/FKyx0yJr/career-glow-trans-Warm-Grey.png" onclick="gotohome()"></img>
        <div class="topcontactdet"><contact-det></contact-det></div>
        

        <div id="hamburger" class="hamburger" onclick="openhamburger()">═</div>
    
        <div id="topliniks" class="toplinks">
            
            <a href="Templateschecker.html" >Template checker</a>
            <a href="contact.html" >Contact</a>

            
        </div>
    </div>


        `
    }
}
customElements.define('special-header', specialheader)

class specialfooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="specialfooter" id="specialfooter">
       <contact-det></contact-det>
    </div>
        `
    }
}
customElements.define('special-footer', specialfooter)

class contactdet extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="contactdet" id="contactdet">
        <p class="contactdet_text">087 399 2750</p>
        <a class="contactdet_text" href="contact.html">Contact</a>
        <p class="contactdet_text">careerglowcoachingwithanna@gmail.com</p>
    </div>
        `
    }
}
customElements.define('contact-det', contactdet)


class landing extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <br><br><br>
        <h1 style="display:block;text-align: center;margin-left: 30px;margin-right: 30px;">Imagine yourself 5 years from now: Is it daunting to think you'd be where you are now? Why wait to do something that you feel is right?</h1>

<br><br><br>

<h2>Are you stuck, stagnated or confused about your next steps?</h2>
<h2>Do you want to pursue a successful career that’s meaningful to you?</h2>
<h2>Is self-doubt or imposter syndrome getting in your way?</h2>
<h2>Do you want to develop lifelong skills essential to achieve your goals?</h2>
<h2>Are you scared to start over?</h2>

<br><br><br>

<a href="bookintroductorycall.html" style="font-size: xx-large; padding: 20;margin: 10vw;">Book your FREE introductory call today</a>
        `
    }
}
customElements.define('elem-landing', landing)





//set variables for modal
var modal = document.getElementById("modal")
var modalimg = document.getElementById("modal-content")
//open modal
function fullimage(element) {

    var elementsrc = element.getAttribute("src")
    modal.style.display = "block";
    modalimg.src = elementsrc;
    ScrollDisable();
}


//Close modal on click on window

function ScrollDisable(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function ScrollEnable(){
    window.onscroll=function(){};
}



function openhamburger() {

    var toplinks = document.getElementById("topliniks");
    var hamdisplay = toplinks.style.display;
    if (hamdisplay === "none" ||hamdisplay === "") {toplinks.style.display = "inline-grid";} else {toplinks.style.display = "none";}
}

function closemodal() {

    modal.style.display = "none";
    ScrollEnable();

}

function gotohome() {
    window.location.href="index.html"
}



function animatefavicon() {
    setInterval(changefavicon, 1500);
    };

    let faviconIndex = 0
function changefavicon() {

    var favicon = document.getElementById("favicon");

    if (faviconIndex === 0 || faviconIndex === undefined || faviconIndex === null) { favicon.href =  "https://lh3.googleusercontent.com/pw/AP1GczOdHcX-d23GFtiv6xhEjB4P-tGIHwVaRubzAYJ_fsmzs8uTUhiiaJSuWUzbIKEWfvuUaWpzjOzuNzOaJtSr1CNCCSaqIlAdncjh5PaWbDfJBzLb_pAdpR3jHs2csPOEitFIf-_wsel-hXnnmoD0PFbN=w16-h16-s-no?authuser=0";faviconIndex = 1} 

    else if (faviconIndex === 1) { favicon.href =  "https://lh3.googleusercontent.com/pw/AP1GczPX18yMuqjJ4-vbfk2Vx6NP834TKuPp1lNnU8JVbE1SVP2Ys3e-4KxuuGAYlvK_OfzWFby00XahAxszGGr92Nb4BckQMUrp4PARj-S1k77VvKJ9mPPwHlzpDLw7DM1oxs6SzLoL-sKsvDqcP5RG4jtb=w16-h16-s-no?authuser=0";faviconIndex =2 } 

    else if (faviconIndex === 2) { favicon.href =  "https://lh3.googleusercontent.com/pw/AP1GczM3HM-W0CZV8M-ua9fhCsZ0pYT9kD9Pefo0jjzdw0DwZv0L7PU-6Y9cd5w5VdQXDBLFbGpmAhSA8Nil_oaRNkoLQcodqcgIT4GMg-zhR4tZH2kv3v2DPH_ML7Fr6kPqQOCraRsqWHY0MmuzdoO-HGsm=w16-h16-s-no?authuser=0";faviconIndex = 3}

    else if (faviconIndex === 3) { favicon.href =  "https://lh3.googleusercontent.com/pw/AP1GczOS-_FEz1XvtWgXI1w6TcvPSu8rgIiQ2ShC-4y52bDppCNJ_qh3ZCI5urYY6mwiPDRVS_PdSXKOmnONQopYWApSSRnHofiiRg0vJZ3mj5PyQwKA6pY=s16-p-k";faviconIndex = 0}
        

}

   window.onload = animatefavicon(),gettitle();
