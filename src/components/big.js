import "./big.css";

function Big({ Age, Dob, name, imageLink, mail }) {
  return (
    <div className="bigDiv">
      <div className="imgDiv">
        <img className="bigImage" src={imageLink}></img>
      </div>
      <div className="contentDiv">
        <h1 className="Name">{name}</h1>
        <p className="emailId">{mail}</p>
        <p>{Dob}</p>
        <p>{Age}</p>
      </div>
    </div>
  );
}
export default Big;
