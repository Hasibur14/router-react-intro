

const Todu = ({todu}) => {
const {id, title, completed} = todu;

const todusStyle = {
    border: '2px solid green',
    padding: '5px',
    margin: '10px',
    borderRadius: '10px',

}

    return (
        <div style={todusStyle}>
            <h3>Todus id: {id}</h3>
            <p>Title: {title}</p>
            <p>Completed: {completed}</p>
        </div>
    );
};

export default Todu;