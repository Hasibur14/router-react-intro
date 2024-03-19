import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id, name, email, phone} = user;

    const userStyle = {
        border: '2px solid green',
        padding: '5px',
        margin: '10px',
        borderRadius: '10px',
        
    }

    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}><button>Show Details</button></Link>
        </div>
    );
};

export default User;