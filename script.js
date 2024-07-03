window.onload = function() {
    
    hideMap();
    hideQuiz();
};

window.onload = function() {
    document.getElementById('firstListItem').click();
}

function submitAnswer() {
    alert("Your answer was submitted!!");
}

function showMap() {
    var mapContainer = document.getElementById("map");
    mapContainer.style.display = "block";
}

function hideMap() {
    var mapContainer = document.getElementById("map");
    mapContainer.style.display = "none";
}




var redButton = document.getElementById("redB");
var redPins = document.getElementsByClassName("redpin");

redButton.addEventListener("click", function() {
  for (var i = 0; i < redPins.length; i++) {
    if (redPins[i].style.display === "none") {
      redPins[i].style.display = "inline";
    } else {
      redPins[i].style.display = "none";
    }
  }
});


var blueButton = document.getElementById("bluB");
var bluePins = document.getElementsByClassName("bluepin");

blueButton.addEventListener("click", function() {
  for (var i = 0; i < bluePins.length; i++) {
    if (bluePins[i].style.display === "none") {
      bluePins[i].style.display = "inline";
    } else {
      bluePins[i].style.display = "none";
    }
  }
});

var yellowButton = document.getElementById("yelB");
var yellowPins = document.getElementsByClassName("yellowpin");

yellowButton.addEventListener("click", function() {
  for (var i = 0; i < yellowPins.length; i++) {
    if (yellowPins[i].style.display === "none") {
        yellowPins[i].style.display = "inline";
    } else {
        yellowPins[i].style.display = "none";
    }
  }
});


var allButton = document.getElementById("allB");
var redPins = document.getElementsByClassName("redpin");
var bluePins = document.getElementsByClassName("bluepin");
var yellowPins = document.getElementsByClassName("yellowpin");

allButton.addEventListener("click", function() {
  togglePins(redPins);
  togglePins(bluePins);
  togglePins(yellowPins);
});

function togglePins(pins) {
  for (var i = 0; i < pins.length; i++) {
    if (pins[i].style.display === "none") {
      pins[i].style.display = "inline";
    } else {
      pins[i].style.display = "none";
    }
  }
}




function showVideo(videoPath) {
    var videoContainer = document.getElementById("videoContainer");
    var videoPlayer = document.getElementById("videoPlayer");
    var videoSource = document.getElementById("videoSource");

    videoSource.src = videoPath;
    videoPlayer.load();
    videoContainer.style.display = "block";
}

function showQuiz() {
    var quizContainer = document.getElementById("quiz");
    quizContainer.style.display = "block";
}

function hideQuiz() {
    var quizContainer = document.getElementById("quiz");
    quizContainer.style.display = "none";
}

function hideVideo() {
    var videoContainer = document.getElementById("videoContainer");
    videoContainer.style.display = "none";
    showQuiz();
}

function toggleScrollbar() {
    var list = document.querySelector('.lists');
    var button = document.querySelector('.toggle-button');
    var overflowValue = list.style.overflowY;

    if (overflowValue === 'scroll' || overflowValue === '') {
        list.style.overflowY = 'hidden';
        button.src = 'lock.png';
    } else {
        list.style.overflowY = 'scroll';
        button.textContent = 'Hide Scrollbar';
        button.src = 'unlock.png';
    }
}

function showButton() {
    var hiddenButton = document.querySelector('.hidden-button');
    hiddenButton.style.display = 'block';
}

const listItems = document.querySelectorAll('.list1 li');
const nextButton = document.querySelector('.continue-button');

let currentIndex = -1;

nextButton.addEventListener('click', () => {
    currentIndex++;

    if (currentIndex < listItems.length) {
        listItems[currentIndex].click();
    } else {
        alert('End of list reached');
    }
});





function toggleMenu1() {
    var listItems = document.querySelectorAll('.list1 li');
    listItems.forEach(function (item) {
        item.style.display = (item.style.display === "none") ? "block" : "none";
    });
}

function toggleMenu2() {
    var listItems = document.querySelectorAll('.list2 li');
    listItems.forEach(function (item) {
        item.style.display = (item.style.display === "none") ? "block" : "none";
    });
}

const quizData = [
    {
        question: "what is the right amount of caloris for each person to take?",
        a: "1500",
        b: "1200",
        c: "2000",
        d: "it depinds on the person weight and hieght",
        correct: "d",
    },
    {
        question: "what css stands for",
        a: "stylsheet",
        b: "wrong",
        c: "wrong",
        d: "wrong",
        correct: "a",
    }

]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const sumitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}



submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>
    `;
        }
    }
});


