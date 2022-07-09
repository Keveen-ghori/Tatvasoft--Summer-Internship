import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { LoggedIn } from './state/Loggedin';
import { User } from './state/user';
import UseStateComponent  from './state/UseStateComponent';
import UseEffectComponent from './components/UseEffectComponent';
import UseContextComponent from './components/UseContaxComponent';
import Counter from './components/Counter';
import UseEffectUser from './components/useEffectUser';
import UseMemoComponent from './components/UseMemoComponent';

function App() {
  return (
    <div className="App">
      <Button handleClick={(event, id) => { console.log('Button Clicked', event, id) }} />
      <Input handleChange={(event) => {console.log(event)}}  value = ''/>
      <Container style={{border: '1px', color: 'red'}}></Container>

      <LoggedIn/>
      <User name={''} email={''} />

      <UseStateComponent/>
      <UseEffectComponent/>
      <UseContextComponent />
      <Counter />
      <UseEffectUser />
      <UseMemoComponent />
    </div>
  );
}

export default App;
