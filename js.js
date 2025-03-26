


class specialheader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<div class="specialheader" id="specialheader">
  <img class="headerimage" src="https://i.postimg.cc/hPywSDFW/career-glow-trans-white.png" onclick="gotohome()"></img>
  <div class="topcontactdet"><contact-det></contact-det></div>
  
  <!-- 

  <div id="hamburger" class="hamburger" onclick="openhamburger()">
          <img src="https://i.postimg.cc/hjFzHZbD/careerglow-hamburger.png"></img>
  </div>


  
  <div id="topliniks" class="toplinks">
      
      <a href="Templateschecker.html" >Template checker</a>
      <a href="contact.html" >Contact</a>

  -->

      
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
        <h1 class="inspiquote">Imagine yourself 5 years from now: Is it daunting to think you'd be where you are now? Why wait to do something that you feel is right?</h1>

<br><br><br>


<div style="text-align: center;">
<ul>
        <li>Are you stuck, stagnated or confused about your next steps?</li>
        <li>Do you want to pursue a successful career that’s meaningful to you?</li>
        <li>Is self-doubt or imposter syndrome getting in your way?</li>
        <li>Do you want to develop lifelong skills essential to achieve your goals?</li>
        <li>Are you scared to start over?</li>
</ul>
</div>

<br><br><br>

<button class="button1" type="button" onclick="location.href = 'contact.html';">Book your FREE introductory call today</button>
        `
    }
}
customElements.define('elem-landing', landing)

class about extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<link href="style_about.css" rel="stylesheet">
<div style="background-image: linear-gradient(to right,#65a0af,#87afb9,#65a0af);border-radius: 50px;margin: 20px;max-width: 1200px;margin-left: auto;margin-right: auto;">
        

        <h1 class="aboutabout">ABOUT</h1>


        <div class="aboutgrid">

                <h1 class="aboutgridsloth1_1" >
                Meet Anna, Professional Career & Development Coach at Career Glow.</h1>

                <img src="https://i.postimg.cc/zXXtMnBf/IMG-2096-copy-1500.png" 
                class="aboutgridimage">

                <h3 class="aboutgridsloth2_1" >
                 ​​Anna holds a Professional Diploma in Coaching and Mentoring, a Masters degree in Management Information and Managerial Accounting Systems and a Bachelor degree in Economics (Through Transformational Learning). She has developed her own MARC method that she uses in her coaching practice, also taking from her background experience of coaching, operations, and development.
                </h2>
                 
        </div>

        <h1 style="color: white;max-width: 900px;margin-left: auto;margin-right: auto; z-index: 5; position: relative;">Coaching at Career Glow is a proven professional, confidential and safe space to take ownership of your future and grow an authentic and meaningful career.  We specialize in:</h1>

        <div style="background-color: rgb(233, 232, 230);max-width: 900px;margin-left: auto;margin-right: auto;border-radius: 30px;margin-bottom: 20px;border-bottom: 20px;z-index: 1; position: relative;">
                <ul style="width: 90%;">
                        <li>
                                Career transitions, Mid-Career and Early-Career development and planning. We appreciate that each client is unique and comes with a different set of skills, background and experiences. We strive to approach everyone individually to tailor for personal needs and long-lasting results.  
                        </li>
                </ul>
        </div>
        <br>

</div>
        `
            }
}
customElements.define('elem-about', about)


class offer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<link href="style_offer.css" rel="stylesheet">

