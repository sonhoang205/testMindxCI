
function addQuestion(question, correct_answer,incorrect_answers1,incorrect_answers2,incorrect_answers3){
    let questions = document.getElementById('question');
    
    let htmlQuestion = `
            <div class="question">Question:${question}
                <div class="answer"><input type="checkbox"  id="">A.${correct_answer}</div>
                <div class="answer"><input type="checkbox"  id="">B.${incorrect_answers1}</div>
                <div class="answer"><input type="checkbox"  id="">C.${incorrect_answers2}</div>
                <div class="answer"><input type="checkbox"  id="">D.${incorrect_answers3}</div>
            </div>
    `
    questions.innerHTML += htmlQuestion

}
fetch(`https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple`)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data.results);
        for (let {question, correct_answer,incorrect_answers} of data.results) {
            addQuestion(question, correct_answer,incorrect_answers[0],incorrect_answers[1],incorrect_answers[2]);
        }
    });