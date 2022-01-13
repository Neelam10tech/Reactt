import React,{useState} from 'react';
import axios from 'axios';

const Login = () =>{
	const[msg, updateMessage] = useState("Enter Login Details !");
	const[email, pickEmail] = useState("");
	const[pass, pickPassword] = useState("");
	const GoLogin = () =>{
		var status = false;
		if(email=="" || pass==""){
			updateMessage("Please Enter Details");
		}else{
			updateMessage("Please Wait Processing..");
			axios.get("http://localhost:1234/vendor")
			.then(response=>{
				for(var i=0; i<response.data.length; i++){
					var vendor = response.data[i]; // assign 1 vendor info to vendor variable
					if(email == vendor.email && pass == vendor.password){
						updateMessage("Success : Redirecting...");
						status = true;
						localStorage.setItem("vendorid", vendor.id);
						localStorage.setItem("name", vendor.name);
						window.location.href="http://localhost:3000/#/orderlist";
						window.location.reload();
						break;
					}
				}
				if(status==false){
					updateMessage("Invalid or Not Exists");
				}
			})
		} // else ending
	} 

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4 offset-4">
                    <div class="bg-light rounded p-3">
						<h3 class="text-center text-danger">
							<i class="fa fa-lock "></i> Login
						</h3>
					    <p class="alert alert-danger text-center"> {msg} </p>
						<div class="mb-3 input-group">
                            <span class="input-group-text">
								<i class="fa fa-envelope"></i>
							</span>
							<input type="email" class="form-control" placeholder="Enter Email"
							onChange={obj=>pickEmail(obj.target.value)}/>	
						</div>
						<div class="mb-3 input-group">
                            <span class="input-group-text">
								<i class="fa fa-lock"></i>
							</span>	
							<input type="password" class="form-control" 
							placeholder="Enter Password"
							onChange={obj=>pickPassword(obj.target.value)}/>
						</div>
						<div class="text-center">
							<button class="btn btn-primary"
							onClick={GoLogin}>Login <i class="fa fa-arrow-right"></i> </button>
						</div>
					</div>
                </div>
            </div>
        </div>
    )
}

export default Login;