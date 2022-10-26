const Random = (props) => {
    const {min, max} = props
    return (
        <div>
         Random value between {min} and {max} {`=>`} {Math.floor(Math.random() * (max - min + 1) + min)}
        </div>
    )
}

export default Random