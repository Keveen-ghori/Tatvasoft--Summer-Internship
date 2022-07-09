import "./App.css"
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonLists } from './components/Person_List'
import { Status } from './components/Status'
import { Heading } from './components/Heading'

function App() {
  const personName = {
    first_Name: 'Kevin',
    last_Name: 'Ghori'
  }

  const personList = [
    {
      first_Name: 'Kevin',
      last_Name: 'Ghori'
    },
    {
      first_Name: 'Kevin',
      last_Name: 'Ghori'
    },
    {
      first_Name: 'Kevin',
      last_Name: 'Ghori'
    }

  ]
  return (
    <div className="App">
      <Greet name="Kevin" student_Id={1} Email_Id="123@gmail.com" is_Pass = {false}/>
      <Person name = {personName} />
      <PersonLists name = { personList } />
      <Status status="loading"/>
      <Heading>Hello World!!!</Heading>
    </div>
  );
}

export default App;
