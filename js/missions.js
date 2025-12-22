// MENU BUTTONS AUDIO
var qassandraIntro = document.getElementById("qassandraIntro"); 
var aboutQuadrithmAudio = document.getElementById("aboutQuadrithmAudio"); 
var specialisationAudio = document.getElementById("specialisationAudio"); 
var classifiedAudio = document.getElementById("classifiedAudio"); 
var assignMissionAudio = document.getElementById("assignMissionAudio"); 

// THIS VARIABLE WILL BE USED TO BLUR THE BACKGROUND ON MOBILE
var menuBackground = document.getElementById("menuBlur"); 

// ACCESS DENIED AUDIO AND BUTTON VARIABLES
var accessDeniedAudio = document.getElementById("accessDeniedAudio"); 
var accessDeniedButton = document.getElementById("missionsFolder"); 


// VARIABLES FOR MENU BUTTONS
var findOutMore = document.getElementById("buttonOne");
var quadrithmSpecilisations = document.getElementById("buttonTwo");
var classifiedMissions = document.getElementById("buttonThree");
var assignMission = document.getElementById("buttonFour");

accessDeniedButton.addEventListener("click", playAccessDeniedAudio); // CODE FOR MISSIONS COMPLETED PAGE;


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

