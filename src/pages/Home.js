import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './Home.css'
/* var questions = [
  {
    id:0,
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbsup: 3,
    answers: ["first answer", "second answer"],
  },
  {
    id:1,
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbsup: 5,
    answers: ["first answer", "second answer"],
  },
  {
    id:2,
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbsup: 2,
    answers: ["first answer", "second answer", "third answer"],
  },
];
 */
const Home = () => {
  const [question, setQuestion] = useState([])
  const history = useHistory();
  const [loadmore, setLoadmore] = useState(20)
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/api/questions", {
        headers: { "Content-Type": "application/json" },
      });
      const content = await response.json()
      console.log(content)
      setQuestion(content)
    })()
  }, [])

  const questionHandler = (id) => {
    console.log(id)
    history.push(`/${id}`)
  }

  const onLoadMore = () => {
    setLoadmore(loadmore + 5)
  }
  return (
    <Fragment>
      <h2>Home Page</h2>
      <ul>
        {question.slice(0, loadmore).map((q) => {
          return (
            
            <li key={q.id}>
              <div className="border" >
              <p className='question' onClick={() =>questionHandler(q.id)} >{q.question}</p>
              <p className='thumbsup' >{q.thumbsup} Likes</p>
              </div>
              {/* {q.answers.map((a) => {
                return <p key={a}>{a}</p>;
              })} */}
            </li>
          );
        })}
        <a href='#/' onClick={onLoadMore}>Load More</a>
      </ul>
    </Fragment>
  );
};

export default Home;
