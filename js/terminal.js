// MENU BUTTONS AUDIO
var aboutQuadrithmAudio = document.getElementById("aboutQuadrithmAudio"); 
var specialisationAudio = document.getElementById("specialisationAudio"); 
var classifiedAudio = document.getElementById("classifiedAudio"); 
var assignMissionAudio = document.getElementById("assignMissionAudio"); 

// THIS VARIABLE WILL BE USED TO BLUR THE BACKGROUND ON MOBILE
var menuBackground = document.getElementById("menuBlur"); 

// VARIABLES FOR MENU BLUR WHICH WILL BE NEEDED IN ALL JS FILES
var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'));
collapseElementList[2].addEventListener('show.bs.collapse', function () {
		// do something...
			menuBackground.setAttribute('class', 'blur');
});
collapseElementList[2].addEventListener('hide.bs.collapse', function () {
		// do something...
			menuBackground.setAttribute('class', '');
});

// VARIABLES FOR MENU BUTTONS
var findOutMore = document.getElementById("buttonOne");
var quadrithmSpecilisations = document.getElementById("buttonTwo");
var classifiedMissions = document.getElementById("buttonThree");
var assignMission = document.getElementById("buttonFour");

// VARIABLES FOR THE TERMINAL
const glitchOverlay = document.getElementById('glitchOverlay'); 
var assignMissionButton = document.getElementById('assignMission');

// VARIABLES FOR CONTACT PAGE
const outputDiv = document.getElementById('output');
const cursor = document.querySelector('.cursor');
const lines = [
    "Connecting to a secure server...",
    "Encrypting phone line...",
    "Access granted. Welcome, visitor...",
    "Use the button below to assign a mission to the team...",
    "You have the license to spill..."
];

let lineIndex = 0;
let charIndex = 0;
let typingSpeed = 50; // milliseconds

// CODE FOR CONTACT US PAGE;
document.addEventListener('DOMContentLoaded', () => {
    typeLine();
	triggerGlitch(800, 'random');
	showAssignButton();
});

// VARIABLES FOR CONTACT PAGE;
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

// THIS CODE IS NEEDED FOR PAGES WITH MODALS
window.addEventListener('hide.bs.modal', event => {
    event.target.inert = true
})

window.addEventListener('show.bs.modal', event => {
    event.target.inert = false
})

// CODE FOR MENU BUTTONS NEEDED IN ALL JS FILES
findOutMore.addEventListener("mouseover", playAboutQuadrithmAudio);
findOutMore.addEventListener("mouseout", function (){
	aboutQuadrithmAudio.pause();
	aboutQuadrithmAudio.currentTime = 0;
});

quadrithmSpecilisations.addEventListener("mouseover", playSpecialisationAudio);
quadrithmSpecilisations.addEventListener("mouseout", function(){
	specialisationAudio.pause();
	specialisationAudio.currentTime = 0;
});

classifiedMissions.addEventListener("mouseover", playClassifiedAudio);
classifiedMissions.addEventListener("mouseout", function(){
	classifiedAudio.pause();
	classifiedAudio.currentTime=0;
});

assignMission.addEventListener("mouseover", playAssignMissionAudio);
assignMission.addEventListener("mouseout", function(){
	assignMissionAudio.pause();
	assignMissionAudio.currentTime=0;
});


// THIS CODE IS FOR TERMINAL TEXT
function typeLine() {
    if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
            outputDiv.textContent += lines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeLine, typingSpeed);
        } else {
            outputDiv.textContent += '\n'; // Add a new line after each message
            lineIndex++;
            charIndex = 0;
            setTimeout(typeLine, 1000); // Pause before next line
        }
    } else {
        cursor.style.display = 'none';
    }
}

// SHOWS THE ASSIGN BUTTON IN THE TERMINAL
function showAssignButton (){

	wakeTimeout = setTimeout(function(){
		assignMissionButton.style.display = 'block';
		assignMissionButton.classList.add('animate__animated', 'animate__fadeIn');
	},10000);	
}

// TRIGGERS THE GLITCH EFFECT THAT APPEARS ON THE TERMINAL
function triggerGlitch(duration = 500, type = 'normal') {
	terminalContainer.classList.add('glitch-active');
	// playStatic(); // Play static sound during glitch

	if (type === 'random') {
		const types = ['normal', 'scanline', 'rgb'];
		type = types[Math.floor(Math.random() * types.length)];
	}

	if (type === 'scanline') {
		terminalContainer.classList.add('glitch-scanline');
	} else if (type === 'rgb') {
		terminalContainer.classList.add('glitch-rgb-split');
	}

	setTimeout(() => {
		terminalContainer.classList.remove('glitch-active');
		terminalContainer.classList.remove('glitch-scanline');
		terminalContainer.classList.remove('glitch-rgb-split');
	}, duration);
}

// PLAYS THE ABOUT QUADRITHM AUDIO
function playAboutQuadrithmAudio(){
	aboutQuadrithmAudio.play();
}

// PLAYS THE SPECIALISATION AUDIO
function playSpecialisationAudio(){
	specialisationAudio.play();
}

// PLAYS THE CLASSIFIED AUDIO FOR THE MISSIONS COMPLETED MENU BUTTON
function playClassifiedAudio(){
	classifiedAudio.play();
}

// PLAYS THE ASSIGN MISSION AUDIO FOR THE CONTACT PAGE
function playAssignMissionAudio(){
	assignMissionAudio.play();
}

// PLAYS THE ABOUT ACCESS DENIED AUDIO FOR THE MISSIONS COMPLTED PAGE;
function playAccessDeniedAudio(){
	accessDeniedAudio.play();
}

