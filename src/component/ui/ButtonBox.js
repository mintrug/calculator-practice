import Button from './Button'

function ButtonBox(props) {
    const { updateNumberDisplay } = props

    return (
        <div className='component-button-box'>
            <div className='component-button-row'>
                <Button name='AC' updateNumberDisplay={updateNumberDisplay} />
                <Button name='+/-' updateNumberDisplay={updateNumberDisplay} />
                <Button name='%' updateNumberDisplay={updateNumberDisplay} />
                <Button
                    name='÷'
                    feature='orange'
                    updateNumberDisplay={updateNumberDisplay}
                />
            </div>
            <div className='component-button-row'>
                <Button name='7' updateNumberDisplay={updateNumberDisplay} />
                <Button name='8' updateNumberDisplay={updateNumberDisplay} />
                <Button name='9' updateNumberDisplay={updateNumberDisplay} />
                <Button
                    name='x'
                    feature='orange'
                    updateNumberDisplay={updateNumberDisplay}
                />
            </div>
            <div className='component-button-row'>
                <Button name='4' updateNumberDisplay={updateNumberDisplay} />
                <Button name='5' updateNumberDisplay={updateNumberDisplay} />
                <Button name='6' updateNumberDisplay={updateNumberDisplay} />
                <Button
                    name='-'
                    feature='orange'
                    updateNumberDisplay={updateNumberDisplay}
                />
            </div>
            <div className='component-button-row'>
                <Button name='1' updateNumberDisplay={updateNumberDisplay} />
                <Button name='2' updateNumberDisplay={updateNumberDisplay} />
                <Button name='3' updateNumberDisplay={updateNumberDisplay} />
                <Button
                    name='+'
                    feature='orange'
                    updateNumberDisplay={updateNumberDisplay}
                />
            </div>
            <div className='component-button-row'>
                <Button
                    name='0'
                    feature='wide'
                    updateNumberDisplay={updateNumberDisplay}
                />
                <Button name='.' updateNumberDisplay={updateNumberDisplay} />
                <Button
                    name='='
                    feature='orange'
                    updateNumberDisplay={updateNumberDisplay}
                />
            </div>
        </div>
    )
}
export default ButtonBox
