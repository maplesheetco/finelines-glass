import React from 'react';
import { PROCESS_STEPS } from '../data.js';
import Reveal from './Reveal.jsx';

// Four cards fit one row on desktop and stack two-by-two, then one, on smaller screens.
const fourUp = { gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' };

export default function ProcessSteps() {
  return (
    <div className="grid" style={fourUp}>
      {PROCESS_STEPS.map((step, i) => (
        <Reveal delay={(i % 4) * 90} key={step.title}>
          <div className="card">
            <span className="article-process-step" style={{ alignSelf: 'flex-start' }}>
              Step {i + 1}
            </span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
