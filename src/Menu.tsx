import { PrimaryButton } from 'office-ui-fabric-react/lib/Button'
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import * as React from 'react';

interface IState{
  showPanel: boolean
}

class Menu extends React.Component{
  public state:IState={
    showPanel:false
  }

  public showPanel=()=>{
    this.setState({ showPanel:true })
  }
  public hidePanel=()=>{
    this.setState({ showPanel:false })
  }
  public render() {
    return (
      <div className="App">
          <PrimaryButton onClick={this.showPanel} text="Menu" />

          <Panel
            isOpen={this.state.showPanel}
            type={PanelType.smallFixedNear}
            // tslint:disable-next-line:jsx-no-lambda
            onDismiss={this.hidePanel}
            headerText={"Left Panel"}
            onOuterClick = {this.hidePanel}
            hasCloseButton ={true}
          >
            <span>THIS IS WHERE CONTENT GOES!!</span>
          </Panel>

      </div>
    );
  }
}
export default Menu;
