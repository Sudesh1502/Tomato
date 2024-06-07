import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='exploreMenu' id='exploreMenu'>
      <h1>Explore Our Menu</h1>
      <p className='exploreMenuText'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining, onr delicious meal at a time.</p>
      <div className="exploreMenuList">
        {
            menu_list.map((item, index)=>{
                return(
                    <div onClick={()=>{
                        setCategory(prev=>prev===item.menu_name?"All":item.menu_name)
                    }} key={index} className="exploreMenuListItems">
                        <img className={category === item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name} />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })
        }
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
