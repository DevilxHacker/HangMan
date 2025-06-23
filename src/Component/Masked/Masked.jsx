import { getAllCharacters } from "./MaskedTextUtility";
function Masked({ text, usedLetters }) {
    const letters = getAllCharacters(text, usedLetters).split('');
    console.log(text)
    return (
        <>
            {letters.map((letter, index) => {
                return (
                    <span key={`letter-${index}`} className="inline-block mx-1 ">{letter}</span>
                )
            })}
        </>
    )
}
export default Masked;