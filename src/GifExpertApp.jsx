
import { React, useState } from 'react';
import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {

    const [ categories, setcategories] = useState( [] );
    

    const onAddCategory = ( newCategory) => {

        if (categories.includes(newCategory)) return;
        setcategories( [newCategory, ...categories ] )
    }
    
  return (
    <>
     <h1>Gif-Expert-App</h1>
     <AddCategory onNewCategory= { onAddCategory } />
     { categories.map( category => <GifGrid key={ category } category={ category }/>) }
    </>
  )
}

export default GifExpertApp
