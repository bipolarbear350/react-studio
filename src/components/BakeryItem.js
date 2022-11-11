// TODO: create a component that displays a single bakery item
export function BakeryItem({item, itemToCart}) {
       const x = item.description;
       const y = item.price;
       const z = item.image;
       const a = item.name;
       return (
           <div>
                  <img src={z}/>
           <p>{x}</p>
           <button onClick={() => itemToCart(a + ", ", y)}>Add to cart</button>
           </div>
       )
}