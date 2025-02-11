import React, { useEffect, useState } from 'react';
import { Product, ProductTitle, Productimage, Price } from './Products';
import './Estore.css';

const Estore = () => {
    const RecordsPerPage = 10;
    const [page, setPage] = useState(1);
    const [Data, setData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    const totalPages = Math.ceil(Data.length / RecordsPerPage);

    const getPageData = () => {
        const start = (page - 1) * RecordsPerPage;
        const end = start + RecordsPerPage;
        return Data.slice(start, end);
    };

    return (
        <div>
            <h1>E-store</h1>
            <div className="card-container">
                {getPageData().map((item) => (
                    <Product key={item.id}>
                        <Productimage src={item.image} alt={item.title} />
                        <ProductTitle>{item.title}</ProductTitle>
                        <Price>${item.price}</Price>
                        <button className="buy-button">Buy Now</button>
                    </Product>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="pagination">
                <button 
                    onClick={() => setPage(page - 1)} 
                    disabled={page === 1}
                    className="pagination-btn"
                >
                    ◀ Prev
                </button>
                
                <span className="page-number">Page {page} of {totalPages}</span>

                <button 
                    onClick={() => setPage(page + 1)} 
                    disabled={page === totalPages}
                    className="pagination-btn"
                >
                    Next ▶
                </button>
            </div>
        </div>
    );
};

export default Estore;
