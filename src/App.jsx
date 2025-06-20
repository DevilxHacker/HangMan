import TextInputFormContainer from "./Component/TextInputForm/TextInputFormContainer";



function App() {
  return <>
   
      <h1 className="p-4 my-0 text-6xl font-medium text-center text-gray-200 bg-green-400">
        Welcome to HangMan
      </h1>
   <TextInputFormContainer onSubmit={(value) => console.log("Value coming from the hidden form is", value)} />

  </>
    

}
export default App;
