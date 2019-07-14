import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Garbage from './data/garbage';
import Trashes from './data/trashes';

class Trash extends Component {
        constructor(props) {
            super(props);
        this.state = {
            trashes: this.props.arrWithTrash,
        }
    }
    render () {

        return (
            <div className='container-trashes'>
            {this.state.trashes.map(el => (
                <div key={el.id} className={el.color}>{el.name} nr ID: {el.id}</div>
            ))}
            </div>
        )
    }
}

// poniżej jest komponent ***Items*** który ma renderować kilka Item 

class Items extends Component {
        constructor(props) {
            super(props);
        this.state = {
            counter: 0,
            isClicked: false,
            garbages: this.props.arrWithGarbages,
            ranTop1: 0,
            ranTop2: 0,
            ranTop3: 0,
            ranLeft1: 0,
            ranLeft2: 0,
            ranLeft3: 0,
            ranNum1: 0,
            ranNum2: 0,
            ranNum3: 0,
            arrDisplayd: [],
            arrClicked: [],
            arrInTrash: []
        }
    }
    
    componentDidMount() {
        this.intervalID = setInterval(() => {

            const arr = [...this.state.arrDisplayd,this.state.garbages[ranNum1], this.state.garbages[ranNum2], this.state.garbages[ranNum3] ];

            this.setState({
                ranTop1: Math.round(Math.random() * (750-1) + 1),
                ranTop2: Math.round(Math.random() * (750-1) + 1),
                ranTop3: Math.round(Math.random() * (750-1) + 1),
                ranLeft1: Math.round(Math.random() * (750-1) + 1),
                ranLeft2: Math.round(Math.random() * (750-1) + 1),
                ranLeft3: Math.round(Math.random() * (750-1) + 1),
                ranNum1: Math.round((Math.random() * 5) + 0),
                ranNum2: Math.round((Math.random() * 5) + 0),
                ranNum3: Math.round((Math.random() * 5) + 0),
                counter: this.state.counter + 1,
                arr

            }, () => {
                if(this.state.counter >= 3) {
                    clearInterval(this.intervalID)
                }
            })
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    render () {

        const {garbages,ranTop1,ranTop2,ranTop3,ranLeft1,ranLeft2,ranLeft3,ranNum1,ranNum2,ranNum3} = this.state;

        let styleR1 = {
            top: ranTop1,
            left: ranLeft1,
            backgroundColor: `${garbages[ranNum1].color}`
        }
        let styleR2 = {
            top: ranTop2,
            left: ranLeft2,
            backgroundColor: `${garbages[ranNum2].color}`
        }
        let styleR3 = {
            top: ranTop3,
            left: ranLeft3,
            backgroundColor: `${garbages[ranNum3].color}`
        }

        return (
            <section /*style={Object.assign(styleMain,styleSec)}*/ >
                {this.state.arrDisplayd.map((el,i) => (
                    <Item key={i} garbItem={garbages} numItem={ranNum1} clName={garbages[ranNum1].classStyle} />
                ))
                }
            </section>
        )
    }
}

// poniżej jest komponent do przerobienia na ***Item*** który ma być zagniżdżony w ***Items***

class Item extends Component {

    render () {
        const {garbItem, numItem,clName} = this.props;
        return (
            <div className={clName}>{garbItem[numItem].name}</div>
        )
    }
}

class App extends Component {
    render () {
        return (
            <>
                <Items arrWithGarbages={Garbage}/>
                <Trash arrWithTrash={Trashes}/>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

