import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import './Faculties.css'

const Faculties = (props) => {
    // console.log(props);
    const { img, name, age, department, Designation , salary} = props.faculty;
    return (
        <div className="faculty">
            <div className="container">
            <img src={img} alt="" />
            <h3 className="team">{name}</h3>
            <h2>Department: {department}</h2>
            <p>Age: {age}</p>
            <p>Designation: {Designation}</p>
            <p>Salary: {salary}</p>
            <button
            onClick={() => props.handlechosen(props.faculty)}
            className="btn-regular"> <FontAwesomeIcon icon={ faPlus} /> Add me</button>
            </div>
            
        </div>
    );
};

export default Faculties;