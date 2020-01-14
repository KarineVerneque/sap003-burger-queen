import React, { useState } from 'react';

export default function SelectButton (props) {
  const [extra, setExtra] = useState('Nenhum');

  return(
    <>
      <button
      value={props.name}
      onClick={props.onClick}
      class={props.className}
      >
        {props.name}
          <br />    
        {props.price}
        <p>
          {props.extra ? 
          <>       
            <select onChange={ (e) => setExtra(e.target.value)} >
              {props.extra.map(i => 
                <option value={i}>{i}</option>
              )}
            </select>
              <br />
            <button onClick={() => {
            props.handleClick(props.name, props.product, extra);
            setExtra('Nenhum')
            }}
            >
              Adicionar
            </button>
          </> : ''
          }
        </p>
      </button>
    </>
  )
};