<div class="offermastercontainer">

        <h1 class="offerh1">WHAT WE OFFER:</h1>

        <div class="offersection_left">
                <img class="offerimage" src="https://i.postimg.cc/dVBwmRLj/1-coaching.jpg">
                <div class="offergradient_left"></div>
                <div class="offer_text_left">Receive 1:1 Tailored Coaching Sessions</div>
        </div>
        
        <div class="offersection_right">
                <img class="offerimage" src="https://i.postimg.cc/gcsVQjnc/2-webinars.jpg">
                <div class="offergradient_right"></div>
                <div class="offer_text_right">Take part in Career Glow webinars</div>
        </div>

        <div class="offersection_left">
                <img class="offerimage" src="https://i.postimg.cc/VLyJ7cFs/3-goals.jpg">
                <div class="offergradient_left"></div>
                <div class="offer_text_left">Clarify, Set and Plan for your Goals</div>
        </div>

        <div class="offersection_right">
                <img class="offerimage" src="https://i.postimg.cc/1z3PWgFh/4-skill-gap.jpg">
                <div class="offergradient_right"></div>
                <div class="offer_text_right">Identify your skills gap, build your confidence and tame your inner critic</div>
        </div>

        <div class="offersection_left">
                <img class="offerimage" src="https://i.postimg.cc/bJKhN3Bp/5-networking.jpg">
                <div class="offergradient_left"></div>
                <div class="offer_text_left">Improve your job search, interview, CV and networking skills</div>
        </div>

        <div class="offersection_right">
                <img class="offerimage" src="https://i.postimg.cc/Jzp4Wwjk/6-finish.jpg">
                <div class="offergradient_right"></div>
                <div class="offer_text_right">Achieve your goals </div>
        </div>

</div>
                `
            }
}
customElements.define('elem-offer', offer)
        


class services extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<link href="style_services.css" rel="stylesheet">

<h1 style="color: var(--color_blue);">Our Services:</h1>

<div class="grid_services" >

<div  class="servicescont_R" >
        <h2>One to One Individual Coaching Sessions (Live Online)</h2>
        <div class="services_inner">
        <p>Individually tailored coaching to accelerate your career journey.Career Glow specialises in Career Transitions,  Mid and Early career coaching.</p>
        <h3>Standard Cost (1 hour session):		€110</h3>

        <button class="button_white" type="button" onclick="location.href = 'contact.html';">Book your introductory call today!</button>
        </div>
</div>

<div class="servicescont_L" >
        <h2>The Ultimate Career Change Package (Live Online)</h2>
        <p>A combination of one to one and group coaching to provide you with:</p>
        <ul class="ul_services_R" >
                <li>Individual approach</li>
                <li>Affordability</li>
                <li>Mutual learning</li>
                <li>Increased Confidence</li>
                <li>Accountability</li>
                <li>Networking Opportunities</li>
                <li>Proven tools & techniques essential for career changers</li>
        </ul>
        <h3>Cost (6 x 1 hour sessions): 		€500</h3>
        <p> *Payment plans available</p>

        <button class="button_white" type="button" onclick="location.href = 'contact.html';">Book your introductory call today!</button>
</div>

<div  class="servicescont_R" >
        <h2>From Stuck to Hired Package (Live Online)</h2>
        <p>A combination of one to one and group coaching to provide you with:</p>
        <ul class="ul_services_L" >
                <li class="li_services">Individual approach</li>
                <li>Affordability</li>
                <li>Mutual learning</li>
                <li>Increased Confidence</li>
                <li>Accountability</li>
                <li>Networking Opportunities</li>
                <li>Proven tools & techniques essential for job seekers.</li>
        </ul>
        <h3>Standard Cost (1 hour session):		€110</h3>

        <button class="button_white" type="button" onclick="location.href = 'contact.html';">Book your introductory call today!</button>
</div>

<div  class="servicescont_L" >
        <h2>The Jobseeker’s Toolkit   (Pre-recorded Online)</h2>
        <p>Pre-recorded, step-by-step strategies, tools and tips on: </p>
        <ul class="ul_services_R" >
                <li>Career choice</li>
                <li>Self-marketing</li>
                <li>CV & Cover Letter writing</li>
                <li>Interviewing </li>
                <li>Networking</li>
        </ul>
        <h3>Cost (Pre-recorded course):		€50</h3>
        <p>→Time-limited extra service included: Professional CV Review upon completion and 20% off your first 1:1 coaching session</p>

        <button class="button_white" type="button" onclick="location.href = 'contact_RequestJobSeekers.html';">Request your Jobseeker’s toolkit</button>
</div>

</div>

                `
            }
}
customElements.define('elem-services', services)


class testimonials extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<link href="style_testimonials.css" rel="stylesheet">
<script defer src="js_testimonials.js"></script>

        <h2 style="color: var(--color_blue);">Our Testimonials:</h2>

