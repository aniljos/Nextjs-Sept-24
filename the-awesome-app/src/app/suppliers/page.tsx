import Link from "next/link";

export default async function ListSuppliers(){


    const response = await fetch("http://localhost:3001/api/suppliers", {cache: 'no-store'});
    const data = await response.json();

    return (
        <div>
            <h4>List Suppliers</h4>
            <div>
                <Link href="/suppliers/add">Add Supplier</Link>
            </div>

            {data.map((item: {id: number, name: string, location: string}) => {
                return (
                    <div key={item.id}>
                        <p>Id: {item.id}</p>
                        <p>Name: {item.name}</p>
                        <p>Location: {item.location}</p>
                    </div>
                )

            })}
        </div>
    )
}