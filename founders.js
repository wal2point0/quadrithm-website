    // Toggle play/pause button
    var audio = document.getElementById("myAudio");
    var walThreePoint0Button = document.getElementById("walThreePoint0Intro");
    var brandonButton = document.getElementById("brandonIntro");
    var emanButton = document.getElementById("emanIntro"); 

    var playButtonOneText = document.getElementById("playButtonOne");
    var playButtonTwoText = document.getElementById("playButtonTwo");
    var playButtonThreeText = document.getElementById("playButtonThree"); 

    var mediaQuery = window.matchMedia("(max-width: 768px)"); 
    var checkTablet = window.matchMedia('(min-width: 769px) and (max-width: 992px)');
    var checkDesktop = window.matchMedia('(min-width: 993px) and (max-width: 1200px)');


    
//   window.matchMedia('screen and (max-width: 768px)').addEventListener("change", function (mql) {
//     if (mql.matches){
//          alert("Mobile View");
//          showAudioButtonsMobile();
//     }
//   });

//   window.matchMedia('(min-width: 769px) and (max-width: 992px)').addEventListener("change", function(mql){
//     if (mql.matches){
//          alert("Tablet View");
//          showAudioButtonsTablet();
//     }
//   });

//   window.matchMedia('screen and (min-width: 1024px)').addEventListener("change", function(mql){
//     if (mql.matches){
//          alert("Desktop View");
//          showAudioButtonsDesktop();
//     }
//   });

    var audioButtons;

    var audioTimeout;

    // window.addEventListener("load", showAudioButtons, false);
    // window.addEventListener("load", checkScreen, false);
    mediaQuery.addEventListener("change", mobileMudioButtons(mediaQuery));
    //  checkMobile.addEventListener("change", mobileMudioButtons(checkMobile));
    //  checkTablet.addEventListener("change", mobileMudioButtons(checkTablet));
    //  checkDesktop.addEventListener("change", mobileMudioButtons(checkDesktop));




   
    // Toggle play/pause button works
    var playButton = document.querySelector('.play-button');
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

        });
    });

// var audio = document.getElementById("myAudio"); 
// var playButton = document.querySelector('.play-button');

// waleButton.addEventListener("click", toggleMute);


// //declare the unmute icon variable
// var playIcon = '<i class="bi bi-play-fill fs-1"></i>';

// //decalre the mute icon vabriable 
// var pauseIcon = '<i class="bi bi-pause-fill fs-1"></i>';

// let isPlaying = true;


// function toggleMute(){
//   //toggle the muted property of the audio element
//   //  isPlaying = !isPlaying;
//    audio.muted = !audio.muted;

//       // if the video is muted, set the btn.innerHTML to unmuteIcon
//     // otherwise, set it to the muteIcon
//     if (audio.muted) {
//       waleButton.innerHTML = playIcon;
//       console.log("audio paused");
//       audio.pause();
//     } else {
//       waleButton.innerHTML = pauseIcon;
//       console.log("audio playing");
//       audio.play();
//     }
// }
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

function mobileMudioButtons (mediaQuery){
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

// function mobileMudioButtons (mediaQuery){
  
// 	if (mediaQuery.matches) { 
//         console.log("mobile view");
//         // showAudioButtonsMobile();
// 	} else if (mediaQuery.matches) {
//         // showAudioButtons();
//         console.log("Tablet view");

//     } else if (mediaQuery.matches) {
//         console.log("Desktop view");
//     }	
// }

// checkScreen();

function checkScreen(){

  const checkMobile = window.matchMedia('(max-width: 768px)');
  const checkTablet = window.matchMedia('(min-width: 769px) and (max-width: 992px)');
  const checkDesktop = window.matchMedia('screen and (min-width: 1024px)');

  checkMobile.addEventListener("change",function(e){

    if(e.matches) {

        alert('MOBILE');
        showAudioButtonsMobile();
    }
  });

  checkTablet.addEventListener("change",function(e){

    if(e.matches) {

        alert('TABLET');
        showAudioButtonsTablet();
    }
  });

  checkDesktop.addEventListener("change",function(e){

    if(e.matches) {

        alert('DESKTOP');
        showAudioButtonsDesktop();
    }
  });

}

