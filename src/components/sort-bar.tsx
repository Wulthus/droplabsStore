import { useState } from "react";
import { SortStateType } from "../types/SortStateTypes";
import { FakeProduct } from "../types/FakeProduct";

interface SortBarProps {
    products: FakeProduct[],
    productsRef: {
        current: FakeProduct[],
    }
    setProducts: (arg0: FakeProduct[])=>void,
}

export const SortBar = function({ products, setProducts, productsRef }: SortBarProps){

    //-----------------------------------------------------------------------------STATE

    const [sortState, setSortState] = useState<SortStateType>('default');

    //-----------------------------------------------------------------------------SORTING HANDLERS

    const handleNameSort = function(){
        const sortedProducts = [...products].sort((prev, next)=>{
            if (sortState === "nameAsc"){
                setSortState("nameDesc");
                return next.title.localeCompare(prev.title);
            } else {
                setSortState("nameAsc");
                return prev.title.localeCompare(next.title);
            }

        });

        setProducts(sortedProducts);
    }

    const handlePriceSort = function(){
        const sortedProducts = [...products].sort((prev, next)=>{
            if (sortState === "priceAsc"){
                setSortState('priceDesc')
                return next.price - prev.price 
            } else {
                setSortState('priceAsc')
                return prev.price - next.price 
            }

        });

        setProducts(sortedProducts);
    }

    const handleDefaultSort = function(){
        if (sortState === 'default') return;
        setSortState('default');
        setProducts(productsRef.current);
    }

    //-----------------------------------------------------------------------------------------RENDER

    return (
        <div className="sort-bar">
            <p>Sort by:</p>
            <button className="sort-bar__button" onClick={handleNameSort}>Name</button>
            <button className="sort-bar__button" onClick={handlePriceSort}>Price</button>
            <button className="sort-bar__button" onClick={handleDefaultSort}>Default</button>
        </div>
    )
}