import React from 'react';
import '../assets/style/components/Categories.scss';

const categories =({children,title})=>(
    <div className="categories">
        <h3 className="categories__title">{title}</h3>   //en el codigo original no venia sin el div, se le coloco el div para capsular el h3
         {children}
    </div>
        
)
export default categories;