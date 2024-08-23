import React ,{useState} from 'react'

import { useNavigate, useLocation } from 'react-router-dom';
const SideMenu = () => {
    const formatTitleForURL = (title) => {
        return title.toLowerCase().replace(/\s+/g, '-');
      };
    const ListCategory = ['Tech', 'Entertainment', 'Business', 'Sports', 'Politics', 'Latest', 'Showbiz', 'Global', 'More']
    const handleCategoryClick = (category) => {
        return () => {
          setSelectedCategory(category);
          setActiveCategory(category);
          navigate(`/category/${formatTitleForURL(category)}`, { state: { data: category } });
    
    
        };
      };
      const navigate = useNavigate();
      const location = useLocation();
  const locationData = location.state?.data;
  const [selectedCategory, setSelectedCategory] = useState(locationData || "");
  
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [activeCategory, setActiveCategory] = useState(locationData || "");
  return (
 
          <div className='SideMenu'>
            <ul>
              {ListCategory.map((category) => (
                <li
                  key={category}
                  onClick={handleCategoryClick(category)}
                  className={activeCategory === category ? 'active' : ''}
                >
                  {category}
                </li>
              ))}
            </ul>

          </div>
     

  )
}

export default SideMenu