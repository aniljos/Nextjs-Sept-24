'use client'

import { useParams } from "next/navigation";
import { MouseEvent } from "react";

export default function EditProduct() {


    const params = useParams();
    function handleSave(evt: MouseEvent<HTMLButtonElement>){
        evt.preventDefault();
    }
    return (
        <div>
            <h4>Edit Product: {params.id}</h4>

            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input id="price" type="number" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input id="desc" className="form-control" />
                </div>

                <br/>
                <div>
                    <button className="btn btn-success" onClick={handleSave}>Save</button>&nbsp;
                    <button className="btn btn-warning">Cancel</button>
                </div>


            </form>
        </div>
    )
}