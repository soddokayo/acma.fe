import React, { useState } from 'react';
import axios from 'axios';

const Create = () => {
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const onAuthorChange = (e) => {
        e.preventDefault();
        setAuthor(e.target.value);
    };

    const onTextChange = (e) => {
        e.preventDefault();
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const memo = {
            author: author,
            text: text,
        };

        axios
            .post(process.env.REACT_APP_BE_URL+"/api/memo?useFile=True", memo)
            .then((res) => console.log(res));


    };

    return (
        <div class="mt-5">
            <form onSubmit={onSubmit}>
            <div class="row mb-3 px-4">
                <label for="inputAuthor" class="col-sm-2 col-form-label">A u t h o r</label>
                <div class="col-sm-10">
                <input class="form-control" id="inputAuthor" placeholder="guest" value={author} onChange={onAuthorChange} />
                </div>
            </div>
            <div class="row mb-3 px-4">
                <label for="inputText" class="col-sm-2 col-form-label">T e x t</label>
                <div class="col-sm-10">
                <textarea class="form-control" id="inputText" rows="3" placeholder="sample text" value={text} onChange={onTextChange} />
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Create Memo</button>
            </form>
        </div>
    );
};

export default Create;