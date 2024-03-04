
import { BsFillHandbagFill } from "react-icons/bs";
function Card( { img, amount, name }) {
    return (
      <>
      
      


      <div className="border-[2px]  h-[300px] w-[240px]  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); px-5">
          <div>
              <img className="h-[180px]" src={img} alt="" />
          </div>
          <hr />
          <div className="font-bold text-[15px] ">
              <p >{name} <span className=""> <br /> {amount}</span> </p>
          </div>
          {/* <div>
              <button className="bg-green-800  px-16 rounded text-white py-2 mt-3">Add to cart</button>
          </div> */}
        
<div className='flex justify-around'>
    <button className='  flex justify-around p-2 rounded border-green-300 bg-green-800 text-white mt-4   pt-2 h-[54px] w-[280px]'>
        Add to Cart
  
    <div className='mt-2'>
    <BsFillHandbagFill />

    </div>
    </button>
    </div>


      </div>
      
  
  </>
    )
  }

  export default Card