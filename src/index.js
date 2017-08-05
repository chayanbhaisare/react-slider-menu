import React from 'react';
import '../styles.css';
/*
 * This component renders list in the form of slider menu. Need to pass 'menuItems' with the list of options.
 * */
export default class SliderMenu extends React.Component {

  constructor(props) {
    super(props);
    this.closeNav = this.closeNav.bind(this);
    this.openNav = this.openNav.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      showMenu: false,
      activeLink: '',
    };
  }

  render() {
    try {
      let {width, backgroundColor, fontColor, sliderIconColor,
          selectedItemBgColor} = this.props.menuStyle;

      const menuItems = this.props.menuItems ? this.props.menuItems : [];
      let activeStyle = '';
      const activeLink = this.state.activeLink || this.props.defaultSelectedMenuValue;
      const menus = menuItems.map((menu, index) => {
        activeStyle = (activeLink === menu[this.props.menuValueKey]) ? { backgroundColor: selectedItemBgColor } : {};
        return (<span style={activeStyle} key={index} onClick={(e) => this.handleClick(menu)}>

                  {menu[this.props.menuLabelKey]}
               </span>);
      });

      if (!this.state.showMenu) {
        width = '0px';
      }

      return (
          <div id="sideNavContainer" style={{color: fontColor}}>
            <div id="sideNav" className='sidenav'  style={{width: width, backgroundColor: backgroundColor}}>
              <span className="closebtn" onClick={this.closeNav}>&times;</span>
              { menus }
            </div>
            <span className="open-lines" onClick={this.openNav} style={{color: sliderIconColor}}>&#9776;</span>
          </div>
      );
    } catch (e) {
      console.error(`error occurred while rendering the form menu: ${e}`);
    }
  }

  handleClick(menu) {
    this.setState({ activeLink: menu[this.props.menuValueKey] });
    this.props.onClick(menu);
  }

  openNav() {
    this.setState({ showMenu: true });
  }

  closeNav() {
    this.setState({ showMenu: false });
  }

}