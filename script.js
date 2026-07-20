function updatetime()
        {
            var currentTime = new Date().toLocaleString();
            var timeText = document.querySelector("#timeElement");
            timeText.innerHTML = currentTime;
        }
  
        setInterval(updatetime, 1000);

dragElement(document.getElementById("Welcome"));

function dragElement(element) {
  
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

 
  if (document.getElementById(element.id + "header")) {
    
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    element.onmousedown = startDragging;
  }

  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var welcomescreen = document.querySelector("#Welcome")
var welcomescreenclose = document.querySelector("#Welcomeclose")
var welcomescreenopen= document.querySelector("#Welcomeopen")


function closewindow(element)
{
    element.style.display = "none"
}

function openwindow(element)
{
    element.style.display = "flex";
    element.style.flexDirection = "column";
    Biggestindex++;
    element.style.zIndex =Biggestindex;
    topbar.style.zIndex = Biggestindex + 1;
}

welcomescreenclose.addEventListener("click",

function ()
{
    closewindow(welcomescreen);
}
);

welcomescreenopen.addEventListener("click",

function ()
{
    openwindow(welcomescreen);
}
);

var selectedIcon = undefined


function selectIcon(element)
{
  element.classList.add("Selected");
  selectedIcon = element
}

function deselectIcon(element)
{
  element.classList.remove("Selected");
  selectedIcon = undefined
}

function handleicontap(element, window)
{
  if(element.classList.contains("Selected"))
    {
      deselectIcon(element);
      openwindow(window);
    }
  else
    {
      selectIcon(element);
    }
}

dragElement(document.querySelector("#ranker"))

var rankerscreen = document.querySelector("#ranker")
var rankerscreenopen = document.querySelector("#DesktopApp1")
var rankerscreenclose = document.querySelector("#rankerclose")

rankerscreenclose.addEventListener ("click", 
  function() 
  {
    closewindow(rankerscreen);
  }
);

rankerscreenopen.addEventListener ("click", 
  function() 
  {
    openwindow(rankerscreen);
  }
);

var Biggestindex =1;

function addWindowTapHandling (element)
{
  element.addEventListener("mousedown",
    function ()
    {
      handleWindowtap(element);
    }
  )
}

function handleWindowtap(element)
{
  Biggestindex++;
  element.style.zIndex = Biggestindex;
  topbar.style.zIndex = Biggestindex + 1;
  deselectIcon(selectedIcon)
}

var topbar = document.querySelector("#top")


var content = 
[
  {

    title: "Welcome", 
    date: "07/7/2026",
    content:`
                <p contenteditable="True">
                <p contenteditable="True" style =" text-align: center; justify-content: center; color: #6f0000">
                  This is the place for your personal <strong>Tamil Cinema</strong> <i>notes</i>! 
                    <br>
                    Any Tamil Movie you come across, <dfn>write about</dfn> it here using <i> Kollywood Notes </i>
                    <br>
                </p>
            </p>
          `
   }, 
   {
      title: 'Movie Notes',
      date: "07/9/2026",
      content:`
                <p contenteditable= "True" style = "color: #6f0000;">
                  Here's some notes on some good Tamil Movies!
                  <br>
                  Tamil cinema is celebrated for its gripping storytelling, high-energy music, and deep emotional resonance. For a first-time viewer, the key is balancing epic classics with approachable modern thrillers and comedies. Expect a mix of stylized action, strong morality, and unique genre-blending. 
                  <br>
                  <br>
                  <strong>Key Actors:</strong><br> M. G. Ramachandran (MGR), Sivaji Ganesan, Rajinikanth, Kamal Haasan, Vijay, Ajith Kumar, Suriya, Vikram, Dhanush, Karthi, Vijay Sethupathi, Sivakarthikeyan, Silambarasan, Vijayakanth, Sathyaraj.
                  <br>
                  <br>
                  <strong>Mani Ratnam</strong>: Known for his visual poetry, non-linear storytelling, and masterful use of music.Must-Watch: 
                    <br>&emsp;&emsp;&emsp;<dfn>Nayagan (1987)</dfn> – A gritty, sprawling tale of a young man who becomes a revered mafia don in Mumbai.
                    <br>&emsp;&emsp;&emsp;Bonus: <dfn>Mouna Ragam (1986)</dfn> – A beautifully nuanced romance about an arranged marriage.
                    <br>&emsp;&emsp;&emsp;<dfn>Thalapathi (1991)</dfn>: A loose retelling of the Mahabharata set in a gritty, modern urban backdrop, featuring a massive clash of acting titans, Rajinikanth and Mammootty.
                    <br>&emsp;&emsp;&emsp;<dfn>Ponniyin Selvan (Part 1 & 2)</dfn>: A massive historical epic and visual spectacle based on the classic Tamil novel, detailing Chola dynasty politics and power struggles.
                    <br>
                  <br><strong>Bharathiraja:</strong> The pioneer of moving the camera out of the studios and into authentic, rustic rural landscapes.
                    <br>&emsp;&emsp;&emsp;Must-Watch: <dfn>16 Vayathinile (1977)</dfn> – A landmark film that revolutionized village-based cinema, exploring the struggles and vulnerabilities of a 16-year-old schoolgirl.
                  <br>
                  <br>
                  <strong>K.S. Ravikumar:</strong> A master of commercial blockbusters, family dramas, and impeccable comedic timing.
                    <br>&emsp;&emsp;&emsp;Must-Watch: <dfn>Padayappa (1999)</dfn> – The quintessential Tamil commercial film featuring high-stakes drama and one of Tamil cinema's greatest rivalries.
                  <br>


                
                    </p>
              `
   },
   {
      title: 'Music Notes',
      date: "07/10/2026",
      content:`
                <p contenteditable= "True" style = "color: #6f0000;">
                  Here's some notes on some good Tamil Music!
                  <br>
                  Tamil film music is a rich, highly influential global industry that blends Carnatic classical roots, Indian folk, and Western symphonic arrangements. The genre is categorized by legendary composers whose evolution over the decades has shaped modern South Asian pop culture.
                <br>
                <br>
                <strong> Key Music Composers: </strong>
                <br>
                <br>
                <strong>M.S. Viswanathan (MSV):</strong> Known as the "King of Melody," MSV defined Tamil cinema's golden age in the 1960s and 70s. His music is deeply theatrical, blending classical ragas with Western jazz and cabaret elements, often featuring rich orchestral strings.
                <br>&emsp;&emsp;&emsp;<dfn>Aval Oru Navarasa Nadagam</dfn> (from Ulagam Sutrum Valiban)
                <br>&emsp;&emsp;&emsp;<dfn>Engeyum Eppodhum</dfn> (from Ninaithathai Mudippavan)
                <br>&emsp;&emsp;&emsp;<dfn>Chippiyirukkuthu</dfn> (from Varumayin Niram Sivappu)
                <br>
                <br>
                <strong>Ilaiyaraaja:</strong> A musical genius who revolutionized Tamil film scoring in the late 70s and 80s. Ilaiyaraaja seamlessly integrated traditional Indian folk instruments and Carnatic classical music with Western symphonic orchestration and deep basslines.
                <br>&emsp;&emsp;&emsp;<dfn>En Iniya Pon Nilave</dfn> (from Moodu Pani)
                <br>&emsp;&emsp;&emsp;<dfn>Sangathil Paadatha</dfn> (from Auto Raaja)
                <br>&emsp;&emsp;&emsp;<dfn>Valai Osai</dfn> (from Sathya)
                <br>
                <br>
                <strong>A.R. Rahman:</strong> The "Mozart of Madras" changed the global landscape of Indian film music in the 1990s. Rahman brought synthesisers, global rhythms, Sufi influences, and pristine vocal production to the forefront of Tamil music.
                <br>&emsp;&emsp;&emsp;<dfn>Chinna Chinna Aasai </dfn> (from Roja)
                <br>&emsp;&emsp;&emsp;<dfn>Nenjukkule</dfn> (from Kadal)
                <br>&emsp;&emsp;&emsp;<dfn>Vennilave Vennilave</dfn> (from Minsara Kanavu)
                <br>
                <br>
                <strong>Harris Jayaraj:</strong> The king of smooth, ultra-modern romance in the 2000s and 2010s. Harris is famous for his atmospheric synthesizer sounds, addictive acoustic guitar plucks, and seamless blend of R&B and Tamil melodies.
                <br>&emsp;&emsp;&emsp;<dfn>Vaseegara</dfn> (from Minnale)
                <br>&emsp;&emsp;&emsp;<dfn>June Ponal</dfn> (from Unnale Unnaale)
                <br>&emsp;&emsp;&emsp;<dfn>Nenjukkul Peidhidum</dfn> (from Vaaranam Aayiram)
                <br>
                <br>
                <strong>Anirudh Ravichander:</strong> The reigning rockstar of the modern era. Anirudh exploded onto the scene with high-energy "kuthu" (folk) beats, lo-fi heartbreak anthems, and massive theatrical stadium anthems.
                <br>&emsp;&emsp;&emsp;<dfn>Idhazhin Oram</dfn> (from 3)
                <br>&emsp;&emsp;&emsp;<dfn>Arabic Kuthu</dfn> (from Beast)
                <br>&emsp;&emsp;&emsp;<dfn>Naa Ready</dfn> (from Leo)


                  </p>
              `
   }
]

function setnotescontent(index)
{
  var notescontent = document.querySelector("#notescontent")

  notescontent.innerHTML = content[index].content
}

setnotescontent(0)


function addtosidebar(index)
{
  var sidebar = document.querySelector("#sidebar");
  var note = content[index];
  var newdiv = document.createElement('div');
  
  newdiv.innerHTML = `
    <p style = "margin: 0px">
      ${note.title}
    </p>
    <p style = "font-size: 14px; margin: 0px"
      ${note.date}
    </p>
  `

  newdiv.addEventListener("click",
  
    function()
    {
      setnotescontent(index)
    }
  
    )

  sidebar.appendChild(newdiv)

}

for (let i=0; i<content.length; i++)
{
  addtosidebar(i);
}


var snakescreen = document.querySelector("#snakegame")
var snakescreenopen = document.querySelector("#DesktopApp2")
var snakescreenclose = document.querySelector("#snakeclose")
var snakeplay = document.querySelector("#playbutton")

snakescreenclose.addEventListener ("click", 
  function() 
  {
    closewindow(snakescreen);
  }
);

snakescreenopen.addEventListener ("click", 
  function() 
  {
    openwindow(snakescreen);
  }
);

dragElement(document.querySelector("#snakegame"))

var breakoutscreen = document.querySelector("#Breakoutgame")
var breakoutscreenopen = document.querySelector("#DesktopApp3")
var breakoutscreenclose = document.querySelector("#breakoutclose")

breakoutscreenclose.addEventListener ("click", 
  function() 
  {
    closewindow(breakoutscreen);
  }
);

breakoutscreenopen.addEventListener ("click", 
  function() 
  {
    openwindow(breakoutscreen);
  }
);

dragElement(document.querySelector("#Breakoutgame"))
