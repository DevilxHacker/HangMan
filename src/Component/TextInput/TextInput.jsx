function TextInput({label,value,type,onChange}){

    return<>
    <label className="block">
        {label && <span className="block m-3 text-3xl text-blue-300">{label}</span>}
     <input className="w-full px-4 py-2 border border-gray-500 rounded-md "
      type={type} 
      placeholder={label}
      value={value}
      onChange={onChange}/>
      </label>
    </>
}
export default TextInput;