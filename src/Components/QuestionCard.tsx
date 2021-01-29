import React, { useState } from "react";
import { propsType } from "./../Types/Types";
import { Button } from '@material-ui/core'

export const QuestionCard: React.FC<propsType> = ({
  options,
  question,
  callback,
}) => {
  let [selectAns, setSelectAns] = useState("");

  const handleSelection = (e: any) => {
    setSelectAns(e.target.value);
  };

  return (
    <div className="question-container">
        <h2 style={{textAlign:"center"}}>QUIZ-APP (10-Questions)</h2>
      <div className="question">{question}</div>
      <form
        onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, selectAns)}
      >
        {options.map((op: string) => {
          return (
            <div>
              <label >
                <input
                  type="radio"
                  value={op}
                  name="op"
                  onChange={handleSelection}
                  required
                  checked={selectAns === op}
                />
                {op}
              </label>
            </div>
          );
        })}
        <Button type="submit" variant='outlined' color="primary" fullWidth>Submit</Button>
        
      </form>
    </div>
  );
};
