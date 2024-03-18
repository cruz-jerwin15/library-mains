import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <>
    <div className="navigation">
      <ul>
        <li><a href="#">Student</a></li>
        <li><a href="#">Book</a></li>
        <li><a href="#">Transaction</a></li>
      </ul>
    </div>
   <div className="student-form">
      <input type="text" placeholder="Enter first name"/>
      <input type="text" placeholder="Enter last name"/>
      <button class="add-student">Add</button>
   </div>
   <table className="student-table">
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Actions</th>
        </tr>
      </table>
   </>
  );
}

export default App;
