import * as React from 'react';
import * as ReactDom from "react-dom";
import Hello from './components/Hello';

ReactDom.render(
    <Hello name="1" enthusiasmLevel={10} age={1} />,
    document.getElementById('root') as HTMLElement
);