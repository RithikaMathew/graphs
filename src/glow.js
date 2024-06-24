import React, { useState } from 'react';
import threePhaseImage from './threephase.png';
import './glow.css';

const Glowing = () => {
    const [highlight, setHighlight] = useState('');

    return (
        <div className="container">
            <img src={threePhaseImage} alt="Three Phase Diagram" className="image" />
            {highlight === 'PhaseAtoGround' && (
                <div className="highlight phase-a"></div>
            )}
            {highlight === 'PhaseAtoGround' && (
                <>
                    <div className="highlight phase-a"></div>
                    <div className="highlight ground"></div>
                </>
            )}
            {highlight === 'PhaseBtoGround' && (
                <>
                    <div className="highlight phase-b"></div>
                    <div className="highlight ground"></div>
                </>
            )}
            {highlight === 'PhaseCtoGround' && (
                <>
                    <div className="highlight phase-c"></div>
                    <div className="highlight ground"></div>
                </>
            )}
            {highlight === 'PhaseABtoGround' && (
                <>
                    <div className="highlight phase-a"></div>
                    <div className="highlight phase-b"></div>
                    <div className="highlight ground"></div>
                </>
            )}
            {highlight === 'PhaseACtoGround' && (
                <>
                    <div className="highlight phase-a"></div>
                    <div className="highlight phase-c"></div>
                    <div className="highlight ground"></div>
                </>
            )}
            {highlight === 'PhaseBCtoGround' && (
                <>
                    <div className="highlight phase-b"></div>
                    <div className="highlight phase-c"></div>
                    <div className="highlight ground"></div>
                </>
            )}
            {highlight === 'PhaseABCtoGround' && (
                <>
                    <div className="highlight phase-a"></div>
                    <div className="highlight phase-b"></div>
                    <div className="highlight phase-c"></div>
                    <div className="highlight ground"></div>
                </>
            )}
            {highlight === 'PhaseAB' && (
                <>
                    <div className="highlight phase-a"></div>
                    <div className="highlight phase-b"></div>
                </>
            )}
            {highlight === 'PhaseAC' && (
                <>
                    <div className="highlight phase-a"></div>
                    <div className="highlight phase-c"></div>
                </>
            )}
            {highlight === 'PhaseBC' && (
                <>
                    <div className="highlight phase-b"></div>
                    <div className="highlight phase-c"></div>
                </>
            )}
            {highlight === 'PhaseABC' && (
                <>
                    <div className="highlight phase-a"></div>
                    <div className="highlight phase-b"></div>
                    <div className="highlight phase-c"></div>
                </>
            )}
            <div className="controls">
                <button onClick={() => setHighlight('PhaseAtoGround')}>Class1 (A—G)</button>
                <button onClick={() => setHighlight('PhaseBtoGround')}>Class2 (B—G)</button>
                <button onClick={() => setHighlight('PhaseCtoGround')}>Class3 (C—G)</button>
                <button onClick={() => setHighlight('PhaseABtoGround')}>Class4 (AB—G)</button>
                <button onClick={() => setHighlight('PhaseACtoGround')}>Class5 (AC—G)</button>
                <button onClick={() => setHighlight('PhaseBCtoGround')}>Class6 (BC—G)</button>
                <button onClick={() => setHighlight('PhaseABCtoGround')}>Class7 (ABC—G)</button>
                <button onClick={() => setHighlight('PhaseAB')}>Class8 (AB)</button>
                <button onClick={() => setHighlight('PhaseAC')}>Class9 (AC)</button>
                <button onClick={() => setHighlight('PhaseBC')}>Class10 (BC)</button>
                <button onClick={() => setHighlight('PhaseABC')}>Class11 (ABC)</button>
                <button onClick={() => setHighlight('')}>Clear Highlights</button>
            </div>
        </div>
    );
}

export default Glowing;