import moment from 'moment';

const IdCard = (props) => {
  const {firstName, lastName, gender, height, birth} = props
  return (
    <div className="id-card">
      
      <img src={props.picture} />
      <div>
        <p><strong>First name:</strong> {firstName}</p>
        <p><strong>Last name:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height:</strong> {height} m</p>
        <p><strong>Birth:</strong> {moment(birth).format('dddd DD/MM/YYYY')}</p>
      </div>
    </div>
  );
}

export default IdCard;
