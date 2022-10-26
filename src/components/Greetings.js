const Greetings = (props) => {
    let language;
    switch (props.lang) {
        case 'de':
            language = 'Hallo';
            break;
        case 'en':
            language = 'Hello';
            break;
        case 'es':
            language = 'Hola';
            break;
        case "fr":
            language = "Bonjour"
            break;
    }
    return (
        <div>
            {language}, {props.children}
        </div>
    )
}

export default Greetings