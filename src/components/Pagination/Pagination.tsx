import {FC, MouseEvent, useEffect, useState} from "react";

import style from './Pagination.module.css';
import {useSearchParams} from "react-router-dom";
import {useAppSelector} from "../../hook";

const Pagination: FC = () => {
    const {totalPages} = useAppSelector(state => state.movieReducer);
    const [query, setQuery] = useSearchParams({page: '1'});
    const [pages, setPages] = useState(totalPages);

    useEffect(() => {
        const arrTop = document.getElementById('arrowTop') as HTMLElement;

        window.addEventListener('scroll', () => {
            arrTop.hidden = (window.scrollY < document.documentElement.clientHeight / 2);
        });
    }, [])

    useEffect(() => {
        if (totalPages > 500) {
            setPages(500);
        }
    }, [totalPages])

    const changePage = (e: MouseEvent<HTMLButtonElement>) => {
        const nextPage = document.getElementById('next');
        // const prevPage = document.getElementById('prev');

        let page = parseInt(query.get('page') || '1', 10) ;

        if (e.target === nextPage) {
            page++;
            if (page > pages) {
                page = 1;
            }
        } else {
            page--;
            if (page <= 0) {
                page = pages;
            }
        }

        setQuery({page: `${page}`, with_genres: ''});
    }

    function toUp() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div>
            <div className={style.pagination}>
                <button className={`${style.btnPagination} ${style.btnPaginationPrev} ${style.lightBg}`}
                        onClick={changePage} id={'prev'}>Prev
                </button>
                <button className={`${style.btnPagination} ${style.btnPaginationNext} ${style.lightBg}`}
                        onClick={changePage} id={'next'}>Next
                </button>
                <div className={`${style.arrow} ${style.lightBg}`} id={'arrowTop'} hidden={true} onClick={toUp}></div>
            </div>
        </div>
    );
};

export {Pagination};