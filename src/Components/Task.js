import React from 'react';
import { useState } from 'react';
import './Task.css'

const Task = () => {
    const [date,setDate]= useState(null)

    const handleChange =(event)=>{
        const selectValue= event.target.value
        if (selectValue === "Yesterday") {
      
            setDate(new Date(Date.now() - 864e5).toDateString())
          } else {
            setDate(new Date(Date.now() - 864e5 * 7).toDateString())
          }
    }
   
    return (
        <div>
            <section className='text-box'>
           
            <h1 className='title'>Job Task</h1>
            
            <select onChange={handleChange} className='spacing'>
                 <option value="Yesterday">Yesterday</option>
                  <option value="Last 7 Days">Last 7 Days</option>
             </select>


            {
                date?<>
                <div className='spacing'>
                <h5>The date</h5>
                <p>{date}</p>
                </div>
                </>:''
            }


            </section>
        </div>
    );
};

export default Task;