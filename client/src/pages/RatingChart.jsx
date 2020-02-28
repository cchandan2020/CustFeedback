import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';



var groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
  
  console.log(groupBy(['one', 'two', 'three'], 'length'));

class RatingChart extends Component{
    constructor(props){
        super(props);
        let data=[] 

        this.state = {
            chartData:{
                labels: ['Rate 1', 'Rate 2', 'Rate 3', 'Rate 4', 'Rate 5'],
                datasets: [{
                    label: 'Total',
                    data: data
                    
                }]

            }
        }
    }

    
    componentWillReceiveProps(){

        let data=[] 

        if(this.props.feedbackList){
            data=this.props.feedbackList.map(i=>i.rating)

            this.setState({chartData:{
                labels: ['Rate 1', 'Rate 2', 'Rate 3', 'Rate 4', 'Rate 5'],
                datasets: [{
                    label: 'Total',
                    data: data
                    
                }]
    
            }})
        }

        
    }

    render(){
        //console.log('TChartData here : \n', this.)
        return(
            <div className = "chart"> 
                <Bar 
                data={this.state.chartData}
                //data = {10,20,12,30,10} -- sample
                
                width = {100}
                height ={50}
                options={{
                    title:{
                        display: true,
                        text:'Ratings Total'},
                        maintainAspectRatio : true
                    }
                }
                />
            </div>
        )
    }

}

export default RatingChart