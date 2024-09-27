'use server';
export async function validateSupplierId(id: number){
    
    console.log("executing validateSupplierId", id);
    
    if(id <= 0){
        return {status: 1, message: "invalid id"};
    }
    else{
        return {status: 0, message: "valid id"};
    }
}

export async function saveForm(formData: FormData){

    const supplier= {
        id: formData.get("id"),
        name: formData.get("name"),
        location: formData.get("location"),
        person: formData.get("person"),
        email: formData.get("email"),
    }

    console.log("supplier", supplier);
    //insert to DB

    return {status: 0, message: "Saved the form"};

}