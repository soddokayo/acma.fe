import { useState, useEffect } from "react";
import axios from 'axios';
import qs from 'qs';

import MemoCard from "./MemoCard";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const List = () => {
    const location = useLocation();
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });
    const category = query.category;
    const getFilteredList = (memoList) => {
        if (!category) {
            return memoList
        }
        return memoList.filter(
            (memo) => memo.category === category
        )
    }

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
                <Link class="nav-link active" to="/list">전체</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="?category=music">음악</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="?category=computer">컴퓨터</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="?category=health">건강</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="?category=money">돈</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="?category=english">영어</Link>
            </li>
            </ul>
        </div>
        <div class="row pt-3 px-3">
            {getFilteredList(memoList).map((memo) => {
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