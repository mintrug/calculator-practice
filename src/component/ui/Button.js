function Button(props) {
    const { name, feature, updateNumberDisplay } = props
    const getButtonContent = () => {
        updateNumberDisplay(name)
    }

    return (
        <div className={`component-button${feature ? '-' + feature : ''}`}>
            <div
                className={`button${feature ? '-' + feature : ''}-content`}
                onClick={getButtonContent}
            >
                {name}
            </div>
        </div>
    )
}

export default Button
