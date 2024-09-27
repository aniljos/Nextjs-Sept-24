export default async function ListCustomers(){

    console.log("rendering ListCustomers")

    //throw new Error("Error fetching customers");

    //api calls

    await new Promise(resolve => setTimeout(resolve, 5000));

    const url = "http://localhost:9000/customers";
    const response = await fetch(url,{cache: 'no-store'});
    const customers = await response.json();

    console.log("rendering ListCustomers", customers);
    return (
        <div>
            <h4>List Customers</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>   
                                <td>{item.name}</td>   
                                <td>{item.location}</td>    
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}