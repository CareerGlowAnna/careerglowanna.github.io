


class specialheader extends HTMLElement {
        connectedCallback() {
                this.innerHTML = `
<div class="specialheader" id="specialheader" style="position: relative;">
        <img class="headerimage" src="https://i.postimg.cc/qvr6hBXR/ANNA-C-CAREER-GLOW-Transparent-7.png" onclick="gotohome()"></img>

        <button 
        class="button_white button_top">
        <a 
        style="
        background: none;
        color: var(--color_blue);
        "
        href="https://calendly.com/careerglowcoachingwithanna/30min?month=2025-05" target="_blank">Book a free consultation</a>
        </button>


        <!--<div class="topcontactdet"><contact-det></contact-det></div>
        -->

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
        <h1 class="inspiquote">We help you make a Career Change to <span style="color: var(--color_blue)">feel good</span>,
        <br>
         not only look good. 
       </h1>
         

<br><br>


<div style="text-align: center;">
<ul>
        <li>Do you feel like your golden handcuffs are holding you back?</li>
        <li>Do you want to make a change but don't know where to start?</li>
        <li>Is self-doubt or imposter syndrome getting in your way?</li>
        <li>Do you want to update your priorities and start doing what you actually enjoy?</li>
        <li>Are you scared of starting over?</li>
</ul>
</div>

<br><br><br>

<button class="button1" type="button" onclick="location.href = 'https://calendly.com/careerglowcoachingwithanna/30min?month=2025-05';">Book a free consultation</button>
`
        }
}
customElements.define('elem-landing', landing)

