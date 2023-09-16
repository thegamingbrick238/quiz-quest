// Questions that will be asked
const Questions = [{
	q: "What is capital of India?",
	a: [{ text: "Gandhinagar", isCorrect: false },
	{ text: "Surat", isCorrect: false },
	{ text: "Delhi", isCorrect: true },
	{ text: "Mumbai", isCorrect: false }
	]

},
{
	q: "What is the capital of Thailand?",
	a: [{ text: "Lampang", isCorrect: false, isSelected: false },
	{ text: "Phuket", isCorrect: false },
	{ text: "Ayutthaya", isCorrect: false },
	{ text: "Bangkok", isCorrect: true }
	]

},
{
	q: "Who was the 16th President of the United States?",
	a: [{ text: "Donald Trump", isCorrect: false },
	{ text: "George Washington", isCorrect: false },
	{ text: "Abraham Lincoln", isCorrect: true },
	{ text: "Woodrow Wilson", isCorrect: false }
	]

},
{
	q: "Which metalband was formed on Christmas day?",
	a: [{ text: "Metallica", isCorrect: false },
	{ text: "Iron Maiden", isCorrect: true },
	{ text: "Black Sabbath", isCorrect: false },
	{ text: "Judas Priest", isCorrect: false }
	]

},
{
	q: "What modern day country is Chernobyl in?",
	a: [{ text: "Russia", isCorrect: false },
	{ text: "Uzbekistan", isCorrect: false },
	{ text: "Ukraine", isCorrect: true },
	{ text: "Norway", isCorrect: false }
	]

},
{
	q: "If x = 8 then what is x + 2 - (9 + 7)",
	a: [{ text: "-6", isCorrect: true },
	{ text: "5", isCorrect: false },
	{ text: "-2", isCorrect: false },
	{ text: "8", isCorrect: false }
	]

},
{
	q: "Which is not an ocean?",
	a: [{ text: "Pacific", isCorrect: false },
	{ text: "Indian", isCorrect: false },
	{ text: "Atlantic", isCorrect: false },
	{ text: "Midlantic", isCorrect: true }
	]

},
{
	q: "What Harbor was attacked on December 7th 1941, Bringing the United States into World War 2?",
	a: [{ text: "Shell Harbor", isCorrect: false },
	{ text: "Southern Harbor", isCorrect: false },
	{ text: "Pearl Harbor", isCorrect: true },
	{ text: "Island Harbor", isCorrect: false }
	]

},
{
	q: "If x = 9 then what is x * 3",
	a: [{ text: "41", isCorrect: false },
	{ text: "24", isCorrect: false },
	{ text: "27", isCorrect: true },
	{ text: "21", isCorrect: false }
	]

},
{
	q: "Which country was a Spanish Colony",
	a: [{ text: "Brazil", isCorrect: false },
	{ text: "Equatorial Guniea", isCorrect: true },
	{ text: "Saudi Arabia", isCorrect: false },
	{ text: "Australia", isCorrect: false }
	]

},
{
	q: "Which person wrote 'Romeo and Juliet'? ",
	a: [{ text: "Shakespeare", isCorrect: true },
	{ text: "Edgar Allen Poe", isCorrect: false },
	{ text: "Emily Dickinson", isCorrect: false },
	{ text: "Dr Seuss", isCorrect: false }
	]

},
{
	q: "What was World War 1 refered to before World War 2?",
	a: [{ text: "The Giant War", isCorrect: false },
	{ text: "The Great War", isCorrect: true },
	{ text: "The Long War", isCorrect: false },
	{ text: "The Brutal War", isCorrect: false }
	]

},
{
	q: "If the length of an object is 5 and the height is 8 then what is the area?",
	a: [{ text: "16", isCorrect: false },
	{ text: "174", isCorrect: false },
	{ text: "35", isCorrect: false },
	{ text: "40", isCorrect: true }
	]

},
{
	q: "Who painted the Starry Night?",
	a: [{ text: "Frida Kahlo", isCorrect: false },
	{ text: "Leonard Da Vinci", isCorrect: false },
	{ text: "Vincent Van Gogh", isCorrect: true },
	{ text: "Pablo Picasso", isCorrect: false }
	]

},
{
	q: "What year did the moon landing happen?",
	a: [{ text: "1959", isCorrect: false },
	{ text: "1986", isCorrect: false },
	{ text: "1969", isCorrect: true },
	{ text: "2001", isCorrect: false }
	]

},
]


let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
