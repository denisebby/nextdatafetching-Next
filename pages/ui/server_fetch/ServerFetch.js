import React, { useEffect, useState } from 'react';
import styles from '../css/server_fetch.module.css'; // This assumes you have a corresponding CSS file for styles


// import Plot from 'react-plotly.js';

const DataDisplay = ({ data, timestamp, id_name }) => {
    const [Plot, setPlotly] = useState();

    console.log(data)

    const ages = data.results.map(record => record.dob.age); // Adjust according to your data structure
    console.log(ages)


    useEffect(() => {
        // Code here will run on the client side
        import('plotly.js/dist/plotly.min.js').then(Plotly => {
            setPlotly(Plotly.default);
            });

    }, []);

    useEffect(() => {
        if (Plot && ages.length > 0) {
        const trace = [
            {
                x: ages,
                type: 'histogram',
            }
        ]

        const layout = {autosize: true, responsive: true, height: 300}
   
        Plot.newPlot(id_name, trace, layout);
        }

    }, [Plot, ages]);


      
    // Extract the age values from the data
    if (!data || data.length === 0) {
        return <div>Loading...</div>; // Display loading screen/message
    }

    return (
        <div className={styles.data_display}>
            <p><b>Sample Data: Age Distribution</b></p>
            <p>Last Updated at {timestamp}</p>
            <div 
                className={styles.data_display2} id={id_name} 
            >
            </div>
        </div>
    );
};

export default DataDisplay;
