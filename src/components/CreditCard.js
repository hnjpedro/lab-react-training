import visa from '../assets/images/visa.png';
import master from '../assets/images/master-card.png';
const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;
  let logo;
  switch (type) {
    case 'Visa':
      logo = visa;
      break;
    case 'Master Card':
      logo = master;
      break;
  }
  let month
  if (expirationMonth < 10) {
    month = `0${expirationMonth}`
  } else {
    month = expirationMonth
  }
  return (
    <div className="credit-card" style={{backgroundColor: `${bgColor}`, color: `${color}`}}>
      <div>
        <img src={logo} />
      </div>
      <div className='number'><span className='password'>................</span>{number.slice(12)}</div>
      <div className='footer'>
      <div>Expires {month}/{expirationYear.toString().slice(2)} <span className='bank'>{bank}</span></div>
      <div>{owner}</div>
      </div>
    </div>
  );
};

export default CreditCard;
