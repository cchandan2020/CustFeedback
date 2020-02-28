import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';


class RatingChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['Rate 1', 'Rate 2', 'Rate 3', 'Rate 4', 'Rate 5'],
                dataSets: [{
                    label: 'Total',
                    data: [
                        10, 15, 20, 25, 15
                    ]
                    
                }]

            }
        }
    }

    render(){
        //console.log('TChartData here : \n', this.)
        return(
            <div className = "chart"> 
                <Bar 
                data={this.state.chartData}
                //data = {10,20,12,30,10}
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