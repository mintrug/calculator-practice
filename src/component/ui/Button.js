function Button(props) {
    const { name, feature, setNumberDisplay } = props
    const getButtonContent = () => {
        setNumberDisplay(name)
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
