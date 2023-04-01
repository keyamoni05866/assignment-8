import React from 'react';

const Answer = () => {
    return (
        <div className="Answer p-3">
          <h3>1.Write about props vs sate.</h3>
         <p className="mb-0"><span className="fw-bold fs-6 ">Ans:</span><span className="fw-bold fs-6">Props:</span> We called props that is the short of properties. We use props for passing data from a parent component to a child component. Props are read-only, meaning that a child component cannot modify the data it receives via props.
         </p>
         <p ><span className="fw-bold fs-6">State:</span> sate is mutable, meaning that a component can modify its own state using methods provided by the library. Changes to the state can trigger a re-rendering of the component, causing the UI to update</p>
         <h3>2.How does useState work?</h3>
         <p className="mb-0"><span className="fw-bold fs-6 ">Ans:</span><span className="fw-bold fs-6">useState:</span> useState is hook of react that allows us to add state to a functional component.The useState hook returns an array with two values: <br />
         a. The current state value. <br />
         b. A function to update the state value.
         </p>
         <h3>3.Write about purpose of useEffect other than fetching data</h3>
         <p className="mb-0"><span className="fw-bold fs-6 ">Ans:</span><span className="fw-bold fs-6">useEffect Purpose:</span> The useEffect hook in react is used to handle side effects in functional components. Side effect refer to any actions that happen in a component other than rendering UI, such as fetching data from API. It is updating DOM, or subscribing to events and timers. 
         </p>
         <h3>4.How does react work?</h3>
         <p className="mb-0"><span className="fw-bold fs-6 ">Ans:</span><span className="fw-bold fs-6">React:</span>
         React is a JavaScript library used for building user interfaces.It works by providing a way to represent the UI as a collection of components, which can be thought of as reusable building blocks.
         When we use React, we create components that represent parts of our UI. Each component can have its own state, which determines how it should render based on changes to that state. When the state of a component changes, React will re-render the component and any child components that depend on it.
         </p>
        </div>
    );
};

export default Answer;