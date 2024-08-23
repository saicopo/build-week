const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

//js del timer

const tempoTotale = 60; // 60 secondi
let tempoRimanente = tempoTotale;

function updateTimer() {
  const tempoDisplay = document.getElementById("timer");

  // Calcolo i secondi rimanenti
  const seconds = tempoRimanente % 60;

  // Formatto il tempo per la visualizzarlo
  tempoDisplay.textContent = seconds;

  // Calcolo la percentuale del tempo rimanente
  const percent = tempoRimanente / tempoTotale;

  // Calcolo l'angolo per la rotazione del bordo (in percentuale)
  const progresso = 360 * (1 - percent);

  // Aggiorno il gradiente del bordo
  document
    .querySelector(".circle")
    .style.setProperty("--progress", `${progresso}deg`);

  // Riduco il tempo rimanente
  tempoRimanente--;

  // Se il tempo è scaduto, ferma il timer
  if (tempoRimanente < 0) {
    clearInterval(timerIntervallo);
    // Esegui altre azioni quando il tempo è scaduto, come passare alla prossima domanda
  }
}

// Avvio il timer e aggiorna ogni secondo
const timerIntervallo = setInterval(updateTimer, 1000);

// Imposta il timer inizialmente
updateTimer();

//js delle domande

let number = 0;

function popolateQuestion() {
  // per cambiare ad ogni evocazione il numero e di conseguenza l'oggetto nell'array
  number++;
  // per andare direttamente al risultato quando si risponde all'ultima domanda
  if (number > 10) {
    window.location.href = "bw1result.html";
  }
  //assegno i dati
  else document.querySelector("#first").value = questions[0].correct_answer;
  document.querySelector("#second").value = questions[0].incorrect_answers[0];
  document.querySelector("#third").value = questions[0].incorrect_answers[1];
  document.querySelector("#fourth").value = questions[0].incorrect_answers[2];
  document.querySelector("h1").textContent = questions[0].question;
  // se boolean nascondi 2 pulsanti su 4
  if (questions[0].type === "boolean") {
    let third = document.querySelector("#third");
    let fourth = document.querySelector("#fourth");
    third.style.display = "none";
    fourth.style.display = "none";
  } else {
    third.style.display = "block";
    fourth.style.display = "block";
  }
  questions[0] = questions[number];
  let counterQuestions = document.querySelector("#question_page");
  let questionNumber = (counterQuestions.textContent = number);
  tempoRimanente = tempoTotale;
  // se il timer scade la funzione viene ri-evocata
  if (questionNumber) {
    setTimeout(() => {
      popolateQuestion();
    }, 60000);
  }
  // se il timer scade all'ultima domanda, va direttamente al risultato
  if (questionNumber === 10) {
    setTimeout(() => {
      window.location.href = "bw1result.html";
    }, 60000);
  }
}

popolateQuestion();

// manca un modo per randomizzare i pulsanti e 2 variabili da incrementare con le giuste o sbagliate.
// sarebbe carino far apparire le stelle per le risposte corrette
