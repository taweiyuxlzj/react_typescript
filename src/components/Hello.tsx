import * as React from 'react';
import Button from 'antd/lib/button';

//导出接口 Props
export interface IProps {
    name: string;
    enthusiasmLevel?: number;
    age: number;
}

export interface IStatus {
    inputValue: string;
}

//导出默认类型 Hello 继承 React   组件
export default class Hello extends React.Component<IProps, IStatus>{

    constructor(props: IProps) {
        super(props);
        this.state = { "inputValue": "" };
        this.inputChangeClick = this.inputChangeClick.bind(this);
    }
    inputChangeClick(event: any) {
        this.setState(
            {inputValue: event.target.value }
        );
        console.log(this.state.inputValue);
    }
    render() {
        const { name, enthusiasmLevel = 1 } = this.props;
        if (enthusiasmLevel == 1) {
            throw new Error('测试Error:');
        }
        return (
            <div className="hello">
                <div className="text1">
                    <input value={this.state.inputValue} onChange={this.inputChangeClick}>
                    </input>
                </div>
                <div className="block">
                    <label>{this.state.inputValue}</label>
                </div>
                <div className="greeting">
                    Hello {name + getExclamationMarks(enthusiasmLevel)}
                </div>
                <Button color="red">我是测试的啊</Button>
            </div >
        );
    }
}

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}