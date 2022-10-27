const zero = '☆☆☆☆☆';
const one = '★☆☆☆☆';
const two = '★★☆☆☆';
const three = '★★★☆☆';
const four = '★★★★☆';
const five = '★★★★★';

const DriverCard = (props) => {
  const { name, rating, img, car } = props;
  let starRate;
  if (rating < 4.5) {
    starRate = four;
  } else {
    starRate = five;
  }
  return (
    <div className="driver-card">
      <img src={img} />

      <div className="driver-info">
        <h2>{name}</h2>
        <p>{starRate}</p>
        {car.model} - {car.licensePlate}
      </div>
    </div>
  );
};

export default DriverCard;
