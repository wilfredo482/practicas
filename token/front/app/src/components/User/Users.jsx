import useAxios from "../hooks/useAxios";

function Users(){
    let {data,error}=useAxios();
    return(
        <div>
            <h1>Users</h1>
            <ul>
                {data.map((data, k)=>{
                    return <li key={k}>{data.email}</li>
                })}
            </ul>
        </div>
    )
}

export default Users;