import { useState } from 'react'

import Display from './Display'
import ButtonBox from './ButtonBox'

function Wrapper() {
    const [numberDisplay, setNumberDisplay] = useState('')

    return (
        <div className='wrapper'>
            <Display numberDisplay={numberDisplay} />
            <ButtonBox setNumberDisplay={setNumberDisplay} />
        </div>
    )
}

export default Wrapper
