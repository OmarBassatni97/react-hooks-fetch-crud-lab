import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({setQuestions, questions,handleDeleteQuestion}) {

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((items) => setQuestions(items));
  }, []);
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(question => {
        return( 
          <QuestionItem key={question.id} question={question} handleDeleteQuestion={handleDeleteQuestion}/>
        )
      })}</ul>
    </section>
  );
}

export default QuestionList;
