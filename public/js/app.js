
class App extends React.Component{
  constructor(){
    super();
    this.state = { nums: [1,2,3,4,5,6,7,8,9], numForDel:0 };
    }

  deleteEl(num){
  }

  takeIndex(event){
    this.state.numForDel = Number(event.target.value);
    this.setState({numForDel: this.state.numForDel});
  }

  startAction(event){
    event.preventDefault();
    this.state.nums.splice(this.state.numForDel, 1);
    this.setState({nums:this.state.nums}) ;
  }

  render(){
    let list = this.state.nums.map((item, index) =>{
      return <li key={index}>{item}</li>
    })

    return <div>
  <ul>{list}</ul>
  <form onSubmit={this.startAction.bind(this)}>
    <input id="" type="text" onChange={this.takeIndex.bind(this)} />
    <input type="submit" value="" />
  </form>
</div>
  }


}

ReactDOM.render(<App />, document.getElementById('contentIndex'))
