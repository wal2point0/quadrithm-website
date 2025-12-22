// Specialisation Audio
var audio = document.getElementById("myAudio");

// Toggle play/pause buttons
var walThreePoint0Button = document.getElementById("walThreePoint0Intro");
var brandonButton = document.getElementById("brandonIntro");
var emanButton = document.getElementById("emanIntro"); 

// the text under the buttons variables
var playButtonOneText = document.getElementById("playButtonOne");
var playButtonTwoText = document.getElementById("playButtonTwo");
var playButtonThreeText = document.getElementById("playButtonThree"); 

// MENU BUTTONS AUDIO
var aboutQuadrithmAudio = document.getElementById("aboutQuadrithmAudio"); 
var specialisationAudio = document.getElementById("specialisationAudio"); 
var classifiedAudio = document.getElementById("classifiedAudio"); 
var assignMissionAudio = document.getElementById("assignMissionAudio"); 

// VARIABLES FOR MENU BUTTONS
var findOutMore = document.getElementById("buttonOne");
var quadrithmSpecilisations = document.getElementById("buttonTwo");
var classifiedMissions = document.getElementById("buttonThree");
var assignMission = document.getElementById("buttonFour");

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


// Media query variables
var mediaQuery = window.matchMedia("(max-width: 768px)"); 
var checkTablet = window.matchMedia('(min-width: 769px) and (max-width: 992px)');
var checkDesktop = window.matchMedia('(min-width: 993px) and (max-width: 1200px)');

// timeout variable used to set a time for when the audio buttons should appear;
var audioTimeout;

// detects when the window size changes and calls the appropriate function
mediaQuery.addEventListener("change", checkScreenSize(mediaQuery));



   
// Toggle play/pause button function
playAudio();
function playAudio (){
    var playButton = document.getElementById('walThreePoint0Intro');
    let isPlaying = false;

    playButton.addEventListener('click', () => {
        isPlaying = !isPlaying;
        audio.paused = !audio.paused;

        playButton.innerHTML = isPlaying ? '<i class="bi bi-pause-fill fs-1"></i>' : '<i class="bi bi-play-fill fs-1"></i>';
        audio.paused ? audio.play() : audio.pause();

        audio.addEventListener("ended", function(){
            audio.currentTime = 0;
            console.log("ended");
            playButton.innerHTML = '<i class="bi bi-play-fill fs-1"></i>';
            isPlaying = false;
        });
    });
}

// this function decides when the buttons should appear on larger desktops
function showAudioButtonsDesktopLarge () {

    	audioTimeout = setTimeout(function(){
		walThreePoint0Button.style.display = 'inline-block';
        playButtonOneText.style.display = 'block';
		walThreePoint0Button.classList.add('animate__animated', 'animate__bounceInDown');
        playButtonOneText.classList.add('animate__animated', 'animate__bounceInDown');


        walThreePoint0Button.onanimationend = () => {
        brandonButton.style.display = 'inline-block';
        playButtonTwoText.style.display = 'block';
		walThreePoint0Button.classList.remove('animate__animated', 'animate__bounceInDown');
        playButtonOneText.classList.remove('animate__animated', 'animate__bounceInDown');
		brandonButton.classList.add('animate__animated', 'animate__bounceInDown');
        playButtonTwoText.classList.add('animate__animated', 'animate__bounceInDown');

	  };
      
        brandonButton.onanimationend = () => {
        emanButton.style.display = 'inline-block';
        playButtonThreeText.style.display = 'block';
		brandonButton.classList.remove('animate__animated', 'animate__bounceInDown');
        playButtonTwoText.classList.remove('animate__animated', 'animate__bounceInDown');
		emanButton.classList.add('animate__animated', 'animate__bounceInDown');
        playButtonThreeText.classList.add('animate__animated', 'animate__bounceInDown');
	  };

      emanButton.onanimationend = () => {
        emanButton.classList.remove('animate__animated', 'animate__bounceInDown');
        playButtonThreeText.classList.remove('animate__animated', 'animate__bounceInDown');
      }
    
	},33000);	

}

