import React from 'react';
import './Elected.css';
const Elected = (props) => {

    const { elect } = props;
    let total = 0;
    let name = '';
    let newname = [];
    for (const faculty of elect) {

        total = total + faculty.salary;
    }


    for (const faculty of elect) {

        name = faculty.name;
        newname.push(name);

    }

const listItems = newname.map((numbers) =>
  <ul>{numbers}</ul>) ;



    return (
        <div>
            <h3> Number of added people: {props.elect.length}</h3>
            <h4>Total spended: {total} taka</h4>
            <h4>Names:</h4>
            <h5 className="added">{listItems}</h5>
           
        </div>
    );
};

export default Elected;