import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({
  handleFormSubmit,
  handleTextInputChange,
  value,
  inputType,
  setInputType
}) {
  return (
    <form className="flex items-end" onSubmit={handleFormSubmit}>
   
<div className="flex-1 mr-2">

          <TextInput
            label="Enter a word or phrase"
            type={inputType}
            value={value}
            onChange={handleTextInputChange}
            />
            </div>

<div>


          <Button
            text={inputType === "password" ? "Hide" : "Show"}
            buttonType="button"
            styleType="Third"
            onClickHandler={() => setInputType(inputType === 'password' ? 'text' : 'password')
            }
            />
            </div>
      
<div>
  
          <Button
          text="Submit"
          buttonType="submit"
          styleType="Secondary" 
          />
          </div>


    </form>
  );
}
export default TextInputForm;
