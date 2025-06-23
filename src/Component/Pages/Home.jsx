
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";

function Home() {
  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/start");
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gradient-to-br from-yellow-100 to-yellow-300">
        <h1 className="mb-10 text-4xl font-bold text-gray-800 sm:text-5xl md:text-6xl drop-shadow">
          Welcome to HangMan
        </h1>

        <Button
          text="Start"
          buttonType="Button"
          styleType="Fifth"
          onClickHandler={handleSubmit}
        />
      </div>
    </>
  );
}
export default Home;
