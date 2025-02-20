import React, { useRef, useState } from 'react';

const UncontrolComponents = () => {
  const inputref = useRef('');
  const [email, setemail] = useState('');

  function handlesubmit() {
    console.log(inputref.current.value);
    console.log(email);
  }

  return (
    <div>
      <input type="text" placeholder="Uncontrol" ref={inputref} />
      <input type="text" placeholder="Control" onChange={(e) => setemail(e.target.value)} />
      <button onClick={handlesubmit}>Submit</button>
    </div>
  );
};

export default UncontrolComponents;
