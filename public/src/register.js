import React,{useState} from 'react';
import axios from 'axios';

const Register = () =>{
	const [name, pickName] = useState("");
    const [email, pickEmail] = useState("");
    const [mobile, pickMobile] = useState("");
    const [password, pickPassword] = useState("");
    const [msg, updateMessage] = useState("Enter Your Details");

    const save = () => {
        var url = "http://localhost:1234/vendor";
        var data = { "name": name, "email": email, "password": password, "mobile": mobile };
        axios.post(url, data).then(response => {
            updateMessage(name + " Register Successfully !");
            pickName("");
            pickEmail("");
            pickMobile("");
            pickPassword("");
        })
    }

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4 offset-4">
                    <div class="bg-light rounded p-3">
						<h3 class="text-center text-danger">
							<i class="fa fa-suitcase "></i> Vendor Register
						</h3>
					    <p class="alert alert-info text-center"> {msg} </p>
						<div class="mb-3 input-group">
                            <span class="input-group-text">
								<i class="fa fa-envelope"></i>
							</span>
							<input type="email" class="form-control" placeholder="Enter Email"
							onChange={obj=>pickEmail(obj.target.value)}
							value={email}/>	
						</div>
						<div class="mb-3 input-group">
                            <span class="input-group-text">
								<i class="fa fa-lock"></i>
							</span>	
							<input type="password" class="form-control" 
							placeholder="Enter Password"
							onChange={obj=>pickPassword(obj.target.value)}
							value={password}/>
						</div>
                        <div class="mb-3 input-group">
                            <span class="input-group-text">
								<i class="fa fa-user"></i>
							</span>	
							<input type="text" class="form-control" 
							placeholder="Enter Name"
							onChange={obj=>pickName(obj.target.value)}
							value={name}/>
						</div>
                        <div class="mb-3 input-group">
                            <span class="input-group-text">
								<i class="fa fa-phone"></i>
							</span>	
							<input type="number" class="form-control" 
							placeholder="Enter Mobile No"
							onChange={obj=>pickMobile(obj.target.value)}
							value={mobile}/>
						</div>
						<div class="text-center">
							<button class="btn btn-primary" onClick={save}>
                                Register <i class="fa fa-arrow-right"></i> 
                            </button>
						</div>
					</div>
                </div>
            </div>
        </div>
    )
}

export default Register;