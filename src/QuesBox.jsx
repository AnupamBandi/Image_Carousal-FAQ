import React from 'react'
import Question from './Question';

const QuesBox = () => {
  return (
    <div>
        <h1>Project 2:FAQ Accordion</h1>
        <div className='container'>
            <h2 >Frequently Asked Questions</h2>
            <div className='questions mb-4'>
                {questions.map((item)=>(
                    <Question key={item.id} question={item} />

                ))}
            </div>

        </div>
    </div>
  )
}

export default QuesBox

const questions = [
    {
      id: 1,
      title: "Is this a good product?",
      info:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
      id: 2,
      title: "How much does it cost?",
      info:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
      id: 3,
      title: "When can I get it?",
      info:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    }
  ];