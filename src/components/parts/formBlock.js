
let React = require('react');
let InpText = require('./inpText');
let ButtSubmit = require('./buttSubmit');

class FormBlock extends React.Component{

  constructor(props){
    super(props);
    this.funcForOnSubmit = this.funcForOnSubmit.bind(this);
  }
  

  funcForOnSubmit(){
    this.setState({isSubmit:true});
    console.log(this.state.isSubmit)
  }

  render(){
    let outInfo = this.props.formInformation;
    
    let listInps = outInfo[4].map((item, index) =>  <InpText key={index} nameOfEl={item[0]} func={item[1]} elemId={item[2]} valueEl={item[3]}   /> );
    
    let listButts = <div>
            <ButtSubmit nameOfButton={'login'}  func={outInfo[1]} inviting={outInfo[3] ? false : true} />
            <ButtSubmit nameOfButton={'register'} func={outInfo[2]} inviting={outInfo[3] ? true : false}/>
                    </div>
    
    return(
      <form name={outInfo[0]} action="" onSubmit={(e) => {
          e.preventDefault();
          funcForOnSumbit();
      } } method="post"> <h4>{outInfo[0].toUpperCase()}</h4>
        {listInps}
        {listButts}
      <p>{console.log(outInfo[4])}</p>
      <p>{outInfo[0]}</p>
      </form>
    )
  }
}




module.exports = FormBlock;






