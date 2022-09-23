import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])
const handleNewQuestion = (newQuestion) => {
setQuestions ([...questions,newQuestion])
}
const handleDeleteQuestion = (id) => {
  const updatedQuestions = questions.filter((question) => {
    if(id !== question.id )
    return question
  })
  setQuestions(updatedQuestions)
}
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm handleNewQuestion={handleNewQuestion} /> : <QuestionList handleDeleteQuestion={handleDeleteQuestion} setQuestions={setQuestions} questions={questions}/>}
    </main>
  );
}

export default App;
