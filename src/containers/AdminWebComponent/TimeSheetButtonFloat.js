import React,{Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentClear from 'material-ui/svg-icons/content/clear';

  const styles = {
    floatingActionButton: {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed'}
    }
  export default class TimeSheetButtonFloat extends Component{
    constructor(props){
      super(props);
    }
    renderButton = () => {
      return (<FloatingActionButton onTouchTap = {()=>this.props.toggleContent()} style={styles.floatingActionButton}>
        {
          (this.props.content)?<ContentAdd/>:<ContentClear />
        }
      </FloatingActionButton>);
    }
    render(){
      return(
        <div>
        {this.renderButton()}
        </div>
      )
    }
  }
