import '../../../app/admin/layout.css';

const TotalCard=({total})=>{
    return(
         <div className="Box_Content">
           {total.logo}
            <h2 className="font-bold">Total {total.name} - </h2>
             <h3> {total.amount}</h3>
             </div>
    )
}

export default TotalCard;

