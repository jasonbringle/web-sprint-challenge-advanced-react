import { useEffect} from 'react'

import useLocalStorage from './useLocalStorage'

export const useDarkMode = () => {
const [value, setValue] = useLocalStorage("on")

//USEFFECT IS A SIDE AFFECT THAT RUNS AFTER THE RENDER
useEffect(() => {

    //THIS ASSIGNS THE 'BODY' ELEMENT TO ELEMENT
    let body = document.querySelector('body')

    //THIS LOOKS AT THE INITIAL STATE (TRUE OR FALSE), AND THEN PUTS THE CLASSNAME ON THE BODY ELEMENT
     return value ? body.classList.add('dark-mode'): body.classList.remove('dark-mode');

     //THE DEPENDENCY ARRAY IS ASSIGNED TO STATE.  IT USES STATE TO DETERMINE IF USEEFFECT SHOULD FIRE
    },[value]
);
// WE RETURN STATE AND WE RETURN THE STATE SETTER. THE STATE SETTER IN THIS CASE IS PASSED THROUGH TO USELOCALSTORAGE
return [value,setValue]
}

export default useDarkMode;