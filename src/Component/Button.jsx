function getButtonnStyling(styleType){
    const PrimaryStyling= "text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900";
    const SecondaryStyling= "text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
    const ThirdStyling= "text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900";
    const FourthStyling= "text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900";
    const Other="m-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700";
    if(styleType=="Primary")
        return PrimaryStyling;
    else if(styleType=="Secondary")
        return SecondaryStyling;
    else if(styleType=="Third")
        return ThirdStyling;
   else  if(styleType=="Fourth")
    return FourthStyling
   else
   return Other;
}


function Button({text, buttonType, styleType,onClickHandler}){
    return(
     <>
        <button
         className={`${getButtonnStyling(styleType)}`}
          type={buttonType}
          onClick={onClickHandler}
          >
            {text}
           
        </button>
     </>
    );
}
export default Button;
