import React, { useCallback, useDebugValue, useState } from 'react'

const useToggle = (initialstate = false) => {
    
    const [state, setState] = useState(initialstate)

    useDebugValue(state)

    const toggle = useCallback(() => setState(state => !state), [])
  return [state, toggle]
}

export default useToggle