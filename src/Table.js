import Json from "./ArrayOfObject.json"
const TableForm=()=>{
    let object=Json;

    return(
        <div>
            <table>
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>MAIL</th>
                  </tr>
                 
                    {
                        object.map((value,index)=>{
                            return(
                                <tr>
                                 <td key={index}>{value.id} </td>
                                 <td>{value.name}</td>
                                 <td>{value.age}</td>
                                 <td>{value.email}</td>
                                 </tr>
                               
                            )
                        })
                    }
                  
            </table>
        </div>
    )
}

export default TableForm;