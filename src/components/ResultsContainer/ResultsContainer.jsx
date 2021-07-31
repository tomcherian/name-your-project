import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultsContainer.css'

const ResultsContainer = ({ suggestedNames }) => {

    const suggestedNamesJsx = suggestedNames.map((name) => { return <NameCard suggestedName={name} /> })

    return (
        <div className="result-container">
            {suggestedNamesJsx}
        </div>
    )
};

export default ResultsContainer;