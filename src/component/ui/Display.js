function Display(props) {
    const { numberDisplay } = props
    return (
        <div className='component-display'>
            <div className='display-content'>{`${
                numberDisplay.number || numberDisplay.sum || '0'
            }`}</div>
        </div>
    )
}

export default Display
