import React, { useState, useEffect, Fragment } from "react";
import "./Home.css";

const Questions = ({ logedin }) => {
  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState('');
  const [loadmore, setLoadmore] = useState(20);
  const [manage, setManage] = useState(true);
  const [newQuestion, setNewQuestion] = useState('')
  const changeManage = ()=> {
    setManage(!manage)
  }
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/api/questions", {
        headers: { "Content-Type": "application/json" },
      });
      const content = await response.json();
      setQuestion(content);
    })();
  }, [manage]);
  const onLoadMore = () => {
    setLoadmore(loadmore + 5);
  };
  /* useEffect(() => {

  }, [question]) */
  const submitHandler = async (id, question, thumbsup, e) => {
    e.preventDefault();
    
    const response = await fetch("http://localhost:8000/api/answer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
        question: question,
        thumbsup: thumbsup,
        answers: [
          {Answer: answer}
        ]
      }),
    });
    console.log(answer)
    const content = await response.json()
    changeManage();
    console.log(content)
  };

  const submitQuestion = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:8000/api/questions', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question: newQuestion,
        thumbsup: "0",
      })
    })
    changeManage();
  }
  return (
    <Fragment>
      <h2>Questions Page</h2>
      {logedin && (
                
                <form className='forma'
                  onSubmit={submitQuestion}
                >
                  <h5 className="h5 mb-3 fw-normal">Ask anything!</h5>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Your Question</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Question"
                      onChange={(e) => setNewQuestion(e.target.value)}
                    />
                  </div>
                  <button
                    className="w-100 btn btn-lg btn-primary"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              )}
      <ul>

      <h1 className="h1 mb-3 fw-normal">All Questions and Answers!</h1>

        {question.slice(0, loadmore).map((q) => {
          return (
            
            <li key={q.id}>
              <div className="border">
                <p
                  className="question"
                >
                  {q.question}
                </p>
                <p className="thumbsup" >
                  {q.thumbsup} Likes
                </p>
                <p>{logedin}</p>
              </div>
              <hr className="mb-3" />
              {logedin && (
                
                <form
                  onSubmit={(e) =>
                    submitHandler(q.id, q.question, q.thumbsup, e)
                  }
                >
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Your answer</label>
                    <input
                      key={q}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Answer"
                      onChange={(e) => setAnswer(e.target.value)}
                    />
                  </div>
                  <button
                    className="w-100 btn btn-lg btn-primary"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              )}
              <h5 className="h5 mb-3 fw-normal">Previous answers:</h5>
              {q.answers.map((x, a) => {
                return (
                  <p key={a.id}>
                    {a + 1}: {x.Answer}
                  </p>
                );
              })}
            </li>
          );
        })}
        <a href="/#/questions" onClick={onLoadMore}>
          Load More
        </a>
      </ul>
    </Fragment>
  );
};

export default Questions;
