import "./card.css";
function Card({
  age,
  firstName,
  dob,
  lastName,
  imageUrl,
  setAge,
  setDob,
  setImageUrl,
  setName,
  email,
  setMail,
}) {
  function cardClickHandler() {
    console.log("clicked on card");
    setAge(age);
    setDob(dob);
    let newStr = firstName + " " + lastName;
    setName(newStr);
    setImageUrl(imageUrl);
    setMail(email);
  }

  return (
    <div className="cardContainer" onClick={cardClickHandler}>
      <p className="gender">{age}</p>
      <h3 className="name">
        {firstName} {lastName}
      </h3>
      <p className="mail">{dob}</p>
    </div>
  );
}
export default Card;
