import { useState }from 'react'

const useLocalStorage = (key, initialValue) => {
    //THIS IS INITIAL STATE FOR USELOCALSTORAGE...IT IS A FUNCTION THAT USES STATE.
const [ storedValue, setStoredValue ] = useState(() => {

    //THIS RETRIEVES THE ITEM KEY FROM LOCALSTORAGE AND ASSIGNS IT TO A VARIABLE
    const item = window.localStorage.getItem(key);

    //THIS RETURNS EITHER THE VALUE FOUND IN LOCALSTORAGE OR THE INITIAL VALUE.
    return item ? JSON.parse(item) : initialValue;        
})

    //THIS SETS TRUE/OR FALSE TO THE STORED ITEM VALUE IN USELOCALSTORAGE. 
    //IT USES THE VALUE PASSED THROUGH FROM USEDARKMODE (AKA"VALUE")
const setValue = value => {
    console.log(value)
    setStoredValue(value);
    //THIS SETS THE VALUE INTO USELOCALSTORAGE
    window.localStorage.setItem(key, JSON.stringify(value))
}

//THIS RETURNS STATE AND THE SETTER FOR PUTTING THE STATUS INTO USELOCALSTORAGE
return [storedValue, setValue]

};
export default useLocalStorage;