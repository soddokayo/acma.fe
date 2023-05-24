const MemoCard = (props) => {
    return(
        <div class="card mb-3 mx-2" style={{width: '18rem'}}>
        <div class="card-body">
            <h5 class="card-title">{props.memo.category}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">{props.memo.author}</h6>
            <p class="card-text">{props.memo.text}</p>
            <a href="#!" class="card-link">Edit</a>
            <a href="#!" class="card-link">Delete</a>
        </div>
        </div>
    );
};

export default MemoCard;