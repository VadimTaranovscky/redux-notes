import React, { useState } from "react";
import { connect } from "react-redux";
import { showAlert, add} from "../redux/actionsCreators";

const Form = ({showAlert,addNote}) => {
  const [inpVal,setInpVal]=useState('');
  const submitHandler=event=>{
    event.preventDefault();
    if(inpVal){
      addNote(inpVal);
      showAlert(inpVal,'Успех','success');
      setInpVal('');
    }else{
      showAlert(null,'Ошибка','danger');
    }
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          value={inpVal}
          onChange={e=>setInpVal(e.target.value)}
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
    </form>
  );
};

const mapDispatchToProps=dispatch=>({
  showAlert:(...rest)=>dispatch(showAlert(...rest)),
  addNote:(title)=>dispatch(add(title))
});

export default connect(null,mapDispatchToProps)(Form);
