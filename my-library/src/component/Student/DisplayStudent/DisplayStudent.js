import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { setSelectedStudent,setStudent } from '../../../redux/actions/libraryActions';
export default function DisplayStudent() {
  
    const students = useSelector((state) => state.allStudents.students);
    const dispatch = useDispatch();
   
    const getStudentId =(id)=>{
      console.log(id);

      // const singlestudent= students.filter((student)=>student.id===id)
      const singlestudent= students.find((student)=>student.id===id);
      singlestudent.state="UPDATING";

      dispatch(setSelectedStudent(singlestudent))
     console.log(singlestudent);
    }
    const getRemoveId=(id)=>{
      const singlestudent1= students.find((student)=>student.id===id);
      singlestudent1.state="REMOVED";
     
      const oldStudent = [...students];
      const studentIndex = oldStudent.findIndex((student)=>student.id===id);
      console.log(studentIndex);
      oldStudent.splice(studentIndex, 1,singlestudent1);
      dispatch(setStudent(oldStudent));
      console.log(students);
      // dispatch(se(singlestudent))
    }

  return (
    
   
    <>
     <table className="student-table">
      <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
      </thead>
      <tbody>
        {

       
          
          students.filter((student)=>student.state!='REMOVED')
          .map((student)=>{
            return(
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.firstname}</td>
                <td>{student.lastname}</td>
                <td>
                 <button onClick={()=>getStudentId(student.id)}>Edit</button>
                 &nbsp;
                 <button onClick={()=>getRemoveId(student.id)}>Delete</button>
                </td>
              </tr>
            )
          })
          
        }

       
      </tbody>
     
     
          
    </table>
    </>
  )
}
