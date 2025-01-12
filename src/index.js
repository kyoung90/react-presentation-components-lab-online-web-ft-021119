import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

function handleClick(){
  alert("GREAT!")
}

ReactDOM.render(<div>
    <SimpleComponent />
    <SimplerComponent handleClick={handleClick.bind(this)} />
  </div>,
  document.getElementById('root')
);