<div class="slideshow-container">

        <div class="mySlides fade">

          <div class="text"> I found her attention to detail regarding amendments to my CV, and her ideas of how to find suitable employment excellent. She puts a lot of preparation and thought into her work, and I look forward to putting her suggestions into practise and securing my ideal position. I would be a lot more confidant of success after working with her.</div>
        </div>
      
        <div class="mySlides fade">

          <div class="text"> Anna was extremely efficient, helpful and supportive. She highlighted my strengths and values, which has made it easier for me to search for a suitable job. We discussed various avenues of job searching and she encouraged me to apply in ways I hadn't previously. I am extremely satisfied with our sessions!</div>
        </div>
      
        <div class="mySlides fade">

          <div class="text">Lorem ipsum dolor sit amet</div>
        </div>

        <div class="mySlides fade">

          <div class="text">Lorem ipsum dolor sit amet 222</div>
        </div>
      
        <!-- Next and previous buttons -->
        <p class="prev" onclick="plusSlides(-1)">&#10094;</p>
        <p class="next" onclick="plusSlides(1)">&#10095;</p>
      </div>
      <br>
      
      <!-- The dots/circles -->
      <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
        <span class="dot" onclick="currentSlide(4)"></span>
      </div>

</div>

                `
            }
}
customElements.define('elem-testimonials', testimonials)


class aboutandoffer extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
<link href="style_aboutandoffer.css" rel="stylesheet">

<div class="aboutoffergrid" >

<div class="aboutcontainer">
        

        <h1 class="aboutabout">ABOUT</h1>

        <img src="https://i.postimg.cc/zXXtMnBf/IMG-2096-copy-1500.png" 
        class="aboutgridimage">

        <div class="aboutgrid">

                <h1 class="aboutgridsloth1_1" >
                Meet Anna, Professional Career & Development Coach at Career Glow.</h1>

                

                <h3 class="aboutgridsloth2_1" >
                 ​​Anna holds a Professional Diploma in Coaching and Mentoring, a Masters degree in Management Information and Managerial Accounting Systems and a Bachelor degree in Economics (Through Transformational Learning). She has developed her own MARC method that she uses in her coaching practice, also taking from her background experience of coaching, operations, and development.
                </h2>
                 
        </div>

        <h2 style="color: white;max-width: 95%;margin-left: auto; margin-right: auto; z-index: 5; position: relative;">Coaching at Career Glow is a proven professional, confidential and safe space to take ownership of your future and grow an authentic and meaningful career.  We specialize in:</h2>

        <div style="background-color: rgb(233, 232, 230);max-width: 95%;margin-left: auto;margin-right: auto;border-radius: 30px;margin-bottom: 20px;border-bottom: 20px;z-index: 1; position: relative;">
                <ul style="width: 90%;">
                        <li style="font-size: 75%;">
                                Career transitions, Mid-Career and Early-Career development and planning. We appreciate that each client is unique and comes with a different set of skills, background and experiences. We strive to approach everyone individually to tailor for personal needs and long-lasting results.  
                        </li>
                </ul>
        </div>
        <br>

</div>

<div class="offermastercontainer">

        <h1 class="offerh1">WHAT WE OFFER:</h1>

        <div class="offersection_left">
                <img class="offerimage" src="https://i.postimg.cc/dVBwmRLj/1-coaching.jpg">
                <div class="offergradient_left"></div>
                <div class="offer_text_left">Receive 1:1 Tailored Coaching Sessions</div>
        </div>
        
        <div class="offersection_right">
                <img class="offerimage" src="https://i.postimg.cc/gcsVQjnc/2-webinars.jpg">
                <div class="offergradient_right"></div>
                <div class="offer_text_right">Take part in Career Glow webinars</div>
        </div>

        <div class="offersection_left">
                <img class="offerimage" src="https://i.postimg.cc/VLyJ7cFs/3-goals.jpg">
                <div class="offergradient_left"></div>
                <div class="offer_text_left">Clarify, Set and Plan for your Goals</div>
        </div>

        <div class="offersection_right">
                <img class="offerimage" src="https://i.postimg.cc/1z3PWgFh/4-skill-gap.jpg">
                <div class="offergradient_right"></div>
                <div class="offer_text_right">Identify your skills gap, build your confidence and tame your inner critic</div>
        </div>

        <div class="offersection_left">
                <img class="offerimage" src="https://i.postimg.cc/bJKhN3Bp/5-networking.jpg">
                <div class="offergradient_left"></div>
                <div class="offer_text_left">Improve your job search, interview, CV and networking skills</div>
        </div>

        <div class="offersection_right">
                <img class="offerimage" src="https://i.postimg.cc/Jzp4Wwjk/6-finish.jpg">
                <div class="offergradient_right"></div>
                <div class="offer_text_right">Achieve your goals </div>
        </div>

</div>

</div>
    
                    `
                }
    }
    customElements.define('elem-aboutandoffer', aboutandoffer)



    class socials extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
