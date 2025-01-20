import Button from "../Button/Button";
import "./styles.css";
import { userData } from "./data";
import userAvatar from "../../assets/avatar.jpg";

function ProfileCard() {
  //достать из объекта userData все свойства и сохранить их в отдельные переменные
  const { fullName, avatar, profession, hobby } = userData;

  // console.log(userData);

  return (
    <div className="profile-card">
      {/* 1 вариант работы с картинкой по ссылке - абсолютный путь */}
      {/*<img src={avatar} className="card-img" alt="avatar image" />*/}
      {/* 2 вариант работы с картинкой - относительный путь (из папки проекта) */}
      <img src={userAvatar} className="card-img" alt="avatar image" />
      <h3>FullName: {fullName}</h3>
      <div>Profession: {profession}</div>
      <div>Hobby: {hobby}</div>
      <Button />
    </div>
  );
}

export default ProfileCard;
