import React from 'react';
import './Login.scss';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

export const Login = () => {
  return (
	<div className="container">
	<div className="d-flex justify-content-center vh-100">
		<div className="card">
			<div className="card-header">
				<h3>Sign In</h3>
				<div className="d-flex justify-content-end social_icon">
					<span><i className="fab fa-facebook-square"></i></span>
					<span><i className="fab fa-google-plus-square"></i></span>
					<span><i className="fab fa-twitter-square"></i></span>
				</div>
			</div>
			<div className="card-body">
				<form>
					<div className="input-group form-group mb-3">
						<input type="text" className="form-control" placeholder="username"/>
					</div>
					<div className="input-group form-group mb-3">
						<input type="password" className="form-control" placeholder="password"/>
					</div>
					<div className="form-group">
						<input type="submit" value="Login" className="btn btn-warning"/>
					</div>
				</form>
			</div>
			<div className="card-footer">
				<div className="d-flex justify-content-center links">
					Don't have an account?<Link to="/register" className='text-decoration-none'>Sign Up</Link>
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
