const zero = '☆☆☆☆☆'
const one = '★☆☆☆☆'
const two = '★★☆☆☆'
const three = '★★★☆☆'
const four = '★★★★☆'
const five = '★★★★★'

const Rating = (props) => {
    const number = props.children
    let starRate
    if (number < .5) {
        starRate = zero
    } else if (number < 1.5) {
        starRate = one
    } else if (number < 2.5) {
        starRate = two
    } else if (number < 3.5) {
        starRate = three
    } else if (number < 4.5) {
        starRate = four
    } else {
        starRate = five
    }
    return (
        <div>
            {starRate}
        </div>
    )
}

export default Rating