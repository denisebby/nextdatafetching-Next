import React, { useEffect, useRef, useState } from 'react';
import styles from '../css/server_fetch.module.css'; // This assumes you have a corresponding CSS file for styles


const DataDisplay = ({ initialData, initialTimestamp, id_name }) => {

    const [data, setData] = useState(initialData || null);
    const [timestamp, setTimestamp] = useState(initialTimestamp || null);
    const [error, setError] = useState('');

    const [Plot, setPlotly] = useState();
    const plotContainerRef = useRef(null);

    // if (!data || !data.results) {
    //     return <div>Loading...</div>; // Or any other loading indicator.
    //   }

    // const ages = data.results.map(record => record.dob.age); // Adjust according to your data structure

    // attempt at conditional data fetching
    useEffect(() => {
        // fetchData();

        if (!initialData) {
            fetchData()
        }

    }, [initialData]);
    
    const fetchData = async () => {
    try {
        const res = await fetch('https://randomuser.me/api/?results=100');

        if (!res.ok) {
        throw new Error('Failed to fetch data');
        }

        const jsonData = await res.json();
        setData(jsonData.results.map(record => record.dob.age));

        // Generating a timestamp in Eastern Time
        const easternTime = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
        setTimestamp(easternTime);

    } catch (error) {
        setError(error.message);
    }
    };

    // importing plotly
    useEffect(() => {
        // Code here will run on the client side
        import('plotly.js/dist/plotly.min.js').then(Plotly => {
            setPlotly(Plotly.default);
            });

    }, []);

    useEffect(() => {
        if (Plot && data && data.length > 0 && plotContainerRef.current) {

            const trace = [
                {
                    x: data,
                    type: 'histogram',
                    marker: {
                        color: "#ff6400ff", // Change histogram color
                    },
                    hoverinfo: 'x+y',
                    nbinsx: 20,
                }
            ]
        
            const layout = { height: "100%",
            responsive: 'true',
            autosize: 'true',
            xaxis: {
            title: 'Age', // X-axis label
            },
            yaxis: {
            title: '# People', // Y-axis label
            },
            hovermode: 'closest'}
        
            Plot.newPlot(id_name, trace, layout);
            // This technically works but issue is you can still
            // see bleeding plot flash for a second before correct resized one
            // Plot.newPlot(id_name, trace, layout).then(() => {
            //     Plot.Plots.resize(plotContainerRef.current);
            // });

            Plot.Plots.resize(plotContainerRef.current).then(() => {
                Plot.newPlot(id_name, trace, layout);
            });
   
        }

    }, [Plot, data, id_name]);

    // help with resizing plotly plot
    useEffect(() => {
        const handleResize = () => {

          import('plotly.js/dist/plotly.min.js').then(Plotly => {

            const plotElements = document.querySelectorAll(".plotly_plot");

            console.log('Found plot elements:', plotElements);

            plotElements.forEach(plotElement => {
                Plotly.Plots.resize(plotElement);
            });
          });        
        };

        // resize plot for initial render before any window resizing happens
        // handleResize();
        // TODO: remove timeout
        setTimeout(handleResize, 10000);
      
        // Resize the plot when the window is resized
        window.addEventListener('resize', handleResize);
      
        // Return a clean-up function to remove the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
      }, []);


      
    // // Extract the age values from the data
    // if (!data || data.length === 0) {
    //     return <div>Loading...</div>; // Display loading screen/message
    // }

    return (
        <div className={styles.data_display}>
            <p><b>Sample Data: Age Distribution</b></p>
            <p>Last Updated at {timestamp}</p>
            <div 
                className={`${styles.data_display2} plotly_plot`} ref={plotContainerRef} id={id_name} 
            >
            </div>
        </div>
    );
};

export default DataDisplay;
