import React, { createContext } from 'react';
import { category_list, posts } from './assets/assets'; // Ensure this path is correct

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
    const contextValue = {
        category_list,
        posts
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
