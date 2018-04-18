import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/user';
import './TodoMenu.css';

export class TodoMenu extends Component {

    handleMenuClick = (e, target) => { this.props.changeItem(target.order) }

    drawMenuItems = (items) => {
        let menuItems = this.props.userLogined ? items : items.filter(item => item.permanent);

        return menuItems.map((menuItem) => (
            <Menu.Item key={menuItem.order} name={menuItem.title} active={this.props.active === menuItem} color={menuItem.color} order={menuItem.order} onClick={this.handleMenuClick} />
        ))
    }


    render() {

        return (
            <Menu>
                {this.drawMenuItems(this.props.allMenu)}

                <Menu.Menu position='right'>
                    {this.props.userLogined ? <div className='welcomItem'>{`Hello, ${this.props.username}`}</div> : null}
                    <Menu.Item key={this.props.loginItem.order}
                        name={this.props.loginItem.title}
                        active={this.props.active === this.props.loginItem}
                        color={this.props.loginItem.color}
                        onClick={() => { this.props.logoutUser(); this.props.changeItem(this.props.loginItem.order) }} />
                </Menu.Menu>
            </Menu>


        )
    }
}

const mapStateToProps = (state) => ({
    userLogined: state.user.logined,
    username: state.user.user
})

export default connect(mapStateToProps, { logoutUser })(TodoMenu);