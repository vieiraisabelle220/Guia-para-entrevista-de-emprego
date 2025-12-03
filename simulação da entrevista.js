const questions = [
    "Fale um pouco sobre você.",
    "Por que você quer trabalhar nesta empresa?",
    "Quais são seus pontos fortes?",
    "Quais são seus pontos a melhorar?",
    "Onde você se imagina daqui a 5 anos?",
    "Você tem experiência na área?"
];

let index = 0;

const questionEl = document.getElementById("question");
const answerField = document.getElementById("user-answer");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const evaluationSection = document.getElementById("evaluation-section");
const feedbackEl = document.getElementById("feedback");

startBtn.addEventListener("click", loadQuestion);
nextBtn.addEventListener("click", nextQuestion);

function loadQuestion() {
    feedbackEl.textContent = "";

    questionEl.textContent = questions[index];
    answerField.disabled = false;
    answerField.value = "";
    answerField.focus();

    startBtn.style.display = "none";
    evaluationSection.style.display = "block";
    nextBtn.style.display = "none";
}

document.querySelectorAll(".evaluation-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const type = btn.dataset.feedback;

        if (type === "boa") {
            feedbackEl.textContent = "Ótima resposta! Continue assim.";
            feedbackEl.style.color = "green";
        } else {
            feedbackEl.textContent = "Pode melhorar um pouco. Tente ser mais específico(a) e objetivo(a).";
            feedbackEl.style.color = "red";
        }

        nextBtn.style.display = "block";
    });
});

function nextQuestion() {
    index++;

    if (index >= questions.length) {
        questionEl.textContent = "Entrevista finalizada! Parabéns por participar.";
        answerField.disabled = true;
        answerField.value = "";
        evaluationSection.style.display = "none";
        nextBtn.style.display = "none";
        return;
    }

    loadQuestion();
}
   