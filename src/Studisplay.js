const Studisplay =(props)=>
{
    return(
        <>
          <tr>
            <td>{props.rno}</td>
            <td>{props.nm}</td>
            <td>{props.cty}</td>
            <td>{props.fees}</td>
          </tr>
        </>
    );
}
export default Studisplay;