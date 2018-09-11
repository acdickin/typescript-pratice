import * as React from 'react';

import Description from './Description';
import Header from './Header';
import Menu from './Menu';

class App extends React.Component{
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu/>
          <Header name="Andrew" />
        </header>
        <Description countBy={3} />
      </div>
    );
  }
}
export default App;