// this function decides when the buttons should appear on desktop
function showAudioButtonsDesktop () {

    	audioTimeout = setTimeout(function(){
		walThreePoint0Button.style.display = 'inline-block';
        playButtonOneText.style.display = 'block';
		walThreePoint0Button.classList.add('animate__animated', 'animate__bounceInDown');
        playButtonOneText.classList.add('animate__animated', 'animate__bounceInDown');


        walThreePoint0Button.onanimationend = () => {
        brandonButton.style.display = 'inline-block';
        playButtonTwoText.style.display = 'block';
		walThreePoint0Button.classList.remove('animate__animated', 'animate__bounceInDown');
        playButtonOneText.classList.remove('animate__animated', 'animate__bounceInDown');
		brandonButton.classList.add('animate__animated', 'animate__bounceInDown');
        playButtonTwoText.classList.add('animate__animated', 'animate__bounceInDown');

	  };
      
        brandonButton.onanimationend = () => {
        emanButton.style.display = 'inline-block';
        playButtonThreeText.style.display = 'block';
		brandonButton.classList.remove('animate__animated', 'animate__bounceInDown');
        playButtonTwoText.classList.remove('animate__animated', 'animate__bounceInDown');
		emanButton.classList.add('animate__animated', 'animate__bounceInDown');
        playButtonThreeText.classList.add('animate__animated', 'animate__bounceInDown');
	  };

      emanButton.onanimationend = () => {
        emanButton.classList.remove('animate__animated', 'animate__bounceInDown');
        playButtonThreeText.classList.remove('animate__animated', 'animate__bounceInDown');
      }
    
	},50000);	

}

// this function decides when the buttons should appear on tablets
function showAudioButtonsTablet () {

    	audioTimeout = setTimeout(function(){
		walThreePoint0Button.style.display = 'inline-block';
        playButtonOneText.style.display = 'block';
		walThreePoint0Button.classList.add('animate__animated', 'animate__bounceInDown');
        playButtonOneText.classList.add('animate__animated', 'animate__bounceInDown');


        walThreePoint0Button.onanimationend = () => {
        brandonButton.style.display = 'inline-block';
        playButtonTwoText.style.display = 'block';
		walThreePoint0Button.classList.remove('animate__animated', 'animate__bounceInDown');
        playButtonOneText.classList.remove('animate__animated', 'animate__bounceInDown');
		brandonButton.classList.add('animate__animated', 'animate__bounceInDown');
        playButtonTwoText.classList.add('animate__animated', 'animate__bounceInDown');

	  };
      
        brandonButton.onanimationend = () => {
        emanButton.style.display = 'inline-block';
        playButtonThreeText.style.display = 'block';
		brandonButton.classList.remove('animate__animated', 'animate__bounceInDown');
        playButtonTwoText.classList.remove('animate__animated', 'animate__bounceInDown');
		emanButton.classList.add('animate__animated', 'animate__bounceInDown');
        playButtonThreeText.classList.add('animate__animated', 'animate__bounceInDown');
	  };

      emanButton.onanimationend = () => {
        emanButton.classList.remove('animate__animated', 'animate__bounceInDown');
        playButtonThreeText.classList.remove('animate__animated', 'animate__bounceInDown');
      }
    
	},55000);	

}

// this function decides when the buttons should appear on mobile
function showAudioButtonsMobile () {

    	audioTimeout = setTimeout(function(){
		walThreePoint0Button.style.display = 'inline-block';
        playButtonOneText.style.display = 'block';
		walThreePoint0Button.classList.add('animate__animated', 'animate__bounceInDown');
        playButtonOneText.classList.add('animate__animated', 'animate__bounceInDown');


        walThreePoint0Button.onanimationend = () => {
        brandonButton.style.display = 'inline-block';
        playButtonTwoText.style.display = 'block';
		walThreePoint0Button.classList.remove('animate__animated', 'animate__bounceInDown');
        playButtonOneText.classList.remove('animate__animated', 'animate__bounceInDown');
		brandonButton.classList.add('animate__animated', 'animate__bounceInDown');
        playButtonTwoText.classList.add('animate__animated', 'animate__bounceInDown');

	  };
      
        brandonButton.onanimationend = () => {
        emanButton.style.display = 'inline-block';
        playButtonThreeText.style.display = 'block';
		brandonButton.classList.remove('animate__animated', 'animate__bounceInDown');
        playButtonTwoText.classList.remove('animate__animated', 'animate__bounceInDown');
		emanButton.classList.add('animate__animated', 'animate__bounceInDown');
        playButtonThreeText.classList.add('animate__animated', 'animate__bounceInDown');
	  };

      emanButton.onanimationend = () => {
        emanButton.classList.remove('animate__animated', 'animate__bounceInDown');
        playButtonThreeText.classList.remove('animate__animated', 'animate__bounceInDown');
      }
    
	},38000);	

}

// checks the screen size and calls the appropriate function;
function checkScreenSize (mediaQuery){
	if (mediaQuery.matches) { 
        alert("mobile view");
        showAudioButtonsMobile();
	} else if (checkTablet.matches) {
        alert("tablet view");
        showAudioButtonsTablet();
    } else if (checkDesktop.matches) {
        alert("desktop view");
        showAudioButtonsDesktop();
    }	else {
        alert("larger desktop view");
        showAudioButtonsDesktopLarge();
    }
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

