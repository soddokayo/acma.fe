import { useState, useEffect } from "react";
import axios from 'axios';

import MemoCard from "./MemoCard";

const List = () => {
    const [memoList, setMemoList] = useState([]);

    const loadList = () => {
        axios
            .get(process.env.REACT_APP_BE_URL+"/api/memo?useFile=True")
            .then((res) => setMemoList(res.data));
    };

    useEffect(() => {
        loadList();
    }, []);

    return (
        <>
        <div class="card text-center">
        <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="?category=all">전체</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="?category=music">음악</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="?category=computer">컴퓨터</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="?category=health">건강</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="?category=money">돈</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="?category=english">영어</a>
            </li>
            </ul>
        </div>
        <div class="row pt-3 px-3">
            {memoList.map((memo) => {
                return (
                    <MemoCard memo={memo} />
                );
            })}
        </div>
        </div>
        </>
    );
};

export default List;