<link href="socials.css" rel="stylesheet">

<h2 class="socialstitle">Find us on:</h2>

<div class="socialscontainer">
  

  <a class="socialslink" href="https://ie.linkedin.com/">
    <img  class="socialsimage" src="https://i.postimg.cc/sDvsr0BX/in.png">
  </a>

  <a class="socialslink" href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F">
    <img  class="socialsimage" src="https://i.postimg.cc/x1mQkJ3V/fb.png">
  </a>

  <a class="socialslink" href="https://www.instagram.com/">
   <img  class="socialsimage" src="https://i.postimg.cc/k5dmWJT6/insta.png">
  </a>
</div>
                    `
                }
    }
    customElements.define('elem-socials', socials)


//var serviceelems;

//var serviceelems_R = document.getElementsByClassName('servicescont_R','servicescont_L')



function scrollto(elem) {
        elem.scrollIntoView({ behavior: "smooth",  block: "center", inline: "nearest" });


}






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

    if (faviconIndex === 0 || faviconIndex === undefined || faviconIndex === null) { favicon.href =  "https://lh3.googleusercontent.com/pw/AP1GczPX18yMuqjJ4-vbfk2Vx6NP834TKuPp1lNnU8JVbE1SVP2Ys3e-4KxuuGAYlvK_OfzWFby00XahAxszGGr92Nb4BckQMUrp4PARj-S1k77VvKJ9mPPwHlzpDLw7DM1oxs6SzLoL-sKsvDqcP5RG4jtb=w16-h16-s-no?authuser=0";faviconIndex = 1} 

    else if (faviconIndex === 1) { favicon.href =  "https://lh3.googleusercontent.com/pw/AP1GczM3HM-W0CZV8M-ua9fhCsZ0pYT9kD9Pefo0jjzdw0DwZv0L7PU-6Y9cd5w5VdQXDBLFbGpmAhSA8Nil_oaRNkoLQcodqcgIT4GMg-zhR4tZH2kv3v2DPH_ML7Fr6kPqQOCraRsqWHY0MmuzdoO-HGsm=w16-h16-s-no?authuser=0";faviconIndex =2 } 

    else if (faviconIndex === 2) { favicon.href =  "https://lh3.googleusercontent.com/pw/AP1GczPX18yMuqjJ4-vbfk2Vx6NP834TKuPp1lNnU8JVbE1SVP2Ys3e-4KxuuGAYlvK_OfzWFby00XahAxszGGr92Nb4BckQMUrp4PARj-S1k77VvKJ9mPPwHlzpDLw7DM1oxs6SzLoL-sKsvDqcP5RG4jtb=w16-h16-s-no?authuser=0";faviconIndex = 3}

    else if (faviconIndex === 3) { favicon.href =  "https://lh3.googleusercontent.com/pw/AP1GczOS-_FEz1XvtWgXI1w6TcvPSu8rgIiQ2ShC-4y52bDppCNJ_qh3ZCI5urYY6mwiPDRVS_PdSXKOmnONQopYWApSSRnHofiiRg0vJZ3mj5PyQwKA6pY=s16-p-k";faviconIndex = 0}
        

}

   window.onload = animatefavicon();