class about extends HTMLElement {
        connectedCallback() {
                this.innerHTML = `
<link href="style_about.css" rel="stylesheet">
<link href="style_aboutandoffer.css" rel="stylesheet">
<div style="background-image: linear-gradient(to right,#65a0af,#87afb9,#65a0af);border-radius: 50px;margin: 20px;max-width: 1200px;margin-left: auto;margin-right: auto;">
        

<div class="aboutcontainer">
        

        <h1 class="aboutabout">ABOUT</h1>

        <!--
        <img src="https://i.postimg.cc/zXXtMnBf/IMG-2096-copy-1500.png" 
        class="aboutgridimage">
        -->

        <img src="https://i.postimg.cc/CxbKQMjG/Untitled-Linked-In-Post-copy.png" 
        class="aboutgridimage">

        <div class="aboutgrid">

                <h1 class="aboutgridsloth1_1" >
                Meet Anna Cieslowska, 
                <br>Professional Career Coach</h1>

                

                <h3 class="aboutgridsloth2_1" >
                 Career change specialist qualified in:
                 <br>
                 <br>
                •Professional Diploma in Coaching & Mentoring
                 <br>
                 •MSc in Management Information and Managerial Accounting Systems
                 <br>
                •BA in Economics (Through Transformational Learning). 
                <br>
                <br>
                Anna has developed her own framework to guide ambitious mid-career professionals in their career change. She knows firsthand what it takes, as she has shifted careers 3 times and has successfully helped dozens of clients do the same.
                </h2>
                 
        </div>

         <br><br>       

        <h2 class="aopromise"> Anna C. Career Glow provides a professional, confidential and safe space to take ownership of your future & make THAT move to grow an authentic and meaningful career. We apply our proven process & tailor it for your needs to create a long-lasting career fulfillment.  
        <br>
        We specialize in:</h2>

        <div class="specs">
                <ul style="width: 90%;">
                         <li class="specsli">
                                Career Changes and Transitions
                        </li>
                </ul>
        </div>

        <div class="specs">
                <ul style="width: 90%;">
                        <li class="specsli">
                                Job Satisfaction and Fulfillment 
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
                <link href="style_aboutandoffer.css" rel="stylesheet">
<link href="style_offer.css" rel="stylesheet">

<div class="offermastercontainer">

        <!--<h1 class="offerh1">WHAT WE OFFER:</h1>-->

        <div class="offersection_left">
                <img class="offerimage" src="https://i.postimg.cc/NMfZrYx8/pexels-samerdaboul-2080544.jpg">
                <div class="offergradient_left"></div>
                <div class="offer_text_left">1.Navigate your strengths and values</div>
        </div>
        
        <div class="offersection_right">
                <img class="offerimage" src="https://i.postimg.cc/gcsVQjnc/2-webinars.jpg">
                <div class="offergradient_right"></div>
                <div class="offer_text_right">2.Identify your transferable skills</div>
        </div>

        <div class="offersection_left">
                <img class="offerimage" src="https://i.postimg.cc/VLyJ7cFs/3-goals.jpg">
                <div class="offergradient_left"></div>
                <div class="offer_text_left">3.Clarify your expectations and goals</div>
        </div>

        <div class="offersection_right">
                <img class="offerimage" src="https://i.postimg.cc/1z3PWgFh/4-skill-gap.jpg">
                <div class="offergradient_right"></div>
                <div class="offer_text_right">4.Implement a proven strategy</div>
        </div>

        <div class="offersection_left">
                <img class="offerimage" src="https://i.postimg.cc/FzPSsbHg/pexels-ron-lach-9841329.jpg">
                <div class="offergradient_left"></div>
                <div class="offer_text_left">5.Receive job search and application support</div>
        </div>

        <div class="offersection_right">
                <img class="offerimage" src="https://i.postimg.cc/vmzZsYB5/pexels-cottonbro-5989943.jpg">
                <div class="offergradient_right"></div>
                <div class="offer_text_left">6.Optimise your CV, Cover Letter and LinkedIn profile</div>
        </div>

        <div class="offersection_left">
                <img class="offerimage" src="https://i.postimg.cc/g2sCcnVc/pexels-fauxels-3184465.jpg">
                <div class="offergradient_left"></div>
                <div class="offer_text_right">7.Interview preparation and tips </div>
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

<h1 style="color: var(--color_black);">So, how does that work? 
<br>
You don't need to take the plunge, we support you to plan (strategically):</h1>

<div class="grid_services" >

<!--

<div  class="servicescont_R" >
        <h2>One to One Individual Coaching Sessions (Live Online)</h2>
        <div class="services_inner">
        <p>Individually tailored coaching to accelerate your career journey.Career Glow specialises in Career Transitions,  Mid and Early career coaching.</p>
        <h3>Standard Cost (1 hour session):		€110</h3>

        <button class="button_white" type="button" onclick="location.href = 'contact.html';">Book your introductory call today!</button>
        </div>
</div>

-->

<div class="servicescont_L" >
        <h2>The Ultimate Career Change Package</h2>
        <p>This all-inclusive 3-month package for Career Changers will empower you to:</p>
         <ul class="ul_services_R" >
                <li class="li_services">   Navigate your values and strengths</li>
                <li class="li_services">  Identify your transferable skills and build confidence</li>
                <li class="li_services">  Identify your non-negotiables and job expectations</li>
                <li class="li_services">  Identify and narrow down your jobs of interest</li>
                <li class="li_services">  Develop actionable steps needed for your career pivot</li>
                <li class="li_services">  Use different tactics and strategies for your job search</li>
                <li class="li_services">  Position yourself as the right candidate with industry-ready CV, converting cover letter and seamless social media presence</li>
                <li class="li_services">  Navigate the interview process to your advantage and negotiate your salary</li>
        </ul>
        <p style="text-align: left;"> The delivery:
        <br>
        <br>
        • 6 value-packed 1:1 sessions with Anna, a qualified coach, specializing in helping mid-career professionals in their career changes
        <br> • High-touch support at times of need outside of the sessions through WhatsApp/ Email
        <br> • Additional resources and worksheets to provide you with quality results
        <br> • Ongoing email support until your ideal job is secured </p>
      
       <p> *Payment plans available</p>
        <h3>Ready to finally make that move? 
        <br>
        Book a free consultation below to meet Anna and get started.</h3>
        

        <button class="button_white" type="button" onclick="location.href = 'https://calendly.com/careerglowcoachingwithanna/30min?month=2025-05';">Book a free consultation</button>
</div>

<!--

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
                <li class="li_services">Proven tools & techniques essential for job seekers.</li>
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

-->

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

        <h2 style="color: var(--color_blue); font-size: 300%;">Our Testimonials:</h2>

<div class="slideshow-container">

        <div class="mySlides fade">

          <div class="text">Anna was very approachable and even on our 1st appointment she asked me some very key questions that made me realise straight away that I didn't only need help with job search or CV, but I wanted to take up a new path entirely. She was very knowledgeable and her methods made my career change exciting and re-assuring. I wouldn't have the knowledge, tools or the confidence to make the move otherwise! -Or at least not as quickly as I did! </div>
        </div>

        <div class="mySlides fade">

          <div class="text"> Anna was extremely efficient, helpful and supportive. She highlighted my strengths and values, which has made it easier for me to search for a suitable job. We discussed various avenues of job searching and she encouraged me to apply in ways I hadn't previously. I am extremely satisfied with our sessions!</div>
        </div>

        <div class="mySlides fade">

          <div class="text"> I found Anna's attention to detail regarding amendments to my CV, and her ideas of how to find suitable employment excellent. She puts a lot of preparation and thought into her work, and I look forward to putting her suggestions into practise and securing my ideal position. I would be a lot more confidant of success after working with her.</div>
        </div>
      
        
      
        <div class="mySlides fade">

          <div class="text">I had the pleasure of working with Anna and she was an incredible help throughout my job search journey. She guided me in identifying the type of job that truly suited me, helping me understand what I was willing to compromise on and what was most important to me. Her advice on adjusting my CV was invaluable, making it much more effective and targeted. She also provided excellent support in preparing for interviews, giving me the confidence I needed to perform well. Throughout the entire process, Anna was emphatetic, supportive and always knew the right words to keep my motivation high. Thanks to her guidance I received two job offers in just a month! I highly recommend her to anyone looking for a skilled and compassionate career coach!</div>
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

        <elem-offer class="aooffer"></elem-offer>
        <elem-about class="aoabout"></elem-about>
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
  

  <a class="socialslink" href="https://www.linkedin.com/in/anna-cieslowska-36872b167?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
    <img  class="socialsimage" src="https://i.postimg.cc/sDvsr0BX/in.png">
  </a>

  <a class="socialslink" href="https://www.facebook.com/profile.php?id=61575148085329#">
    <img  class="socialsimage" src="https://i.postimg.cc/x1mQkJ3V/fb.png">
  </a>

  <a class="socialslink" href="https://www.instagram.com/careerglowcoachingwithanna?igsh=Y2F1MXc1Nmx1N2k=">
   <img  class="socialsimage" src="https://i.postimg.cc/k5dmWJT6/insta.png">
  </a>
</div>
                    `
        }
}
customElements.define('elem-socials', socials)


