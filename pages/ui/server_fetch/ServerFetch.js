import React, { useEffect, useLayoutEffect, useState } from 'react';
import styles from '../css/server_fetch.module.css'; // This assumes you have a corresponding CSS file for styles


// import Plot from 'react-plotly.js';

const DataDisplay = ({ data, timestamp, id_name }) => {
    const [Plot, setPlotly] = useState();


    const ages = data.results.map(record => record.dob.age); // Adjust according to your data structure


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
                marker: {
                    color: "#ff6400ff", // Change histogram color
                },
                hoverinfo: 'x+y',
                nbinsx: 20,
            }
        ]
      
        const layout = { height: "100%",
        xaxis: {
          title: 'Age', // X-axis label
        },
        yaxis: {
          title: '# People', // Y-axis label
        },
        hovermode: 'closest'}
        
        Plot.newPlot(id_name, trace, layout);
   
        }

    }, [Plot, ages]);

    // help with resizing plotly plot
    useEffect(() => {
        const handleResize = () => {
    
    
          import('plotly.js/dist/plotly.min.js').then(Plotly => {


            // Plotly.Plots.resize(document.getElementById('hist1'));
            // in case we have more than 1 plot in this container
            const plotIds = ['hist1'];

            plotIds.forEach(id => {
                const plotElement = document.getElementById(id);
                if (plotElement) {
                Plotly.Plots.resize(plotElement);
         
                }
            });

            
          });
    
    
          
        };

        handleResize();

        // Initialize plot after window load to ensure styles are applied
        // window.addEventListener('load', handleResize);
      
        // Resize the plot when the window is resized
        window.addEventListener('resize', handleResize);
      
        // Return a clean-up function to remove the event listener
        return () => {
            // window.removeEventListener('load', handleResize);
            window.removeEventListener('resize', handleResize);
        };
      }, []);


      
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
