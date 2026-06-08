import "./MenuItems.css";

function MenuItems({ item,image,description,price }) 
{
    return (
        <div className="menu-item">
            <div className="menu-item-image">
                <img src={image} alt={item} />
            </div>
            <div className="menu-item-details">
            <h3>{item}</h3>
            <p>{description}</p>
            <h4>{price}</h4>
            </div>
        </div>
    );
}
export default MenuItems;