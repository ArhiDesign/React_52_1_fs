import Button from '../Button/Button';
import './styles.css'
import { userData } from './data';


function ProfileCard () {
    console.log(userData);
    
    return (
        <div className="profile-card">
            <img src={userData.avatar}/>
            <h3>FullName: {userData.fullName}</h3>
            <div>Profession: {userData.profession}</div>
            <div>Hobby: {userData.hobby}</div>
            <Button />
            </div>
    );
}

export default ProfileCard; 