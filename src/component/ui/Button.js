function Button(props) {
    const { name, feature } = props
    return (
        <div className={`component-button${feature ? '-' + feature : ''}`}>
            <div className={`button${feature ? '-' + feature : ''}-content`}>
                {name}
            </div>
        </div>
    )
}

export default Button
