import React from "react";

class Counter extends React.Component {

        constructor(props){
             super(props)

            
            }
             
            state={   //State is always an object that holds some information that may change over the life of the component
                count:this.props.count,
            }

            componentDidUpdate(){
                console.log('updated')
            }

            shouldComponentUpdate(){
                // console.log('Should Component Update at Work')
                return this.state.count<15
            }

        inc=()=>{
            const current=this.state.count;
            this.setState({count:current+1})
        }
        
        
        dec=()=>{
            const current=this.state.count;
            this.setState({count:current-1})
        }
    render() {
        return <div>
            <button onClick={this.dec}>--</button>
            <h1> Counter {this.state.count}</h1>
            <button onClick={this.inc}>++</button>
            
        </div>
    }
}

export default Counter;