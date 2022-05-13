import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Form() {
    const [layout, setLayout] = useState('Layout1');
    const [name, setName] = useState('')
    const [capacity, setCapacity] = useState(0)
    const [status, setStatus] = useState(true)
    const [image,setImage] = useState('');
    const navigate=useNavigate()
    const [loading,setLoading]=useState(false)
    const submitForm = async (e) => {
        e.preventDefault();
        setLoading(true)
        const data = await fetch('https://my-json-server.typicode.com/DwarfGalaxy/avocado-task/tables', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: Math.ceil(Math.random()*99999999),
                layout,
                name,
                capacity,
                status,
                image
            })

        })
        setLoading(false)
        navigate("/table")

    }


    const handlePhoto=(e)=>{
        var file = e.target.files[0];
        let reader = new FileReader();
        reader.onload = (e) => {
            setImage(e.target.result)
        };
      reader.readAsDataURL(file);
}
    return (
        <form onSubmit={submitForm}>
            <div className="container border-start my-5 border-3">
                <h1>Create Table</h1>
                <div className="container my-3 border-top border-1">
                    {/* Layout */}
                    <div className="mb-3 row my-3">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Layout:</label>
                        <div className="dropdown col-sm-10">

                            <select
                                required
                                value={layout}
                                onChange={e => setLayout(e.target.value)}
                                className="btn btn-light w-75 text-start dropdown-toggle" type="button" aria-expanded="false" data-bs-toggle="dropdown">
                                <option><a className="dropdown-item" href="#">Layout1</a></option>
                                <option><a className="dropdown-item" href="#">Layout2</a></option>
                                <option><a className="dropdown-item" href="#">Layout3</a></option>
                            </select>
                        </div>
                    </div>
                    {/* Name */}
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Name:</label>
                        <div className="col-sm-10">
                            <input
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required type="text" className="form-control w-75 bg-light" placeholder='Enter Name' />
                        </div>
                    </div>

                    {/* Capacity */}
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Capacity:</label>
                        <div className="col-sm-10">
                            <input
                                value={capacity}
                                onChange={e => setCapacity(e.target.value)}

                                required type="number" className="form-control w-75 bg-light" placeholder='Enter number of capacity' />
                        </div>
                    </div>

                    {/* status */}
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Status:</label>
                        <div className="col-sm-10 my-2">
                            <input
                                value={status}
                                onChange={e => setStatus(e.target.checked)}

                                required className="form-check-input " type="checkbox" checked />
                        </div>
                    </div>

                    {/* Image */}
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Image:</label>
                        <div className="col-sm-10 my-2">
                            <input onChange={handlePhoto} required type="file" id="img" name="img" accept="image/*" />
                        </div>
                    </div>

                    {/* Button */}
                    <div className="container mx-3">
                        <button disabled={loading} type="submit" className='btn mx-2 text-light fw-bold' style={{ backgroundColor: "rgb(22 22 78)" }}>Create Table</button>
                        <a href="" className='btn bg-danger text-light fw-bold'>Cancel</a>
                    </div>
                </div>
            </div>
        </form>
    )
}
