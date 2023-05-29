// useInput.js

import { useState } from 'react';

function useInput(initialValue) {

    const [ value, setValue ] = useState(initialValue);

    return [
        value,
        {
            value,
            onChange: e => {
                setValue(e.target.value)
            }
        }
    ];

}

export default useInput;