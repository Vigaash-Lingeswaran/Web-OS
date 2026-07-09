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

var welcomeScreen = document.querySelector("#Welcome")
var welcomescreenclose = document.querySelector("#Welcomeclose")
var welcomescreenopen= document.querySelector("#Welcomeopen")


function closewindow(element)
{
    element.style.display = "none"
}

function openwindow (element)
{
    element.style.display = "flex-direction: column";
    Biggestindex++;
    element.style.zIndex =Biggestindex;
    topbar.style.zIndex = Biggestindex + 1;
}

welcomescreenclose.addEventListener("click",

function ()
{
    closewindow(welcomeScreen);
}
);

welcomescreenopen.addEventListener("click",

function ()
{
    openwindow(welcomeScreen);
}
);

var selectedIcon = undefined


function selectIcon(element)
{
  element.classList.add("Selected")
  selectedIcon = element
}

function deselectIcon (element)
{
  element.classList.remove("Selected")
  selectedIcon = undefined
}

function handleicontap(element)
{
  if(element.classList.contains("selected"))
    {
      deselectIcon(element)
      openwindow(window)
    }
  else
    {
      selectIcon(element)
    }
}

dragElement(document.querySelector("#ranker"))

var rankerscreen = document.querySelector("ranker")
var rankerscreenclose = document.querySelector("rankerclose")

rankerscreenclose.addEventListener ("click", 
  () => closewindow(rankerscreen)
);

var Biggestindex =1;

function addWindowTapHandling (element)
{
  element.addEventListener("mousedown", () =>
    handleWindowtap(element)
  )
}

function addWindowTapHandling (welcomeScreen)
{
  welcomeScreen.addEventListener("mousedown", () =>
    handleWindowtap(element)
  )
}

function addWindowTapHandling (rankerscreen)
{
  rankerscreen.addEventListener("mousedown", () =>
    handleWindowtap(element)
  )
}

function handleWindowtap (element)
{
  Biggestindex++;
  element.style.zIndex = Biggestindex;
  topbar.style.zIndex = Biggestindex + 1;
  deselectIcon(selectedIcon)
}

var topbar = document.querySelector("#top")
