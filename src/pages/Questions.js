import React, { useState, useEffect, Fragment } from "react";
import "./Home.css";

const Questions = ({ logedin }) => {
  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState("");
  const [loadmore, setLoadmore] = useState(20);
  const [manage, setManage] = useState(true);
  const [newQuestion, setNewQuestion] = useState("");
  const changeManage = () => {
    setManage(!manage);
  };
  useEffect(() => {
    (async () => {
      const response = await fetch("/api/questions", {
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

    const response = await fetch("/api/answer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
        question: question,
        thumbsup: thumbsup,
        answers: [{ Answer: answer }],
      }),
    });
    setAnswer("");
    console.log(answer);
    const content = await response.json();
    changeManage();
    console.log(content);
  };

  const submitQuestion = async (e) => {
    e.preventDefault();
    await fetch("https://www.cleardb.com/service/1.0/api/api/questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question: newQuestion,
        thumbsup: "0",
      }),
    });
    setNewQuestion("");
    changeManage();
  };
  const questionHandler = async (q, e) => {
    e.preventDefault()
    await fetch('https://www.cleardb.com/service/1.0/api/api/thumbsup',{
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: q,
      })
    })
    changeManage()
  }
  return (
    <Fragment>
      <h2>Questions Page</h2>
      {logedin && (
        <form className="forma" onSubmit={submitQuestion}>
          <h5 className="h5 mb-3 fw-normal">Ask anything!</h5>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Your Question</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Question"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
            />
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Submit
          </button>
        </form>
      )}
      <ul>
        <h1 className="h1 mb-3 fw-normal">All Questions and Answers!</h1>

        {question.sort((a,b) => { return b.id - a.id}).slice(0, loadmore).map((q, i) => {
          return (
            <li key={q.id}>
              <div key={'container'+ q.id} className="border">
                <p className="question" key={'Question'+ q.id}>
                  {q.question}
                </p>
                <p className="thumbsup"onClick={(e) => questionHandler(q.id, e)} key={'Likes'+ q.id}>
                <strong>{q.thumbsup}&nbsp;Likes</strong>
                </p>
                <p key={'logedin'+ q.id}>{logedin}</p>
              </div>
              <hr className="mb-3" />
              {logedin && (
                <form
                  key={'Forma'+ q.id}
                  onSubmit={(e) =>
                    submitHandler(q.id, q.question, q.thumbsup, e)
                  }
                >
                  <div key={'container1'} className="form-group">
                    <label htmlFor="exampleInputPassword1">Your answer</label>
                    <input
                      key={'Answeeer' + q.id}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Answer"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                    />
                  </div>
                  <button
                    className="w-100 btn btn-lg btn-primary"
                    type="submit"
                    key={'button'+ q.id}
                  >
                    Submit
                  </button>
                </form>
              )}
              <h5 key={'Heading'+ q.id} className="h5 mb-3 fw-normal"><strong>Previous answers:</strong></h5>
              {q.answers.map((x, a) => {
                return (
                  <p key={'Answer'+ x.id}>
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
