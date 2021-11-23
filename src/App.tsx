import { Component } from 'react';

class Calculator extends Component<any,any> {
    constructor(props:any){
        super(props);
        this.state = {num1: "5", num2:"6", result:""}
    }
    handleChange = (num:any)=>{
         this.setState({
            [num.target.name]: num.target.value
         });
    }
    addNums = ()=>{      
         let {num1, num2, result} = this.state;
        const sum = parseInt(num1) + parseInt(num2);
        this.setState({result: sum});
    }
    subNums = ()=>{      
        let {num1, num2, result} = this.state;
       const sum = parseInt(num1) - parseInt(num2);
       this.setState({result: sum});
   }
   mulNums = ()=>{      
    let {num1, num2, result} = this.state;
   const sum = parseInt(num1) * parseInt(num2);
   this.setState({result: sum});
}
divNums = ()=>{      
    let {num1, num2, result} = this.state;
   const sum = parseInt(num1) / parseInt(num2);
   this.setState({result: sum});
}
   render() {
       const {num1, num2, result} = this.state;
       return <>
            <h3>Calculator</h3>
            <input type="text" onChange={this.handleChange} name="num1" value={num1}/>
            <input type="text" onChange={this.handleChange} name="num2" value={num2}/>
            <br/>
            <button style={{margin: "5px"}} onClick={this.addNums}>ADD</button>
            <button style={{margin: "5px"}} onClick={this.subNums}>SUB</button>
            <button style={{margin: "5px"}} onClick={this.mulNums}>MUL</button>
            <button style={{margin: "5px"}} onClick={this.divNums}>DIV</button>
            <p>={result}</p>
       </>;
   }
}

export default Calculator;