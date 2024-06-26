import React, { useState } from 'react'

function Sampledata() {
    const [fullname,setFullname] = useState("");
    const [dummydata, setdummydata] = useState([
        { id: 1, fullname: "Irfan shakil", role: "React Developer", address: "Chennai" },
        { id: 2, fullname: "Sathish Kumar", role: "Java Developer", address: "Trichy" },
        { id: 3, fullname: "INagaraj", role: "MongoDb Developer", address: "Madurai" },
        { id: 4, fullname: "Deepika", role: "React Developer", address: "Chennai" },
        { id: 5, fullname: "Manisha", role: "Node Developer", address: "Chennai" },
        { id: 6, fullname: "Sneha", role: "Angulae Developer", address: "Chennai" },
        { id: 7, fullname: "Swetha", role: "Python Developer", address: "Coimbatore" },
        { id: 8, fullname: "Devendiran", role: "Expressjs Developer", address: "Chennai" },
        { id: 9, fullname: "Kaviyarasn", role: "Android Developer", address: "Vellore" },
        { id: 10, fullname: "Meganathan", role: "Ios Developer", address: "Chennai" },
        { id: 11, fullname: "Ramasamy", role: "REact Native Developer", address: "Trichy" },
    ]);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div>
                        <input  className='form-control' type="text" placeholder='search Name' onChange={e=>setFullname(e.target.value)}/>
                    </div>
                    <div className="col-md-12">
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Fullname</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dummydata.filter((data)=>{
                                         return fullname.toLowerCase() === "" ? data : data.role.toLowerCase().includes(fullname)
                                    }).map((data) => {
                                        return (
                                            <tr key={data.id}>
                                                <td>{data.id}</td>
                                                <td>{data.fullname}</td>
                                                <td>{data.role}</td>
                                                <td>{data.address}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sampledata
