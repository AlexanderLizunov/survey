import React, {Component} from 'react';
import './App.css';
var uuid = require('uuid');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: uuid.v1(),
            name: '',
            answers: {
                q1: '',
                q2: '',
                q3: '',
                q4: ''
            },
            submitted: false
        }
        // this.handleQuestionChange = this.handleQuestionChange.bind(this)
    }

    handleNameSubmit(event) {
        var name = this.refs.name.value;
        this.setState({name: name}, function () {
            console.log(this.state);

        });
        console.log(name);
        event.preventDefault()
    }

    handleQuestionSubmit(event){
        event.preventDefault()
        console.log('all filled')
        // firebase.database.ref('surveys/'+ this.state.id).set({
        //     name: this.state.name,
        //     answers: this.state.answers,
        // });
        // console.log(firebase)
        this.setState({submitted: true})
    }
    handleQuestionChange(event){
        console.log(event.target.value, event.target.name)
        var answer = this.state.answers,
            answerNo = event.target.name
        // if(event.target.name === 'q1'){
            answer[''+answerNo] = event.target.value
        // }
        this.setState({answers : answer})
        console.log(this.state.answers)
    }
    render() {
        var user,
            questions;
        if (this.state.name && this.state.submited === false) {
            user =
                <h2>Welcom {this.state.name}</h2>;
                questions = <span>
                    <h3>Survey questions</h3>
                    <form action="submit" onSubmit={this.handleQuestionSubmit.bind(this)}>
                        <div>
                            <label onChange={this.handleQuestionChange.bind(this)} htmlFor="">What is your favorite operation system</label> <br/>
                            <input onChange={this.handleQuestionChange.bind(this)} type="radio" name="q1" value='Windows'/> Windows <br/>
                            <input onChange={this.handleQuestionChange.bind(this)} type="radio" name="q1" value='OSX'/> OSX <br/>
                            <input onChange={this.handleQuestionChange.bind(this)} type="radio" name="q1" value='Linux'/> Linux <br/>
                            <input onChange={this.handleQuestionChange.bind(this)} type="radio" name="q1" value='Solaris'/> Solaris <br/>
                            <input onChange={this.handleQuestionChange.bind(this)} type="radio" name="q1" value='Other'/> Other <br/>
                        </div>
                        <div>
                            <label onChange={this.handleQuestionChange.bind(this)} htmlFor="">What is your favorite operation system</label> <br/>
                            <input onChange={this.handleQuestionChange.bind(this)} type="radio" name="q2" value='Windows'/> Windows <br/>
                            <input onChange={this.handleQuestionChange.bind(this)} type="radio" name="q2" value='OSX'/> OSX <br/>
                            <input onChange={this.handleQuestionChange.bind(this)} type="radio" name="q2" value='Linux'/> Linux <br/>
                            <input onChange={this.handleQuestionChange.bind(this)} type="radio" name="q2" value='Solaris'/> Solaris <br/>
                            <input onChange={this.handleQuestionChange.bind(this)} type="radio" name="q2" value='Other'/> Other <br/>
                        </div>
                        <div>
                            <label onChange={this.handleQuestionChange.bind(this)} htmlFor="">What is your favorite operation system</label> <br/>
                            <input onChange={this.handleQuestionChange.bind(this)} type="radio" name="q3" value='Windows'/> Windows <br/>
                            <input onChange={this.handleQuestionChange.bind(this)} type="radio" name="q3" value='OSX'/> OSX <br/>
                            <input onChange={this.handleQuestionChange.bind(this)} type="radio" name="q3" value='Linux'/> Linux <br/>
                            <input onChange={this.handleQuestionChange.bind(this)} type="radio" name="q3" value='Solaris'/> Solaris <br/>
                            <input onChange={this.handleQuestionChange.bind(this)} type="radio" name="q3" value='Other'/> Other <br/>
                        </div>
                        <div>
                            <label onChange={this.handleQuestionChange.bind(this)} htmlFor="">What is your favorite operation system</label> <br/>
                            <input onChange={this.handleQuestionChange.bind(this)} type="radio" name="q4" value='Windows'/> Windows <br/>
                            <input onChange={this.handleQuestionChange.bind(this)} type="radio" name="q4" value='OSX'/> OSX <br/>
                            <input onChange={this.handleQuestionChange.bind(this)} type="radio" name="q4" value='Linux'/> Linux <br/>
                            <input onChange={this.handleQuestionChange.bind(this)} type="radio" name="q4" value='Solaris'/> Solaris <br/>
                            <input onChange={this.handleQuestionChange.bind(this)} type="radio" name="q4" value='Other'/> Other <br/>
                        </div>
                        <button>submit</button>
                    </form>
                </span>
        } else if (!this.state.name && this.state.submited === false) {
            user = <span>
                <h2>
                     Please eneter your name  to begin the survey
                    <form action="submit" onSubmit={this.handleNameSubmit.bind(this)}>
                        <input type="text" placeholder='Enter Name...' ref='name'/>
                    </form>
                </h2>
            </span>;
            questions = '';
        } else if (this.state.submited === false) {

        }
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title text-center">Simple survey</h1>
                </header>
                <div className="text-center">
                    {user}
                </div>
                <div className="container">
                    {questions}
                </div>
            </div>
        );
    }
}

export default App;
