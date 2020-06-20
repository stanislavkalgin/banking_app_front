import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {
  AgePage, 
  ChildrenPage,
  MarriedPage,
  EducationPage,
  WorkTimePage,
  WorkEqualsEducationPage,
  SponsorsPage,
  IncomePage
} from './FormPages.js'
import './App.css';
import ResponsePage from './ResponsePage.js'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: '',
      children: '',
      education: '',
      income: '',
      married: '',
      sponsors: '',
      work_duration: '',
      work_equals_education: '',
      response: '',
      page: 1
    };
    this.AgeHandler = this.AgeHandler.bind(this);
    this.ChildrenHandler = this.ChildrenHandler.bind(this)
    this.MarriedHandler = this.MarriedHandler.bind(this)
    this.EducationHandler = this.EducationHandler.bind(this)
    this.WorkTimeHandler = this.WorkTimeHandler.bind(this)
    this.WorkEqualsEducationHandler = this.WorkEqualsEducationHandler.bind(this)
    this.SponsorsHandler = this.SponsorsHandler.bind(this)
    this.IncomeHandler = this.IncomeHandler.bind(this)
    this.getData = this.getData.bind(this)
    this.BackToTest = this.BackToTest.bind(this)
    this.NextPage = this.NextPage.bind(this)
    this.PreviousPage = this.PreviousPage.bind(this)
  }

  AgeHandler(e) {
    this.setState({
      age: e.target.value
    })
  }

  ChildrenHandler(e) {
    this.setState({
      children: e.target.value
    })
  }

  MarriedHandler(e) {
    this.setState({
      married: e.target.value
    })
  }

  EducationHandler(e) {
    this.setState({
      education: e.target.value
    })
  }

  WorkTimeHandler(e) {
    this.setState({
      work_duration: e.target.value
    })
  }

  WorkEqualsEducationHandler(e) {
    this.setState({
      work_equals_education: e.target.value
    })
  }

  SponsorsHandler(e) {
    this.setState({
      sponsors: e.target.value
    })
  }

  IncomeHandler(e) {
    this.setState({
      income: e.target.value
    })
  }

  NextPage() {
    this.setState({
      page: (this.state.page + 1)
    })
  }

  PreviousPage() {
    this.setState({
      page: (this.state.page - 1)
    })
  }

  BackToTest() {
    this.setState({
      age: '',
      children: '',
      education: '',
      income: '',
      married: '',
      sponsors: '',
      work_duration: '',
      work_equals_education: '',
      response: ''
    })
  }

  getData() {
    let xhr = new XMLHttpRequest();
    let body = {
      "age": Number(this.state.age),
      "education": Number(this.state.education),
      "married": Number(this.state.married),
      "income": Number(this.state.income),
      "work_duration": Number(this.state.work_duration),
      "work_equals_education": Number(this.state.work_equals_education),
      "children": Number(this.state.children),
      "sponsors": Number(this.state.sponsors)
    }
    xhr.addEventListener("load", () => {
      this.setState({
        response: xhr.responseText,
        page: (this.state.page + 1)
      });
    })
    xhr.open('POST', 'https://twa-banking.herokuapp.com/test_results');
    xhr.send(JSON.stringify(body))
  }

  render() {
    return (<>
    <h3>{this.state.age}, {this.state.children},
        {this.state.education}, {this.state.income},
        {this.state.married}, {this.state.sponsors},
        {this.state.work_duration}, {this.state.work_equals_education}</h3>      
      {(() => {
          switch(this.state.page) {
            case 1: return <AgePage handler={this.AgeHandler} nextPage={this.NextPage}/>;
            case 2: return <ChildrenPage handler={this.ChildrenHandler} nextPage={this.NextPage} previousPage={this.PreviousPage}/>;
            case 3: return <EducationPage handler={this.EducationHandler} nextPage={this.NextPage} previousPage={this.PreviousPage}/>;
            case 4: return <IncomePage handler={this.IncomeHandler} nextPage={this.NextPage} previousPage={this.PreviousPage}/>;
            case 5: return <MarriedPage handler={this.MarriedHandler} nextPage={this.NextPage} previousPage={this.PreviousPage}/>;
            case 6: return <SponsorsPage handler={this.SponsorsHandler} nextPage={this.NextPage} previousPage={this.PreviousPage}/>;
            case 7: return <WorkTimePage handler={this.WorkTimeHandler} nextPage={this.NextPage} previousPage={this.PreviousPage}/>;
            case 8: return <WorkEqualsEducationPage handler={this.WorkEqualsEducationHandler} nextPage={this.getData} previousPage={this.PreviousPage}/>;
            case 9: return <ResponsePage response={this.state.response} />;
            default: return <div>Вы не должны были сюда попасть</div>
          }
        })()}
      </>
    )
  }
}