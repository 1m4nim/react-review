// function MyButton(){
//   return(
//     <button>
//       I'm a button
//     </button>
//   );
// }

// export default function MyApp(){
//   return(
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton/>
//     </div>
//   )
// }


// const user = {
//   name: "Hedy Lamarr",
//   imageUrl: "https://i.imgur.com/yXOvdOSs.jpg'",
//   imageSize: 90,
// };

// export default function Profile() {
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={"Photo of " + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize
//         }}
//       />
//     </>
//   );
// }


// type Product={
//   title:string;
//   isFruit:boolean;
//   id:number;
// };

// const products:Product[]=[
//   {title:"Cabbage",isFruit:false,id:1},
//   {title:"Garic",isFruit:false,id:2},
//   {title:"Apple",isFruit:true,id:3},
// ];

// export default function ShoppingList(){
//   const listItems=products.map((product)=>
//   <li
//     key={product.id}
//     style={{
//       color:product.isFruit ? "magenta" : "darkgreen"
//     }}
//     >
//       {product.title}
//     </li>
//   );

//   return(
//     <ul>{listItems}</ul>
//   )
// }

// import {useState} from "react";

// export default function MyApp(){
//   return(
//     <div>
//       <h1>Counnter that updata separately</h1>
//       <MyButton/>
//       <MyButton/>
//     </div>
//   )
// }

// function MyButton(){
//   const [count, setCount]=useState(0);

//   function handleclick(){
//     setCount(count+1);
//   }

//   return(
//     <button onClick={handleclick}>
//       Clicked {count} times
//     </button>
//   )
// }


import { useState } from 'react';

interface MyButtonProps {
  count: number;
  onClick: () => void;
}

function MyButton({ count, onClick }: MyButtonProps) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}