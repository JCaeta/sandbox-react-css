
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from "./Component2.module.css"
import { riskAssessment1 } from '../Data/RiskAssessment/ra1';
import { generateQueries, raRecords } from './sql_queries';


export const Component2 = props => 
{
    useEffect(() => {
        console.log('riskAssessment1: ', riskAssessment1)

    // Content to write to the file
    const fileContent = 'Hello World';
    generateQueries(raRecords)

    // Create a Blob containing the file content
    const blob = new Blob([fileContent], { type: 'text/plain' });

    // Create a data URI from the Blob
    const dataURI = URL.createObjectURL(blob);

    // Create a link element
    const downloadLink = document.createElement('a');

    // Set the href attribute to the data URI
    downloadLink.href = dataURI;

    // Set the download attribute with the desired file name
    downloadLink.download = 'data_risk_assessment.sql';

    // Append the link to the body
    document.body.appendChild(downloadLink);

    // Trigger a click on the link to start the download
    downloadLink.click();

    // Remove the link from the DOM
    document.body.removeChild(downloadLink);

    // Clean up the data URI
    URL.revokeObjectURL(dataURI);


    }, [])

    return (<>
        <div className={styles.container}>
            <h1>Component 2</h1>
        </div>
    </>);
}

Component2.defaultProps =
{

}

Component2.propTypes = 
{

}