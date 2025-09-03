    var audio = document.getElementById("myAudio");
    var secondAudio = document.getElementById("aboutQuadrithmAudio");

    
    // Question text animation variables
    var brandingQs = document.getElementById("brandingQuestions");
    var developmentQs = document.getElementById("developmentQuestions");
    var startupQs = document.getElementById("startupQuestions"); 
    
    // Specialisation play buttons variables
    var brandingButton = document.getElementById("branding");
    var developmentButton = document.getElementById("development");
    var startupButton = document.getElementById("startup");

    // Media query variables
    var checkMobile = window.matchMedia("(max-width: 768px)"); 
    var checkTablet = window.matchMedia('(min-width: 769px) and (max-width: 992px)');
    var checkDesktop = window.matchMedia('(min-width: 993px) and (max-width: 1200px)');


    checkMobile.addEventListener("change", checkScreenSize(checkMobile));


    // Toggle play/pause button function
    playIveGotAnIdea();
    function playIveGotAnIdea(){
        var playButton = document.getElementById('branding');
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

    playBuildItForMe();
    function playBuildItForMe(){
        var playButton = document.getElementById('development');
        let isPlaying = false;

        playButton.addEventListener('click', () => {
            isPlaying = !isPlaying;
            secondAudio.paused = !secondAudio.paused;

            playButton.innerHTML = isPlaying ? '<i class="bi bi-pause-fill fs-1"></i>' : '<i class="bi bi-play-fill fs-1"></i>';
            secondAudio.paused ? secondAudio.play() : secondAudio.pause();

            secondAudio.addEventListener("ended", function(){
                secondAudio.currentTime = 0;
                console.log("ended");
                playButton.innerHTML = '<i class="bi bi-play-fill fs-1"></i>';
                isPlaying = false;
            });
        });
    }

    
    function showAudioButtonsDesktopLarge () {

    	audioTimeout = setTimeout(function(){
		brandingButton.style.display = 'inline-block';
        brandingQs.style.display = 'block';
		brandingButton.classList.add('animate__animated', 'animate__bounceInDown');
        brandingQs.classList.add('animate__animated', 'animate__bounceInDown');


        brandingButton.onanimationend = () => {
        developmentButton.style.display = 'inline-block';
        developmentQs.style.display = 'block';
		brandingButton.classList.remove('animate__animated', 'animate__bounceInDown');
        brandingQs.classList.remove('animate__animated', 'animate__bounceInDown');
		developmentButton.classList.add('animate__animated', 'animate__bounceInDown');
        developmentQs.classList.add('animate__animated', 'animate__bounceInDown');

	  };
      
        developmentButton.onanimationend = () => {
        startupButton.style.display = 'inline-block';
        startupQs.style.display = 'block';
		developmentButton.classList.remove('animate__animated', 'animate__bounceInDown');
        developmentQs.classList.remove('animate__animated', 'animate__bounceInDown');
		startupButton.classList.add('animate__animated', 'animate__bounceInDown');
        startupQs.classList.add('animate__animated', 'animate__bounceInDown');
	  };

      startupButton.onanimationend = () => {
        startupButton.classList.remove('animate__animated', 'animate__bounceInDown');
        startupQs.classList.remove('animate__animated', 'animate__bounceInDown');
      }
    
	},20000);	

}

    
    function showAudioButtonsDesktop () {

    	audioTimeout = setTimeout(function(){
		brandingButton.style.display = 'inline-block';
        brandingQs.style.display = 'block';
		brandingButton.classList.add('animate__animated', 'animate__bounceInDown');
        brandingQs.classList.add('animate__animated', 'animate__bounceInDown');


        brandingButton.onanimationend = () => {
        developmentButton.style.display = 'inline-block';
        developmentQs.style.display = 'block';
		brandingButton.classList.remove('animate__animated', 'animate__bounceInDown');
        brandingQs.classList.remove('animate__animated', 'animate__bounceInDown');
		developmentButton.classList.add('animate__animated', 'animate__bounceInDown');
        developmentQs.classList.add('animate__animated', 'animate__bounceInDown');

	  };
      
        developmentButton.onanimationend = () => {
        startupButton.style.display = 'inline-block';
        startupQs.style.display = 'block';
		developmentButton.classList.remove('animate__animated', 'animate__bounceInDown');
        developmentQs.classList.remove('animate__animated', 'animate__bounceInDown');
		startupButton.classList.add('animate__animated', 'animate__bounceInDown');
        startupQs.classList.add('animate__animated', 'animate__bounceInDown');
	  };

      startupButton.onanimationend = () => {
        startupButton.classList.remove('animate__animated', 'animate__bounceInDown');
        startupQs.classList.remove('animate__animated', 'animate__bounceInDown');
      }
    
	},37000);	

}

    function showAudioButtonsTablet () {

    	audioTimeout = setTimeout(function(){
		brandingButton.style.display = 'inline-block';
        brandingQs.style.display = 'block';
		brandingButton.classList.add('animate__animated', 'animate__bounceInDown');
        brandingQs.classList.add('animate__animated', 'animate__bounceInDown');


        brandingButton.onanimationend = () => {
        developmentButton.style.display = 'inline-block';
        developmentQs.style.display = 'block';
		brandingButton.classList.remove('animate__animated', 'animate__bounceInDown');
        brandingQs.classList.remove('animate__animated', 'animate__bounceInDown');
		developmentButton.classList.add('animate__animated', 'animate__bounceInDown');
        developmentQs.classList.add('animate__animated', 'animate__bounceInDown');

	  };
      
        developmentButton.onanimationend = () => {
        startupButton.style.display = 'inline-block';
        startupQs.style.display = 'block';
		developmentButton.classList.remove('animate__animated', 'animate__bounceInDown');
        developmentQs.classList.remove('animate__animated', 'animate__bounceInDown');
		startupButton.classList.add('animate__animated', 'animate__bounceInDown');
        startupQs.classList.add('animate__animated', 'animate__bounceInDown');
	  };

      startupButton.onanimationend = () => {
        startupButton.classList.remove('animate__animated', 'animate__bounceInDown');
        startupQs.classList.remove('animate__animated', 'animate__bounceInDown');
      }
    
	},40000);	

}

    function showAudioButtonsMobile () {

    	audioTimeout = setTimeout(function(){
		brandingButton.style.display = 'inline-block';
        brandingQs.style.display = 'block';
		brandingButton.classList.add('animate__animated', 'animate__bounceInDown');
        brandingQs.classList.add('animate__animated', 'animate__bounceInDown');


        brandingButton.onanimationend = () => {
        developmentButton.style.display = 'inline-block';
        developmentQs.style.display = 'block';
		brandingButton.classList.remove('animate__animated', 'animate__bounceInDown');
        brandingQs.classList.remove('animate__animated', 'animate__bounceInDown');
		developmentButton.classList.add('animate__animated', 'animate__bounceInDown');
        developmentQs.classList.add('animate__animated', 'animate__bounceInDown');

	  };
      
        developmentButton.onanimationend = () => {
        startupButton.style.display = 'inline-block';
        startupQs.style.display = 'block';
		developmentButton.classList.remove('animate__animated', 'animate__bounceInDown');
        developmentQs.classList.remove('animate__animated', 'animate__bounceInDown');
		startupButton.classList.add('animate__animated', 'animate__bounceInDown');
        startupQs.classList.add('animate__animated', 'animate__bounceInDown');
	  };

      startupButton.onanimationend = () => {
        startupButton.classList.remove('animate__animated', 'animate__bounceInDown');
        startupQs.classList.remove('animate__animated', 'animate__bounceInDown');
      }
    
	},30000);	

}

function checkScreenSize (checkMobile){
	if (checkMobile.matches) { 
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

