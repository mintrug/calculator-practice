function Display(props) {
    const { numberDisplay } = props
    return (
        <div className='component-display'>
            <div className='display-content'>{numberDisplay}</div>
        </div>
    )
}

export default Display
