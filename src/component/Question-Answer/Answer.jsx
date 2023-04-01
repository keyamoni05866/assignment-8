import React from 'react';

const Answer = () => {
    return (
        <div className="Answer p-3">
          <h3>1.Write about props vs sate.</h3>
         <p className="mb-0"><span className="fw-bold fs-6 ">Ans:</span><span className="fw-bold fs-6">Props:</span> We called props that is the short of properties. We use props for passing data from a parent component to a child component. Props are read-only, meaning that a child component cannot modify the data it receives via props.
         </p>
         <p ><span className="fw-bold fs-6">State:</span> sate is mutable, meaning that a component can modify its own state using methods provided by the library. Changes to the state can trigger a re-rendering of the component, causing the UI to update</p>
        </div>
    );
};

export default Answer;