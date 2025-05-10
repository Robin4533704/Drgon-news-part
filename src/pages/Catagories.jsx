import React, { use } from 'react';
import { NavLink } from 'react-router';


const categoryPromise = fetch("/categories.json")
.then(res=> res.json())


const Catagories = () => {
    //  const [categories, setCategories]= useState([]);
    //        useEffect(() =>{
    //         fetch("categories.json").then(res => res.json()).then(data => setCategories(data))
    //     }, []);
    
      const categories = use(categoryPromise);

    return (
        <div>
            <h2 className='font-bold'>All catagories({categories.length})</h2>
            <div className='grid grid-cols-1 mt-4 gap-3'>
            {categories.map(category => (
  <NavLink key={category.id} to={`/category/${category.id}`}>
    {category.name}
  </NavLink>
))}

            </div>
        </div>
    );
};

export default Catagories;