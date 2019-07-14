import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Garbages from './data/garbages';
import Trashes from './data/trashes';


class Recycling extends Component {

    state = {
        counter: 0,
        garbages: this.props.garbages,
        randomNum: [],
        randomLeft: [],
        randomTop: [],
        thrownInTrash: [],
        arrDisp: [],

        ranNum1: 0,
        ranNum2: 0,
        ranNum3: 0,

        ranTop1: 0,
        ranTop2: 0,
        ranTop3: 0,
        ranLeft1: 0,
        ranLeft2: 0,
        ranLeft3: 0,

        indicated: []
    }

    handleClick = (idTrsh, name, id, indicat) => {
        this.setState({
            thrownInTrash: [...this.state.thrownInTrash, {name, id, idTrsh}],
            indicated: [...this.state.indicated, indicat],
        })
    }

        componentDidMount() {

        this.intervalID = setInterval(() => {

            const num = [...this.state.randomNum, Math.round((Math.random() * 5)), Math.round((Math.random() * 5)), Math.round((Math.random() * 5)) ];
            const left = [...this.state.randomLeft, Math.round(Math.random() * (650)), Math.round(Math.random() * (650)), Math.round(Math.random() * (650)) ];
            const top = [...this.state.randomTop, Math.round(Math.random() * (650)), Math.round(Math.random() * (650)), Math.round(Math.random() * (650)) ];
            const arr = [...this.state.arrDisp, this.state.garbages[this.state.ranNum1], this.state.garbages[this.state.ranNum2], this.state.garbages[this.state.ranNum3] ];

            this.setState({

                ranNum1: Math.round((Math.random() * 5)),
                ranNum2: Math.round((Math.random() * 5)),
                ranNum3: Math.round((Math.random() * 5)),

                // ranTop1: Math.round(Math.random() * (650)),
                // ranTop2: Math.round(Math.random() * (650-1) + 1),
                // ranTop3: Math.round(Math.random() * (650-1) + 1),
                // ranLeft1: Math.round(Math.random() * (650-1) + 1),
                // ranLeft2: Math.round(Math.random() * (650-1) + 1),
                // ranLeft3: Math.round(Math.random() * (650-1) + 1),

                counter: this.state.counter + 1,

                randomNum: num,
                randomLeft: left,
                randomTop: top,
                arrDisp: arr
                

            }, () => {
                if(this.state.counter >= 5) {
                    clearInterval(this.intervalID)
                }
            })
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    render () {
        return (
            <>
                <Items garbagesDisp={this.state.arrDisp} selectItem={this.handleClick} /*indicated={this.state.indicated}*//>
                <Containers trashes={Trashes} waste={this.state.thrownInTrash}/>
            </>
        )
    }
}

class Items extends Component {
    render () {
        return (
            <section className='container-garbages'>
                {this.props.garbagesDisp.map( (el,i) => (
                    <div key={i} 
                        className={el.classStyle}
                        style = {{border: this.props.indicated ? 'solid 5px blue': null,  position:'absolute', left:Math.round(Math.random() * (650)), top:Math.round(Math.random() * (650))}}
                        onClick = {() => this.props.selectItem(el.trashId, el.name, el.id, el.indicated)} 
                        >
                        {el.name} {el.id}
                    </div>
                    ))
                }
            </section>
        )
    }
}

class Containers extends Component {
    render () {
        return (
            <div className='container-trashes'>
                {this.props.trashes.map(el => (
                    <div key={el.id} 
                        className={el.classStyle}
                        >
                        {el.name} nr ID: {el.id}
                        
                        {/* <Thrown thrown={this.props.waste}/> */}
                        </div>
                ))}
            </div>
        )
    }
}

class Thrown extends Component {
    render () {
        return (
            <div>
                {this.props.thrown.map((el,i) => {
                    <li key={i}>{el}</li>
                })}
            </div>
        )
    }
}

class App extends Component {
    render () {
        return <Recycling garbages={Garbages} />
    }
}

ReactDOM.render(<App />, document.getElementById('app'))



                // class Trash extends Component {
                //         constructor(props) {
                //             super(props);
                
                //         this.state = {
                //             trashes: this.props.arrWithTrash,
                //             score: 0,
                //             arrInTrash: []
                
                //         }
                //     }
                
                //     handleCheck = (item) => {
                
                //         if(this.state.arrInTrash.id === ) {
                //             this.setState({
                //                 arrInTrash: [...this.state.arrInTrash, {item}]
                //             })
                //         }
                //     }
                
                //     render () {
                
                //         return (
                //             <div className='container-trashes'>
                //             {this.state.trashes.map(el => (
                //                 <div key={el.id} 
                //                     className={el.color}
                //                     onClick={() => this.handleCheck(el)}>
                //                     {el.name} nr ID: {el.id}
                //                     </div>
                //             ))}
                //             </div>
                //         )
                //     }
                // }
                
                // // poniżej jest komponent ***Items*** który ma renderować kilka Item 
                
                // class Items extends Component {
                //         constructor(props) {
                //             super(props);
                
                //         this.state = {
                
                //             counter: 0,
                //             // isClicked: false,
                //             garbages: this.props.arrWithGarbages,
                
                //             ranTop1: 0,
                //             ranTop2: 0,
                //             ranTop3: 0,
                //             ranLeft1: 0,
                //             ranLeft2: 0,
                //             ranLeft3: 0,
                
                //             ranNum1: 0,
                //             ranNum2: 0,
                //             ranNum3: 0,
                
                //             arrDisplayd: [],
                //             arrClicked: []
                //         }
                //     }
                    
                //     handleClickOnGarb = (idG, nameG, idT, ind) => {
                
                //         // if( this.state.garbages.ind === false) {
                //             this.setState({
                //                 // garbages: this.state.garbages.indicated === false ? this.state.garbages.indicated = true : this.state.garbages.indicated = false,
                //                 arrClicked: [...this.state.arrClicked, {idG, nameG, idT, ind}]
                //             })
                //         // }
                //     }
                
                //     componentDidMount() {
                
                //         this.intervalID = setInterval(() => {
                
                //             const arr = [...this.state.arrDisplayd,this.state.garbages[this.state.ranNum1], this.state.garbages[this.state.ranNum2], this.state.garbages[this.state.ranNum3] ];
                
                //             this.setState({
                
                //                 ranTop1: Math.round(Math.random() * (750-1) + 1),
                //                 ranTop2: Math.round(Math.random() * (750-1) + 1),
                //                 ranTop3: Math.round(Math.random() * (750-1) + 1),
                //                 ranLeft1: Math.round(Math.random() * (750-1) + 1),
                //                 ranLeft2: Math.round(Math.random() * (750-1) + 1),
                //                 ranLeft3: Math.round(Math.random() * (750-1) + 1),
                
                //                 ranNum1: Math.round((Math.random() * 5) + 0),
                //                 ranNum2: Math.round((Math.random() * 5) + 0),
                //                 ranNum3: Math.round((Math.random() * 5) + 0),
                
                //                 counter: this.state.counter + 1,
                
                //                 arrDisplayd: arr
                
                //             }, () => {
                //                 if(this.state.counter >= 3) {
                //                     clearInterval(this.intervalID)
                //                 }
                //             })
                //         }, 2000);
                //     }
                
                //     componentWillUnmount() {
                //         clearInterval(this.intervalID);
                //     }
                
                //     render () {
                
                //         const {garbages, ranTop1,ranTop2,ranTop3,ranLeft1,ranLeft2,ranLeft3,ranNum1,ranNum2,ranNum3} = this.state;
                
                //         // let styleR1 = {
                //         //     top: ranTop1,
                //         //     left: ranLeft1,
                //         //     backgroundColor: `${garbages[ranNum1].color}`
                //         // }
                //         // let styleR2 = {
                //         //     top: ranTop2,
                //         //     left: ranLeft2,
                //         //     backgroundColor: `${garbages[ranNum2].color}`
                //         // }
                //         // let styleR3 = {
                //         //     top: ranTop3,
                //         //     left: ranLeft3,
                //         //     backgroundColor: `${garbages[ranNum3].color}`
                //         // }
                
                //         return (
                //             <section className='container-garbages'>
                //                 {this.state.arrDisplayd.map((el,i) => (
                //                     <Item key={i} 
                //                         garbName = {el.name} 
                //                         garbId = {el.id} 
                //                         garbTrashId = {el.trashId}
                //                         grabInd = {el.indicated}
                //                         clName = {this.state.garbages.indicated ? el.classClicked: el.classStyle } 
                //                         inStyle = {{backgroundColor:`${el.color}`}} 
                //                         selectGarbage = {() => this.handleClickOnGarb(el.id, el.name, el.trashId, el.indicated)} />
                //                     ))
                //                 }
                //             </section>
                //         )
                //     }
                // }
                
                // // poniżej jest komponent do przerobienia na ***Item*** który ma być zagniżdżony w ***Items***
                
                // class Item extends Component {
                
                //     render () {
                //         const {garbId, garbName, garbTrashId, grabInd, clName, inStyle} = this.props;
                //         return (
                //             <div className={clName} style={inStyle} onClick={() => this.props.selectGarbage(garbId, garbName, garbTrashId, grabInd)}>{garbName} {garbId}</div>
                //         )
                //     }
                // }