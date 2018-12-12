import React from 'react';
import styled from 'styled-components';


const Formstyle = styled.form`
  margin-top:1.8em;
 input{
   height:40px;
   border-radius:var(--border-radius);
   margin-right:20px;
   width: 200px;
 }

 button{
  height:40px;
  background: var(--color-brand-1);
  border:none;
  border-radius:var(--border-radius);
  color:white;
  margin-left:10px;
  font-size: 18px;
  font-weight: bold;
 }


`;


const Form = () => (
  <Formstyle>
    <input type="text" name="recipe name" placeholder="Recipe name" />
    <input type="text" name="ratings" placeholder="Ratings" />
    <button type="submit">Create Recipie</button>
  </Formstyle>
)

export default Form;
