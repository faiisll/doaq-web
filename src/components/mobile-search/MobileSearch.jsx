import React from 'react'
import { useDispatch } from 'react-redux'
import { changeKey, toggleIsSearch } from '../navbar/navbarSlice';
import PageAnimate from '../page-animate/PageAnimate';
import { useHistory } from 'react-router';

export default function MobileSearch() {
    const dispatch = useDispatch();
    const history = useHistory();

    function handleSubmit(e){
        e.preventDefault();
        // console.log(e.target.elements.key.value);
        dispatch(changeKey(e.target.elements.key.value));

        dispatch(toggleIsSearch());
        history.push('/search');
    
    
      }

    return (
        
        <PageAnimate className="w-full h-full md:hidden fixed z-10 left-0 top-0">
            <div className="z-30 fixed w-full left-0 top-0 px-5 my-10">
                <div className="w-full flex py-4 px-4 bg-white rounded-xl shadow-lg">
                    <form onSubmit={handleSubmit} className="w-full">
                        <input type="text" name="key" placeholder="search..." className="w-full focus:outline-none" />

                    </form>

                </div>

            </div>
            <div onClick={() => dispatch(toggleIsSearch())} className="w-full h-full fixed left-0 top-0 z-20 bg-black opacity-50 px-4">
            </div>
        </PageAnimate>
    )
}
