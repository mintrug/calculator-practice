import Button from './Button'

function ButtonBox(props) {
    const { setNumberDisplay } = props

    return (
        <div className='component-button-box'>
            <div className='component-button-row'>
                <Button name='AC' setNumberDisplay={setNumberDisplay} />
                <Button name='+/-' setNumberDisplay={setNumberDisplay} />
                <Button name='%' setNumberDisplay={setNumberDisplay} />
                <Button
                    name='÷'
                    feature='orange'
                    setNumberDisplay={setNumberDisplay}
                />
            </div>
            <div className='component-button-row'>
                <Button name='7' setNumberDisplay={setNumberDisplay} />
                <Button name='8' setNumberDisplay={setNumberDisplay} />
                <Button name='9' setNumberDisplay={setNumberDisplay} />
                <Button
                    name='x'
                    feature='orange'
                    setNumberDisplay={setNumberDisplay}
                />
            </div>
            <div className='component-button-row'>
                <Button name='4' setNumberDisplay={setNumberDisplay} />
                <Button name='5' setNumberDisplay={setNumberDisplay} />
                <Button name='6' setNumberDisplay={setNumberDisplay} />
                <Button
                    name='-'
                    feature='orange'
                    setNumberDisplay={setNumberDisplay}
                />
            </div>
            <div className='component-button-row'>
                <Button name='1' setNumberDisplay={setNumberDisplay} />
                <Button name='2' setNumberDisplay={setNumberDisplay} />
                <Button name='3' setNumberDisplay={setNumberDisplay} />
                <Button
                    name='+'
                    feature='orange'
                    setNumberDisplay={setNumberDisplay}
                />
            </div>
            <div className='component-button-row'>
                <Button
                    name='0'
                    feature='wide'
                    setNumberDisplay={setNumberDisplay}
                />
                <Button name='.' setNumberDisplay={setNumberDisplay} />
                <Button
                    name='='
                    feature='orange'
                    setNumberDisplay={setNumberDisplay}
                />
            </div>
        </div>
    )
}
export default ButtonBox
