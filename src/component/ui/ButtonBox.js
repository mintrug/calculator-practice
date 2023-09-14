import Button from './Button'

function ButtonBox() {
    return (
        <div className='component-button-box'>
            <div className='component-button-row'>
                <Button name='AC' />
                <Button name='+/-' />
                <Button name='%' />
                <Button name='÷' feature='orange' />
            </div>
            <div className='component-button-row'>
                <Button name='7' />
                <Button name='8' />
                <Button name='9' />
                <Button name='x' feature='orange' />
            </div>
            <div className='component-button-row'>
                <Button name='4' />
                <Button name='5' />
                <Button name='6' />
                <Button name='-' feature='orange' />
            </div>
            <div className='component-button-row'>
                <Button name='1' />
                <Button name='2' />
                <Button name='3' />
                <Button name='+' feature='orange' />
            </div>
            <div className='component-button-row'>
                <Button name='0' feature='wide' />
                <Button name='.' />
                <Button name='=' feature='orange' />
            </div>
        </div>
    )
}
export default ButtonBox
