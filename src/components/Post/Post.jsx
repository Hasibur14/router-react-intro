import { Link, useNavigate } from "react-router-dom";


const Post = ({ post }) => {
    const { id, title, body } = post;
     const navigate = useNavigate();

    const userStyle = {
        border: '2px solid green',
        padding: '5px',
        margin: '10px',
        borderRadius: '10px',

    }
const handleShowDetails = () => {
 navigate(`/post/${id}`)
}

    return (
        <div style={userStyle}>
            <h3>Post of Id: {id}</h3>
            <p>Title: {title}</p>
            <Link to={`/post/${id}`}><button>Post Details</button></Link>
            <button onClick={handleShowDetails}>Show Details</button>
        </div>
    );
};

export default Post;