import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button'
import { Dialog, DialogFooter, DialogType } from 'office-ui-fabric-react/lib/Dialog';
import { Modal } from 'office-ui-fabric-react/lib/Modal';
import * as React from 'react';
import './desc.css';

interface IProps{

  countBy?:number;
}

interface IState{
  count: number,
  hideDialog:boolean,
  message:string,
  showModal:boolean,
}

class Description extends React.Component<IProps, IState>{
  public static defaultProps:Partial<IProps>={
    countBy:1,
  }
  public state:IState={
    count:0,
    hideDialog:true,
    message:"This is my message. I hope you like it",
    showModal: false
  }
  public increase =()=>{
    const countBy: number = this.props.countBy!;
    const count = this.state.count +countBy;
    this.setState({count});
  }
  public showDialog =()=>{
    this.setState({hideDialog:false});
  }
  public closeDialog =()=>{
      this.setState({hideDialog:true});
  }
  public showModal =()=>{
    this.setState({showModal:true});
  }
  public closeModal =()=>{
      this.setState({showModal:false});
  }

  public render(){
    const {hideDialog, count, message, showModal} = this.state;
    return(
      <div>
        <p>My fav number is {count}</p>
        <div className="buttons">
          <PrimaryButton onClick={this.increase}> Increase</PrimaryButton>
          <PrimaryButton onClick={this.showDialog}> Dialog </PrimaryButton>
          <DefaultButton secondaryText="Opens the Sample Modal" onClick={this.showModal} text="Open Modal" />
        </div>
         <Dialog
          hidden={hideDialog}
          onDismiss={this.closeDialog}
          dialogContentProps={{
            subText:message,
            title: 'All emails together',
            type: DialogType.normal,
          }}
          modalProps={{
            containerClassName: 'ms-dialogMainOverride',
            isBlocking: true,
          }}
         >
          <DialogFooter>
            <PrimaryButton onClick={this.closeDialog} text="Save" />
            <DefaultButton onClick={this.closeDialog} text="Cancel" />
          </DialogFooter>
         </Dialog>

         <Modal
           containerClassName="ms-modalExample-container"
           isOpen={showModal}
           isBlocking={true}
           onDismiss={this.closeModal}
         >
           <div className="ms-modalExample-header">
             <span>Modal Header</span> <DefaultButton className ="close" onClick={this.closeModal} text="X" />
           </div>
           <div className="ms-modalExample-body">
             <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem nulla, malesuada ut sagittis sit
               amet, vulputate in leo. Maecenas vulputate congue sapien eu tincidunt. Etiam eu sem turpis. Fusce tempor
               sagittis nunc, ut interdum ipsum vestibulum non. Proin dolor elit, aliquam eget tincidunt non, vestibulum
               ut turpis. In hac habitasse platea dictumst. In a odio eget enim porttitor maximus. Aliquam nulla nibh,
               ullamcorper aliquam placerat eu, viverra et dui. Phasellus ex lectus, maximus in mollis ac, luctus vel
               eros. Vivamus ultrices, turpis sed malesuada gravida, eros ipsum venenatis elit, et volutpat eros dui et
               ante. Quisque ultricies mi nec leo ultricies mollis. Vivamus egestas volutpat lacinia. Quisque pharetra
               eleifend efficitur.{' '}
             </p>
             <p>
               Mauris at nunc eget lectus lobortis facilisis et eget magna. Vestibulum venenatis augue sapien, rhoncus
               faucibus magna semper eget. Proin rutrum libero sagittis sapien aliquet auctor. Suspendisse tristique a
               magna at facilisis. Duis rhoncus feugiat magna in rutrum. Suspendisse semper, dolor et vestibulum lacinia,
               nunc felis malesuada ex, nec hendrerit justo ex et massa. Quisque quis mollis nulla. Nam commodo est
               ornare, rhoncus odio eu, pharetra tellus. Nunc sed velit mi.{' '}
             </p>
             <p>
               Sed condimentum ultricies turpis convallis pharetra. Sed sagittis quam pharetra luctus porttitor. Cras vel
               consequat lectus. Sed nec fringilla urna, a aliquet libero. Aenean sed nisl purus. Vivamus vulputate felis
               et odio efficitur suscipit. Ut volutpat dictum lectus, ac rutrum massa accumsan at. Sed pharetra auctor
               finibus. In augue libero, commodo vitae nisi non, sagittis convallis ante. Phasellus malesuada eleifend
               mollis. Curabitur ultricies leo ac metus venenatis elementum.{' '}
             </p>
             <p>
               Aenean egestas quam ut erat commodo blandit. Mauris ante nisl, pellentesque sed venenatis nec, aliquet sit
               amet enim. Praesent vitae diam non diam aliquet tristique non ut arcu. Pellentesque et ultrices eros.
               Fusce diam metus, mattis eu luctus nec, facilisis vel erat. Nam a lacus quis tellus gravida euismod. Nulla
               sed sem eget tortor cursus interdum. Sed vehicula tristique ultricies. Aenean libero purus, mollis quis
               massa quis, eleifend dictum massa. Fusce eu sapien sit amet odio lacinia placerat. Mauris varius risus sed
               aliquet cursus. Aenean lectus magna, tincidunt sit amet sodales a, volutpat ac leo. Morbi nisl sapien,
               tincidunt sit amet mauris quis, sollicitudin auctor est.{' '}
             </p>
             <p>
               Nam id mi justo. Nam vehicula vulputate augue, ac pretium enim rutrum ultricies. Sed aliquet accumsan
               varius. Quisque ac auctor ligula. Fusce fringilla, odio et dignissim iaculis, est lacus ultrices risus,
               vitae condimentum enim urna eu nunc. In risus est, mattis non suscipit at, mattis ut ante. Maecenas
               consectetur urna vel erat maximus, non molestie massa consequat. Duis a feugiat nibh. Sed a hendrerit
               diam, a mattis est. In augue dolor, faucibus vel metus at, convallis rhoncus dui.
             </p>

           </div>
         </Modal>
      </div>
    )
  }
}

export default Description;
