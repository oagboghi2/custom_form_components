import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import onClickOutside from "react-onclickoutside";


class Dropdown extends Component {
    state={
        listOpen: false,
        headerTitle: this.props.title
    }

    handleClickOutside(){
        this.setState({
            listOpen: false
        })
    };

    toggleList(){
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    };

    static getDerivedStateFromProps(nextProps){
        const count = nextProps.list.filter(function(a) { return a.selected; }).length;
        console.log(count)

        if(count === 0){
            return {headerTitle: nextProps.title}
        }
        else if(count === 1){
            return {headerTitle: `${count} ${nextProps.titleHelper}`}
        }
        else if(count > 1){
            return {headerTitle: `${count} ${nextProps.titleHelper}s`}
        }
    }


    render (){
        const {list} = this.props;
        const {listOpen, headerTitle} =  this.state
        return (
            <div className="dd-wrapper">
                <div className="dd-header" onClick={() => this.toggleList}>
                    <div className="dd-header-title">{headerTitle}</div>
                    {listOpen
                        ? <FontAwesomeIcon name="angle-up" size="2x"/>
                        : <FontAwesomeIcon name="angle-down" size="wx"/>
                    }
                </div>
                {listOpen && <ul className="dd-list">
                    {list.map((item) => (
                        <li className="dd-list-item" key={item.id} onClick={() => this.props.toggleItem(item.id, item.key)}>{item.title} {item.selected} </li>
                    ))}
                </ul>}
            </div>
        )
    }
}

export default Dropdown;
