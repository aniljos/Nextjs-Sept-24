'use client'

import { validateSupplierId , saveForm} from "@/actions/suppliersActions";
import { useRef } from "react"

export default function AddSupplier() {

    const idRef = useRef<HTMLInputElement>(null);
    async function handleBlur(){
        const id = idRef.current?.value;
        console.log("id", id);

        //calling the server action
        const result = await validateSupplierId(Number(id));
        console.log("result", result);
    }

    return (
        <div>
            <h4>Add Supplier</h4>
            <form action={saveForm}>

                <div className="form-group">
                    <input ref={idRef}  className="form-control" type="number" placeholder="ID" name="id" onBlur={handleBlur}/>
                </div>
                <br />
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Name" name="name" />
                </div>
                <br />
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Person" name="person" />
                </div>
                <br />
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Email" name="email" />
                </div>
                <br />
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Location" name="location" />
                </div>
                <br />
                <div>
                    <button type="submit">Save</button>
                </div>

            </form>
        </div>
    )

};