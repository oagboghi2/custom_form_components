import React, { Component } from 'react';

class Card extends Component {

    state={
        showMenu: false,
        displayItem:''
    }

    showMenu = (event) => {
        event.preventDefault();
        this.setState({
            showMenu: true
        });

        document.addEventListener('click', this.closeMenu )
    }

    closeMenu = (event) => {
        if (!this.dropDownMenu.contains(event.target)) {

            this.setState({showMenu: false}, () => {
                document.removeEventListener('click', this.closeMenu)
            })
        }
    }

    showItem = (event) => {
        this.setState({ displayItem : event.target.value} )
    }

    render() {
        return (
            <div>
                <button onClick={this.showMenu}>
                    Show menu
                </button>
                {
                    this.state.showMenu
                ? (
                    <div className="menu" ref={(element) => {
                        this.dropDownMenu = element;
                    }}
                    >
                        <button value={"1"} onClick={this.showItem}> Menu item 1 </button>
                        <button value={"2"} onClick={this.showItem}> Menu item 2 </button>
                        <button value={"3"} onClick={this.showItem}> Menu item 3 </button>
                    </div>
                    )
                    : ( null )
                }
                {this.state.displayItem}
            </div>
        );
    }
}

export default Card;
