import {FC, useState} from 'react';

import {useAppDispatch, useAppSelector} from "../../hook";
import style from './GenresListForm.module.css'
import {movieActions} from "../../redux";
import {useSearchParams} from "react-router-dom";


const GenresListForm: FC = () => {
    const [checked, setChecked] = useState<string[]>([]);
    const {genres} = useAppSelector(state => state.genreReducer);
    const {page, with_genres} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({page: `${page}`, with_genres: `${with_genres}`});

    // Add/Remove checked item from list
    const handleCheck = (event: any) => {
        let updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }

        console.log(updatedList);
        setChecked(updatedList);
    };

    // Generate string of checked items
/*    const checkedItems = checked.length
        ? checked.reduce((total: string, item: string) => {
            return total + "," + item;
        })
        : "";*/

    function submitForm() {
        dispatch(movieActions.setQueryParams({page: query.get('page'), with_genres: checked.join(',')}))

        setQuery({page: '1', with_genres: checked.join(',')})
    }

    return (
        <div>
            <div className={style.checkList}>
                {genres.map((item, index) => (
                    <div className={style.checkBoxes} key={index}>
                        <label>
                            <input value={item.id} type="checkbox" onChange={handleCheck}/>
                            {item.name}
                        </label>
                    </div>
                ))}

                <button className={`${style.btnSearch} ${style.lightBg}`} onClick={submitForm}>Search</button>
            </div>
{/*            <div>
                {`Items checked are: ${checkedItems}`}
            </div>*/}
        </div>
    );
}


export {GenresListForm};

