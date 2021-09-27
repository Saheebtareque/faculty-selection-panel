

 import Elected from '../Elected/Elected';
import { useEffect, useState } from 'react';
 import Faculties from '../Faculties/Faculties';
import './Selection.css';

const Selection = () => {
    const [faculties, setFaculties] = useState([]);
     const [elect, setElect] = useState([]);
    useEffect(() => {
        fetch('./people.JSON')
            .then(res => res.json())
            .then(data => setFaculties(data));
    }, []);
  
    const handlechosen = (faculty) =>
    {
        const newElect = [...elect, faculty];
        setElect(newElect);
    }
  
    return (
       <div className="selection-container">

<div className="faculty-container">

    {
                   faculties.map(faculty => <Faculties key={faculty.key}
                    faculty={faculty}
                    handlechosen={handlechosen}
                   > </Faculties> ) 

     }

            </div>
            <div className="elected-container">
               <Elected elect={elect}></Elected>
            </div>


        </div>
    );
};

export default Selection;