import { Link } from "react-router-dom";
import axios from "axios";

const MemoCard = (props) => {
    const deleteMemo = async () => {
        await axios.delete(process.env.REACT_APP_BE_URL+"/api/memo/"+props.memo.id+"?useFile=True")
        .then((res) => {
            console.log(res);
            window.location.reload();
        });
    };

    return(
        <div class="card mb-3 mx-2" style={{width: '18rem'}}>
        <div class="card-body">
            <h5 class="card-title">{props.memo.category}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">{props.memo.author}</h6>
            <p class="card-text">{props.memo.text}</p>
            <Link onClick={deleteMemo} to="/list" class="card-link">Delete</Link>
        </div>
        </div>
    );
};

export default MemoCard;