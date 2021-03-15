import React, {useState} from 'react'

const brands = {"apple":99, "beats":57, "lenovo":35, "Oppo":22, "hp":2, "samsung":1, "sony":2, "synix":1};
const categories = { "accessories":99, "laptop":57, "phone":35, "tv":22, "audio":10};

const SideNavLi =({name, category, brand, value, onClick})=>{
    // console.log(category)
    return(
        <li className="list-group-item d-flex justify-content-between align-items-center  bg-transparent p2 border-0" onClick={()=>onClick({category, brand})}>
        {name}
            <span className="badge badge-pill">{value}</span>
        </li>
    )
}

const SideNavCard = ({title, price, setPrice, onClick})=>{

   let mybrands = Object.keys(brands).map(key => {
       return(
                <SideNavLi key={key} category={null} brand={key} name={key} value={brands[key]} onClick={({category, brand})=>onClick({category, brand})}/> 
       )
   })

   let myaccessories = Object.keys(categories).map(key => {
    return(
             <SideNavLi key={key} category={key} brand={null} name={key} value={categories[key]} onClick={({category, brand})=>onClick({category, brand})}/> 
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
const AccesoriesSideNav = ({onClick}) => {

    const [count, setCount] = useState(0);

    return (
        <>
       <SideNavCard title='CATEGORIES' onClick={({category, brand})=>onClick({category, brand})}/>
       <SideNavCard title='PRICES' price={count} setPrice={setCount}/>
       <SideNavCard title='COLOR'/>
       <SideNavCard title='BRAND'onClick={({category, brand})=>onClick({category, brand})}/>
       
       
            </>
    )
}

export default AccesoriesSideNav
