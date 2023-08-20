import React from 'react';
import { FaArrowLeft, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// this component helps us to navigate between pages easily

const Navigator = ({ setPage, page }) => {
    const handleNextPage = () => {
        setPage(last => last + 1)
    }
    const handlePrevPage = () => {
        setPage(last => last - 1)
    }
    const firstPage = () => {
        setPage(1)
    }
    const lastPage = () => {
        setPage(42)
    }
    return (
        <div className='w-100 d-flex justify-content-evenly' style={{ height: '5vh' }}>
            <div>
                {
                    page <= 1 ? null : (
                        <FaArrowLeft
                            className='icon mt-3 mb-3'
                            onClick={handlePrevPage}
                            title='Prev Page'
                        />
                    )
                }
                <FaChevronLeft
                    className='icon m-3'
                    onClick={firstPage}
                    title='First Page'
                />
            </div>
            <div>
                <FaChevronRight
                    className='icon m-3'
                    onClick={lastPage}
                    title='Last Page'
                />
                {
                    page >= 42 ? null : (
                        <FaArrowRight
                            className='icon mt-3 mb-3'
                            onClick={handleNextPage}
                            title='Next Page'
                        />
                    )

                }
            </div>
        </div>
    );
}

export default Navigator;
