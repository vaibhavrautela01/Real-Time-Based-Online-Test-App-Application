import { useState, useEffect } from "react";
import './section.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function SectionC() {
  
  const navigate = useNavigate();

  const [selectedId, setSelectedId] = useState(null);



  const [colors, setColors] = useState(() => {
    const savedColors = localStorage.getItem('colors');
    return savedColors ? JSON.parse(savedColors) : {};
  });

  const [questions, setQuestions] = useState([]);



  const [selectedOptions, setSelectedOptions] = useState(() => {
    const savedOptions = localStorage.getItem('selectedOptions');
    return savedOptions ? JSON.parse(savedOptions) : {};
  });

  
  const [correctCount, setCorrectCount] = useState(() => {
    const savedCount = localStorage.getItem('correctCount');
    return savedCount ? JSON.parse(savedCount) : 0;
  });



  const [wrongCount, setWrongCount] = useState(() => {
    const savedCount = localStorage.getItem('wrongCount');
    return savedCount ? JSON.parse(savedCount) : 0;
  });




  const [answeredQuestions, setAnsweredQuestions] = useState(() => {
    const savedAnswered = localStorage.getItem('answeredQuestions');
    return savedAnswered ? JSON.parse(savedAnswered) : {};
  });


  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount !== null ? Number(savedCount) : 600;
  });


  useEffect(() => {
    localStorage.setItem('count', count);

    if (count > 0) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      navigate('/studentdashboard');
      localStorage.removeItem('count');
    }
  }, [count, navigate]);




  useEffect(() => {
    fetch('/SectionC.json')
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => console.error('Error:', error));
  }, []);




  useEffect(() => {
    localStorage.setItem('correctCount', JSON.stringify(correctCount));
    localStorage.setItem('wrongCount', JSON.stringify(wrongCount));
    localStorage.setItem('colors', JSON.stringify(colors));
    localStorage.setItem('selectedOptions', JSON.stringify(selectedOptions));
    localStorage.setItem('answeredQuestions', JSON.stringify(answeredQuestions));
  }, [correctCount, colors, selectedOptions, answeredQuestions, wrongCount]);




  const handleOptionChange = (questionId, optionValue) => {
    setSelectedOptions(prev => ({
      ...prev,
      [questionId]: optionValue
    }));
  };




  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3001/p", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.text();
      console.log('Response from server:', result);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const handleSubmit = (id) => {
    const question = questions.find(q => q.id === id);
    const isCorrect = selectedOptions[id] === question.answer;

    if (!answeredQuestions[id]) {
      setColors(prev => ({ ...prev, [id]: 'green' }));

      if (isCorrect) {
        setCorrectCount(prevCount => prevCount + 1);
      } else {
        setWrongCount(prevCount => prevCount + 1);
      }

      setAnsweredQuestions(prev => ({ ...prev, [id]: true }));

      const totalAttempt = correctCount + wrongCount + 1;  


      onSubmit({
        questionId: id,
        selectedOption: selectedOptions[id],
        isCorrect,
        correctCount: isCorrect ? correctCount + 1 : correctCount,
        wrongCount: isCorrect ? wrongCount : wrongCount + 1,
        totalAttempt,
      });

      console.log('Selected Option:', selectedOptions[id]);
      console.log('Correct Answers Count:', isCorrect ? correctCount + 1 : correctCount);
      console.log('Wrong Answers Count:', isCorrect ? wrongCount : wrongCount + 1);
      console.log('Total Attempt: ', totalAttempt);
    }
  };

  const handleSignOut = () => {
    setSelectedId(null);
    setColors({});
    setSelectedOptions({});
    setCorrectCount(0);
    setWrongCount(0);
    setAnsweredQuestions({});
    localStorage.removeItem('colors');
    localStorage.removeItem('selectedOptions');
    localStorage.removeItem('correctCount');
    localStorage.removeItem('wrongCount');
    localStorage.removeItem('answeredQuestions');
  };

  const renderQuestion = () => {
    const question = questions.find(q => q.id === selectedId);

    if (!question) {
      return <h2>Please select a question number</h2>;
    }

    const options = [question.option1, question.option2, question.option3, question.option4];

    return (
      <div>
        <h2>{question.question}</h2>
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              name={`question-${question.id}`}
              checked={selectedOptions[question.id] === option}
              onChange={() => handleOptionChange(question.id, option)}
            /> {option}
            <br />
          </div>
        ))}
        <button onClick={() => handleSubmit(question.id)} className="btn">Submit</button>
      </div>
    );
  };

  return (
    <>
    <h1 style={{ color: "white", borderRadius: "5px", backgroundColor: "red", padding: "9px", float: "right" }}>
          {count} sec
        </h1>
      <center><h1>CLASS TEST - Section C</h1></center>
      <div style={{ border: "10px solid black" }}>
        {questions.map(question => (
          <button className="j"
            key={question.id}
            style={{ backgroundColor: colors[question.id] }}
            onClick={() => setSelectedId(question.id)}
          >
            {question.id}
          </button>
        ))}
      </div>
      <h1>Question number: {selectedId || "Select Questions"}</h1>
      {renderQuestion()}
      <h2>Total Correct Answers: {correctCount}</h2>
      <h2>Wrong Answers: {wrongCount}</h2>
      <h2>Total Attempts: {correctCount + wrongCount}</h2>
      <button onClick={handleSignOut} className="btn">Sign Out</button>
    </>
  );
  
}

export default SectionC
