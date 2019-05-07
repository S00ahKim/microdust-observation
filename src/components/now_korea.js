import React, { Component } from 'react';
import axios from'axios';

class NowKorea extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: 'null', 
            seD: [], 
            buD: [], 
            dgD: [], 
            inD: [], 
            gwD: []
          };
    }

    componentDidMount(){
        var self = this;
        axios.get('https://api.waqi.info/feed/seoul/?token=51c05eb19f4ac4b5cbb7e2b56a73d8526f944e82')
            .then(response => self.setState({seD: [response.data.data.aqi]}));
        axios.get('https://api.waqi.info/feed/busan/?token=51c05eb19f4ac4b5cbb7e2b56a73d8526f944e82')
            .then(response => self.setState({buD: [response.data.data.aqi]}));
        axios.get('https://api.waqi.info/feed/daegu/?token=51c05eb19f4ac4b5cbb7e2b56a73d8526f944e82')
            .then(response => self.setState({dgD: [response.data.data.aqi]}));
        axios.get('https://api.waqi.info/feed/incheon/?token=51c05eb19f4ac4b5cbb7e2b56a73d8526f944e82')
            .then(response => self.setState({inD: [response.data.data.aqi]}));
        axios.get('https://api.waqi.info/feed/gwangju/?token=51c05eb19f4ac4b5cbb7e2b56a73d8526f944e82')
            .then(response => self.setState({gwD: [response.data.data.aqi]}));

    }

    shouldComponentUpdate(){ 
        return true;
    }

    componentWillUpdate(nextState){ 
        var self = this;
        axios.get('https://api.waqi.info/feed/seoul/?token=51c05eb19f4ac4b5cbb7e2b56a73d8526f944e82')
            .then(response => self.setState({seD: [response.data.data.aqi]}));
        axios.get('https://api.waqi.info/feed/busan/?token=51c05eb19f4ac4b5cbb7e2b56a73d8526f944e82')
            .then(response => self.setState({buD: [response.data.data.aqi]}));
        axios.get('https://api.waqi.info/feed/daegu/?token=51c05eb19f4ac4b5cbb7e2b56a73d8526f944e82')
            .then(response => self.setState({dgD: [response.data.data.aqi]}));
        axios.get('https://api.waqi.info/feed/incheon/?token=51c05eb19f4ac4b5cbb7e2b56a73d8526f944e82')
            .then(response => self.setState({inD: [response.data.data.aqi]}));
        axios.get('https://api.waqi.info/feed/gwangju/?token=51c05eb19f4ac4b5cbb7e2b56a73d8526f944e82')
            .then(response => self.setState({gwD: [response.data.data.aqi]}));
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) { 
        console.log("componentdidupdate")
    }

    render() { 
        return (
            <p className='c-item'> [국내 미세먼지 현황] &nbsp; 서울:{this.state.seD}  &nbsp;  부산:{this.state.buD}  &nbsp;  대구:{this.state.dgD}  &nbsp;  인천:{this.state.inD}  &nbsp;  광주:{this.state.gwD} </p>            
        );
    };
};
  
export default NowKorea;