class fixedimage extends HTMLElement {
        connectedCallback() {
                this.innerHTML = `

                    `
        }
}
customElements.define('elem-fixedimage', fixedimage)


//var serviceelems;

//var serviceelems_R = document.getElementsByClassName('servicescont_R','servicescont_L')



function scrollto(elem) {
        // elem.scrollIntoView({ behavior: "smooth",  block: "center", inline: "nearest" });


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

function ScrollDisable() {
        var x = window.scrollX;
        var y = window.scrollY;
        window.onscroll = function () { window.scrollTo(x, y); };
}

function ScrollEnable() {
        window.onscroll = function () { };
}



function openhamburger() {

        var toplinks = document.getElementById("topliniks");
        var hamdisplay = toplinks.style.display;
        if (hamdisplay === "none" || hamdisplay === "") { toplinks.style.display = "inline-grid"; } else { toplinks.style.display = "none"; }
}

function closemodal() {

        modal.style.display = "none";
        ScrollEnable();

}

function gotohome() {
        window.location.href = "index.html"
}



/*function animatefavicon() {
        setInterval(changefavicon, 1500);
};

let faviconIndex = 0
function changefavicon() {

        var favicon = document.getElementById("favicon");

        if (faviconIndex === 0 || faviconIndex === undefined || faviconIndex === null) { favicon.href = "https://lh3.googleusercontent.com/pw/AP1GczPX18yMuqjJ4-vbfk2Vx6NP834TKuPp1lNnU8JVbE1SVP2Ys3e-4KxuuGAYlvK_OfzWFby00XahAxszGGr92Nb4BckQMUrp4PARj-S1k77VvKJ9mPPwHlzpDLw7DM1oxs6SzLoL-sKsvDqcP5RG4jtb=w16-h16-s-no?authuser=0"; faviconIndex = 1 }

        else if (faviconIndex === 1) { favicon.href = "https://lh3.googleusercontent.com/pw/AP1GczM3HM-W0CZV8M-ua9fhCsZ0pYT9kD9Pefo0jjzdw0DwZv0L7PU-6Y9cd5w5VdQXDBLFbGpmAhSA8Nil_oaRNkoLQcodqcgIT4GMg-zhR4tZH2kv3v2DPH_ML7Fr6kPqQOCraRsqWHY0MmuzdoO-HGsm=w16-h16-s-no?authuser=0"; faviconIndex = 2 }

        else if (faviconIndex === 2) { favicon.href = "https://lh3.googleusercontent.com/pw/AP1GczPX18yMuqjJ4-vbfk2Vx6NP834TKuPp1lNnU8JVbE1SVP2Ys3e-4KxuuGAYlvK_OfzWFby00XahAxszGGr92Nb4BckQMUrp4PARj-S1k77VvKJ9mPPwHlzpDLw7DM1oxs6SzLoL-sKsvDqcP5RG4jtb=w16-h16-s-no?authuser=0"; faviconIndex = 3 }

        else if (faviconIndex === 3) { favicon.href = "https://lh3.googleusercontent.com/pw/AP1GczOS-_FEz1XvtWgXI1w6TcvPSu8rgIiQ2ShC-4y52bDppCNJ_qh3ZCI5urYY6mwiPDRVS_PdSXKOmnONQopYWApSSRnHofiiRg0vJZ3mj5PyQwKA6pY=s16-p-k"; faviconIndex = 0 }


}*/

function scrollimage() {
        var image = document.getElementById('welcomeimage')
        image.style.opacity = 1-((window.scrollY-150)/(window.innerHeight*0.5));
        console.log(window.scrollY,)
}
window.onscroll= scrollimage;


//window.onload = animatefavicon(); 
