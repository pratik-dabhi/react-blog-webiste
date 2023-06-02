import React from 'react';
import '../Login/Login.scss';
import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <div className="container">
	<div className="d-flex justify-content-center vh-100">
		<div className="card">
			<div className="card-header">
				<h3>Sign Up</h3>
			</div>
			<div className="card-body">
				<form>
					<div className="input-group form-group mb-3">
						<input type="text" className="form-control" placeholder="username"/>
					</div>
					<div className="input-group form-group mb-3">
						<input type="text" className="form-control" placeholder="email"/>
					</div>
					<div className="input-group form-group mb-3">
						<input type="password" className="form-control" placeholder="password"/>
					</div>
					<div className="input-group form-group mb-3">
						<input type="text" className="form-control" placeholder="confirm password"/>
					</div>
					<div className="form-group">
						<input type="submit" value="Sign Up " className="btn btn-warning"/>
					</div>
				</form>
			</div>
			<div className="card-footer">
				<div className="d-flex justify-content-center links">
					Don't have an account?<Link to ="/login" className='text-decoration-none'>Sign In</Link>
				</div>
				<div className="d-flex justify-content-center">
					<a href="#" className='text-decoration-none'>Forgot your password?</a>
				</div>
			</div>
		</div>
	</div>
</div>
  )
}
