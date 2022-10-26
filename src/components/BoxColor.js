const BoxColor = (props) => {
    const {r, g, b} = props
    let bHex
    let gHex
    let rHex
    if (b < 16) {
        bHex = '0' + b.toString(16)
    } else {
        bHex = b.toString(16)
    }
    if (g < 16) {
        gHex = '0' + g.toString(16)
    } else {
        gHex = g.toString(16)
    }
    if (r < 16) {
        rHex = '0' + r.toString(16)
    } else {
        rHex = r.toString(16)
    }
    return (
        <div className='box-color' style={{backgroundColor: `rgb(${r},${g},${b})`}}>
            rgb({r}, {g}, {b}) <br />
            #{rHex}{gHex}{bHex}
        </div>
    )
}

export default BoxColor