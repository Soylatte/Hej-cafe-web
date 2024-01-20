import coldbrew from '../images/coldbrew.jpg'

const Body =() =>{
    return(
        <div>
         <img src={coldbrew} class="rounded float-start" alt="coldbrew" />
         <h1>The cold brew with a cult following is finally back. Made with your favorite milk and our house-made syrup to add a festive twist to your daily routine.</h1>
         <button className='btn'>TRY OUT!</button>
                    </div>
    )
}
export default Body;