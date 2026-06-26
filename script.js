let completedTasks = new Set();
const totalTasks = 5;

function submitTask(taskName) {
    if (!completedTasks.has(taskName)) {
        completedTasks.add(taskName);
        alert(taskName + " completed!");
        
        event.target.innerText = "Completed";
        event.target.style.backgroundColor = "#6c757d";
        event.target.disabled = true;

        checkTasksCompletion();
    }
}

function checkTasksCompletion() {
    if (completedTasks.size === totalTasks) {
        document.getElementById('quiz-section').style.display = 'block';
        alert('All tasks completed! Now you can take the exam.');
    }
}

function checkQuiz() {
    const quizForm = document.getElementById('quiz-form');
    if (quizForm.q1.value === 'b') {
        alert('Correct answer! You can now download your certificate.');
        document.getElementById('certification-section').style.display = 'block';
    } else {
        alert('Incorrect answer, try again.');
    }
}

