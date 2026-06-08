import MenuItems from "./components/MenuItems";
import "./App.css";
function App(){
  return(
    <div className="App">
      <header>
        <h1>Sip. Relax. Repeat...!</h1>
        <p>Experience the perfect blend of taste and comfort.</p>

      </header>
      <MenuItems
        item="Espresso"
        image="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500"
        description="A strong and bold coffee made by forcing steam through ground coffee beans."
        price="$3.50"
      />
      <MenuItems
        item="Cappuccino"
        image="https://images.unsplash.com/photo-1534778101976-62847782c213?w=500"
        description="A creamy coffee drink made with equal parts espresso, steamed milk, and milk foam."
        price="$4.00"/>
      <MenuItems
        item="Latte"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcMYXOiiokyQldUqCSvfVDJNqDl2mAaKIN7g&s"
        description="A smooth and milky coffee drink made with espresso and steamed milk, topped with a small amount of foam."
        price="$4.50"/>
      <MenuItems
        item="Mocha"
        image="https://www.homegrounds.co/wp-content/uploads/2022/04/mocha-coffee-with-syrup-topping.webp"
        description="A delicious coffee drink made with espresso, steamed milk, and chocolate syrup, topped with whipped cream."
        price="$5.00"/>
      <MenuItems
        item="Americano"
        image="https://cdn.uengage.io/uploads/28289/image-NL48BZ-1774088751.png"
        description="A strong coffee drink made by diluting espresso with hot water."
        price="$3.00"/>
      <MenuItems
        item="Macchiato"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDjHozsuBpoDIIW6aGU-P6fn3s3BEE3CyN2g&s"
        description="A bold coffee drink made with espresso and a small amount of steamed milk, topped with a dollop of foam."
        price="$4.00"/>
      <MenuItems
        item="Flat White"
        image="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500"
        description="A smooth and velvety coffee drink made with espresso and steamed milk, similar to a latte but with less foam."
        price="$4.50"/>
      <MenuItems
        item="Iced Coffee"
        image="https://www.allrecipes.com/thmb/Hqro0FNdnDEwDjrEoxhMfKdWfOY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21667-easy-iced-coffee-ddmfs-4x3-0093-7becf3932bd64ed7b594d46c02d0889f.jpg"
        description="A refreshing coffee drink made by brewing coffee and then chilling it, served over ice."
        price="$3.50"/>
      <MenuItems
        item="Affogato"
        image="https://www.manusmenu.com/wp-content/uploads/2016/04/affogato-al-caffe-espresso-poured-over-gelato-500x375.webp"
        description="A delightful coffee dessert made by pouring a shot of hot espresso over a scoop of vanilla ice cream."
        price="$5.00"/>
      
    </div>
  );
}
export default App;