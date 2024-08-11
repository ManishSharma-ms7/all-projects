// Sample questions. DONT touch this data

const submitButton = document.getElementById("submit");
const nextButton = document.getElementById("next");
const questionEle = document.getElementById("question");
const answerListEle = document.getElementById("answer-list");

let questionPointer = 0;
let score = 0;

const questions = [
	{
		text: "Which language is primarily used for web app development?",
		options: ["C#", "Python", "JavaScript", "Swift"],
		correct: 2,
	},
	{
		text: "Which of the following is a relational database management system?",
		options: ["Oracle", "Scala", "Perl", "Java"],
		correct: 0,
	},
	{
		text: "What does HTML stand for?",
		options: [
			"Hyperlink and Text Markup Language",
			"High Technology Modern Language",
			"Hyper Text Markup Language",
			"Home Tool Markup Language",
		],
		correct: 2,
	},
	{
		text: "What does CSS stand for?",
		options: ["Cascading Stylesheets", "Cascading Styling Styles", "Cascading Sheets for Stylings", "Cascaded Stylesheets"],
		correct: 0,
	},
	{
		text: "Which of the following is not an object-oriented programming language?",
		options: ["Java", "C#", "Scala", "C"],
		correct: 3,
	},
	{
		text: "Which tool is used to ensure code quality in JavaScript?",
		options: ["JSLint", "TypeScript", "Babel", "Webpack"],
		correct: 0,
	},
	{
		text: "What is the primary use of the Git command 'clone'?",
		options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
		correct: 1,
	},
	{
		text: "What does API stand for in the context of programming?",
		options: [
			"Apple Pie Interface",
			"Application Programming Interface",
			"Advanced Peripheral Integration",
			"Application Process Integration",
		],
		correct: 1,
	},
	{
		text: "Javascript is a single threaded programming language?",
		options: ["True", "False"],
		correct: 0,
	},
	{
		text: "API calls in Javascript can be done using the following method ?",
		options: ["setTimeout()", "setInterval()", "fetch()", "get()"],
		correct: 2,
	},
];

function loadQuestion() {
	let question = questions[questionPointer];
	questionEle.textContent = question.text;
	let option = "";
	for (let i = 0; i < question.options.length; i++) {
		option = document.createElement("li");
		option.innerHTML = `<input type='radio' name='answer' value=${i} /> ${question.options[i]}`;
		answerListEle.appendChild(option);
	}
	nextButton.hidden = true;
	submitButton.hidden = false;
}

submitButton.addEventListener("click", () => {
	// Implement the logic when the user clicks on submit button. The answer selected by the user should be validated here with the correct option
	let isChecked = document.querySelector("input[type=radio]:checked");
	if (isChecked) {
		let value = Number(isChecked.value);
		if (questions[questionPointer].correct === value) {
			isChecked.parentElement.style.backgroundColor = "lightgreen";
			score++;
		} else {
			isChecked.parentElement.style.backgroundColor = "red";
		}
		nextButton.hidden = false;
		submitButton.hidden = true;
	} else {
		alert("Please select an answer.");
	}
});

nextButton.addEventListener("click", () => {
	// Implement the logic for showing the next question in the questions array. Basic DOM manipulation methods are required here.
	// Also check for quiz completion here as well
	if (questionPointer === questions.length - 1) {
		alert(`Quiz Finished! Your score is: ${questionPointer + 1}/${questions.length}`);
		window.location.reload();
	} else if (questionPointer < questions.length) {
		questionPointer++;
		questionEle.innerHTML = "";
		answerListEle.innerHTML = "";
		loadQuestion();
	}
});

// Load the first question on startup
loadQuestion();
