import React from 'react';
import { useState } from 'react';
import './Task.css'

const Task = () => {
    const [date,setDate]= useState([])

    const handleChange =(event)=>{
        const selectValue= event.target.value;
        
        if (selectValue === "Yesterday") {
      
            const container = [new Date(Date.now() - 864e5).toDateString()]
            setDate(container)
          }
          
          else {

            const container = [];

            for(let i=1; i<=7; i++){
                const t = i*864e5;
             container.push(new Date(Date.now() - t).toDateString())
             setDate(container)
            }

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
                {date.map(d=><p>{d}</p>)}
                </div>
                </>:''
            }


            </section>
        </div>
    );
};

export default Task;