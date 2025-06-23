import { useLocation, useNavigate } from "react-router-dom";
import Masked from "../Masked/Masked";
import LetterButton from "../Button/LetterButton";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import HangMan from "../Hangman/Hangman";
import { getAllCharacters } from "../Masked/MaskedTextUtility";

function Play() {
  const location = useLocation();
  const word = location.state?.word;
  const [usedLetters, setUsedLetters] = useState([]);
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const [winner, setWinner] = useState(false);

  const clicked = function (letter) {
    if (word.toUpperCase().includes(letter)) {
      console.log("correct");
    } else {
      setStep(step + 1);
    }

    setUsedLetters([...usedLetters, letter]);
  };

  useEffect(() => {
    const solvedWord = getAllCharacters(word, usedLetters);
    if (solvedWord === word.toUpperCase() && !winner) {
      setWinner(true); // ✅ only once
    }
  }, [usedLetters, word, winner]);

  function reset() {
    navigate("/start");
    setStep(0);
    setUsedLetters([]);
  }

  return (
    <>
      <Masked text={word} usedLetters={usedLetters} />
      <div className="flex items-center justify-between ">
       {(!winner && step!=7) && <div className="basis-2/4">
          <LetterButton 
          className="grid w-full max-w-md grid-cols-6 gap-2 sm:grid-cols-7 md:grid-cols-6 md:max-w-lg"
            text={word}
            usedLetter={usedLetters}
            onClickHandler={clicked}
          />
        </div>  }
        <div className="flex items-center justify-center basis-2/4">
          <HangMan step={step} />
        </div>
      </div>

      {winner && (
        <h3 className="text-xl font-semibold text-gray-800 sm:text-2xl md:text-3xl lg:text-4xl">
          Congratulations
        </h3>
      )}
      

      {step == 7 && (
        <h3 className="text-xl font-semibold text-gray-800 sm:text-2xl md:text-3xl lg:text-4xl">
          Ah! The word was {word}
        </h3>
      )}

      {(step == 7 || winner==true) &&
        <Button
          text="Reset"
          buttonType="button"
          styleType="fifth"
          onClickHandler={reset}
        />
      }
    </>
  );
}
export default Play;
