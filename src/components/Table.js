import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Table() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const url = "https://my-json-server.typicode.com/DwarfGalaxy/avocado-task/tables";
        fetch(url).then(resp => resp.json()).then(resp => setPosts(resp))
    }, [])

    const deleteItem = async (id) => {
        if(confirm("Are you sure? you want to delete this? it cannot be undone")){
            const deleted = await fetch("https://my-json-server.typicode.com/DwarfGalaxy/avocado-task/tables/" + id, {
                method: 'DELETE'
            })
            setPosts([...posts].filter(x=>x.id!==id))
            alert("Item deleted");
    
        }

    }

    return (
        <div className="container my-3">
            <h1>TABLE LIST</h1>
            <hr />
            <div className="row">
                {posts.length===0&&<div className='p-2 bg-gray'>
                    NO TABLES YET.
                    </div>}
                {posts.map(post => <div className="my-2 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
                    <div className="card">
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"  >
                            {post.id}
                        </span>
                        <img width="150" height="150" src={"data:image/png;base64, " + post.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title" >{post.name}</h5>
                            <small>Capacity: {post.capacity}</small>
                            <div>
                                <small>Status : {post.status ? "true" : "false"}</small>
                            </div>
                        </div>
                        <div className="p-1">
                            <button
                                onClick={e => deleteItem(post.id)}
                                className='btn btn-danger'>Delete</button>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}
