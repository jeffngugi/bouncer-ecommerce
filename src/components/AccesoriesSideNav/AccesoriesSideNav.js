import React, {useState} from 'react'

const brands = {"apple":99, "LG":57, "Samsung":35, "Oppo":22};
const categories = {"accessories":99, "laptop":57, "phone":35, "tv":22, "audio":10};

const SideNavLi =({name, value})=>{
    return(
        <li className="list-group-item d-flex justify-content-between align-items-center  bg-transparent p2 border-0">
        {name}
            <span className="badge badge-pill">{value}</span>
        </li>
    )
}

const SideNavCard = ({title, price, setPrice})=>{

   let mybrands = Object.keys(brands).map(key => {
       return(
                <SideNavLi name={key} value={brands[key]}/> 
       )
   })

   let myaccessories = Object.keys(categories).map(key => {
    return(
             <SideNavLi name={key} value={categories[key]}/> 
    )
})


    return(
        <div className="card bg-lightgray my-4 border-0">
        <div className="ml-3 my-3">
        {title}
        </div>
        

        { title === 'CATEGORIES' || title ===  'BRAND'? (
                    <ul className="list-group  bg-transparent">
                    {
                    title ==='CATEGORIES'?(
                    myaccessories
                    
                    ):
                    mybrands
                    }
                    
                   
                    </ul>
                     ) 
                      : title === 'PRICES' ? (
                          <div className='m-1 p-2'>
                              <p className='p2'>${price} </p>
                              <input 
                                    type="range" 
                                    min={0} 
                                    max={309999}
                                    onChange={(e)=>setPrice(e.target.value)}
                                    value={price}
                                />
                              </div>
                      )
                     : (
                        <div className='m-3'>
                        ghhhhghgh
                        </div>
                     )}
        
        </div>
    )
}
const AccesoriesSideNav = () => {

    const [count, setCount] = useState(0);

    return (
        <>
       <SideNavCard title='CATEGORIES'/>
       <SideNavCard title='PRICES' price={count} setPrice={setCount}/>
       <SideNavCard title='COLOR'/>
       <SideNavCard title='BRAND'/>
       
       
            </>
    )
}

export default AccesoriesSideNav
