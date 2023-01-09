import React, {useState, useCallback, useDebugValue} from "react";

const useToggle = (initialState = false) =>{

    const [state, setState] =  useState(initialState)

    useDebugValue(state)

    const toggle = useCallback(() => setState(state => !state), []);

    return [state, toggle]

    
    
}

export default useToggle;

// Basically, what this hook does is that, it takes a parameter with value true or false and toggles that value to opposite. It's useful when we want to take some action into it's opposite action, for example: show and hide modal, show more/show less text, open/close side menu.

