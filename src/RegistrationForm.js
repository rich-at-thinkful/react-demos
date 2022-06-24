import React from "react";

export default function RegistrationForm({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="form-group">
        <label htmlFor="reg-name">Name:</label>
        <input className="form-control" type="text" name="name" id="reg-name" />
      </div>

      <div className="form-group">
        <label htmlFor="reg-referral">Referral:</label>
        <select name="referral" id="reg-referral" className="custom-select">
          <option value="---">---</option>  
          <option value="twitter">Twitter</option>  
          <option value="facebook">Facebook</option>  
          <option value="instagram">Instagram</option>  
        </select>  
      </div>

      <div className="form-group">
        <p style={{marginBottom: "2px"}}>How old are you?</p>  
        <div className="custom-control custom-radio custom-control-inline">
          <input className="custom-control-input" id="reg-low" type="radio" name="age" value="low" />
          <label className="custom-control-label" htmlFor="reg-low">
            Under 18
          </label>
        </div>

        <div className="custom-control custom-radio custom-control-inline">
          <input className="custom-control-input" id="reg-middle" type="radio" name="age" value="middle" />
          <label className="custom-control-label" htmlFor="reg-middle">
            18 - 60
          </label>
        </div>
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" name="subscription" id="reg-subscription"  />
          <label className="custom-control-label" htmlFor="reg-subscription">Receive email notifications?</label>
        </div>      
      </div>

      <button className="btn btn-primary" type="submit">Register</button>
      <button onClick={() => {}} className="btn btn-secondary ml-2" type="button">Clear</button>
    </form>
  );
}