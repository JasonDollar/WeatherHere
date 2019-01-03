import React from 'react'
import classes from './Backdrop.module.scss'

const Backdrop = ({ showBackdrop, hideBackdrop }) => {
  if (showBackdrop) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'visible'
  }
  return (
    showBackdrop ? <div className={classes.Backdrop} onClick={hideBackdrop} onScroll={hideBackdrop} /> : null
  ) 
}

// class Backdrop extends React.Component {
//   componentDidMount() {
//     document.body.style.overflow = 'hidden'
//   //       document.documentElement.addEventListener('touchmove', this.preventIOSScroll);
//   }

//   componentWillUnmount() {
//     document.body.style.overflow = 'visible'
//     //     document.documentElement.removeEventListener('touchmove', this.preventIOSScroll);
//     // this.props.hideBackdrop()
//   }
//   // preventIOSScroll = (e) => {
//   //   e.preventDefault();
//   // }

//   render() {
//     return (
//       this.props.showBackdrop ? <div className={classes.Backdrop} onClick={this.props.hideBackdrop} /> : null
//     ) 
//   }
// }

export default Backdrop
