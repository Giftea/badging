import '../applyform.scss';
// import { useNavigate } from 'react-router-dom';
import '../../../assets/styles/global.scss';
import { useFormContext } from 'react-hook-form';
import { carretDown, carretRight } from '../../../assets/images';

import { useState } from 'react';
const PageSix = () => {
 const { register } = useFormContext();
 const [showLink, setShowLink] = useState(false);

 // const objectStyle = {
 //   color: 'blue',
 //   backgroundColor: 'red',
 //   padding: '10px',
 // };
 // const objectStyleValid = {
 //   color: 'Red',
 //   backgroundColor: 'green',
 //   padding: '10px',
 // };

 return (
  <div className='badge_form'>
   <div className='input-wrapper mb-0'>
    {' '}
    <h4>Diversity Access Tickets</h4>
    <label htmlFor='accessTickets'>
     <input
      type='checkbox'
      name='DATV'
      id='accessTickets'
      {...register('DATV', { required: true })}
      required
     />{' '}
     &nbsp;This event commits to the Diversity Access Tickets.
    </label>{' '}
    <br />
    <button
     type='button'
     className='reference'
     onClick={(e) => {
      e.preventDefault();
      setShowLink(!showLink);
     }}
    >
     References
     {showLink ? (
      <span id='reft'>
       <img
        src={carretDown}
        width={35}
        height={35}
        alt='carret-icon'
        className='carret'
       />
      </span>
     ) : (
      <span id='reft'>
       <img
        src={carretRight}
        width={35}
        height={35}
        alt='carret-icon'
        className='carret'
       />
      </span>
     )}
    </button>
    <br />
    {showLink && (
     <div>
      <a href='https://github.com/chaoss/wg-diversity-inclusion/blob/master/focus-areas/events/diversity-tickets.md'>
       CHAOSS Metric Document
      </a>
     </div>
    )}
   </div>

   <div className='input-wrapper '>
    <label htmlFor='ticketType'>
     How many different types of diversity access tickets are available for the
     event?
    </label>{' '}
    <br /> <br />
    <textarea
     className='input_text'
     id='ticketType'
     type='text'
     name='DATV1'
     placeholder='Enter your answer here'
     {...register('DATV1', { required: true })}
     rows='6'
     cols='75'
     required
    />{' '}
    <br />
   </div>
   <div className='input-wrapper '>
    <label htmlFor='ticketCriteria'>
     What are the criteria for qualifying for a diversity access ticket?
     
    </label>{' '}
    <br /> <br />
    <textarea
     className='input_text'
     id='ticketCriteria'
     type='text'
     name='DATV2'
     placeholder='Enter your answer here'
     {...register('DATV2', { required: true })}
     rows='6'
     cols='75'
     required
    />{' '}
    <br />
   </div>
   <div className='input-wrapper '>
    <label htmlFor='ticketLink'>
     Provide a link to the page containing information about Diversity Access
     Tickets
    </label>{' '}
    <br /> <br />
    <input
     type='text'
     placeholder='Enter your answer here'
     className='input_text'
     id='ticketLink'
     name='DATV3'
     {...register('DATV3', { required: true })}
     required
    />{' '}
    <br />
   </div>

   <div className='criteria'>
    <p>CRITERIA:</p>
    <p>
     <span> Availability: </span>
     The event provides one or more Diversity Access Tickets.
    </p>
    <p>
     <span>Ticket allocation: </span>
     The Event has a process for allocating diversity access tickets.
    </p>
    <p>
     <span> Findability: </span>
     The information about Diversity Access Tickets is public.
    </p>
   </div>
  </div>
 );
};

export default PageSix;
