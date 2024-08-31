import React, { createContext } from 'react';
import { category_list, posts, Allcategory_list } from './assets/assets'; 

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
    const contextValue = {
        category_list,
        posts,
        Allcategory_list
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
