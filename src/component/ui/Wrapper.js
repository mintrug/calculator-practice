import { useState } from 'react'

import Display from './Display'
import ButtonBox from './ButtonBox'

function Wrapper() {
    const initNumber = {
        number: null,
        sum: null,
        operate: null,
    }

    const calculate = (prev, value) => {
        if (Number(value) || value === '0') {
            // There is no operation. Update 'number' so that 0 is not leading.
            if (prev.number) {
                return {
                    ...prev,
                    number: prev.number === '0' ? value : prev.number + value,
                }
            } else {
                return {
                    ...prev,
                    number: value,
                }
            }
        } else if (value === 'AC') {
            return initNumber
        } else if (value === '=') {
            if (prev.operate) {
                return {
                    number: null,
                    sum: operate(prev.sum, prev.number, prev.operate),
                    operate: null,
                }
            } else {
                return {
                    ...prev,
                }
            }
        } else if (value === '+/-') {
            if (prev.number) {
                return {
                    ...prev,
                    number: -Number(prev.number),
                }
            }
            if (prev.sum) {
                return {
                    ...prev,
                    sum: -Number(prev.sum),
                }
            }
            return initNumber
        } else if (value === '%') {
            if (prev.operate) {
                return {
                    sum: operate(prev.sum, prev.number, prev.operate) / 100,
                    number: null,
                    operate: null,
                }
            }
            if (prev.number) {
                return {
                    ...prev,
                    number: prev.number / 100,
                }
            }
            return {
                ...prev,
            }
        } else if (value === '.') {
            if (prev.number) {
                if (prev.number.includes('.')) {
                    return {
                        ...prev,
                    }
                } else {
                    return {
                        ...prev,
                        number: prev.number + value,
                    }
                }
            }
            return {
                ...prev,
                number: '0.',
            }
        } else {
            if (prev.sum) {
                if (!prev.operate) {
                    if (prev.number) {
                        return {
                            number: null,
                            sum: prev.number,
                            operate: value,
                        }
                    }
                    return {
                        ...prev,
                        operate: value,
                    }
                }
                return {
                    number: null,
                    sum: operate(prev.sum, prev.number, prev.operate),
                    operate: value,
                }
            }
            return {
                number: null,
                sum: prev.number,
                operate: value,
            }
        }
    }

    const operate = (num1, num2, operate) => {
        if (operate === '+') {
            return Number(num1) + Number(num2)
        }
        if (operate === '-') {
            return Number(num1) - Number(num2)
        }
        if (operate === 'x') {
            return Number(num1) * Number(num2)
        }
        if (operate === '÷') {
            return Number(num1) / Number(num2)
        }
    }
    const [numberDisplay, setNumberDisplay] = useState(initNumber)
    const updateNumberDisplay = (value) => {
        setNumberDisplay((prev) => calculate(prev, value))
    }

    return (
        <div className='wrapper'>
            <Display numberDisplay={numberDisplay} />
            <ButtonBox updateNumberDisplay={updateNumberDisplay} />
        </div>
    )
}

export default Wrapper
