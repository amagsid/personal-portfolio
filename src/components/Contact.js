import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../styles/GlobalComponents/Button';

import { init, sendForm } from 'emailjs-com';
init('user_x4FGTrgTjdeEVdrn9HdcN');

import { Form } from 'react-bootstrap';

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const message = watch('message') || '';
  const messageCharsLeft = 1500 - message.length;

  const [contactNumber, setContactNumber] = useState('000000');
  const [emailSent, setEmailSent] = useState(false);

  const generateContactNumber = () => {
    const numStr = '000000' + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  const onSubmit = (data) => {
    // console.log(data);
    generateContactNumber();
    sendForm(
      'portfolio_contact_form',
      'template_9whli67',
      '#contact-form'
    ).then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text);
        setEmailSent(true);
      },
      function (error) {
        console.log('FAILED...', error);
      }
    );
  };

  return (
    <>
      {emailSent && (
        <p>🚀 Your message was sent , I'll get back to you shortly!</p>
      )}
      <Form
        id='contact-form'
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: '60%' }}
      >
        <input type='hidden' name='contact_number' value={contactNumber} />

        <Form.Group className='mb-1' controlId='formBasicText'>
          <Form.Control
            style={{ backgroundColor: 'rgb(15,22,90,0)', color: 'white' }}
            size='lg'
            type='text'
            name='user_name'
            placeholder='name'
            {...register('user_name')}
            maxLength='30'
            aria-invalid={errors.user_name ? 'true' : 'false'}
            required={true}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Control
            style={{ backgroundColor: 'rgb(15,22,90,0)', color: 'white' }}
            size='lg'
            type='email'
            name='user_email'
            placeholder='name@example.com'
            {...register('user_email')}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Control
            style={{ backgroundColor: 'rgb(15,22,90,0)', color: 'white' }}
            size='lg'
            name='enter your message'
            {...register('message')}
            maxLength='1500'
            placeholder='Message'
            as='textarea'
            rows={6}
          />
        </Form.Group>

        <p className='message-chars-left'>
          {messageCharsLeft} characeters left
        </p>
        <br />
        <button className='pulse' type='submit' value='Send'>
          Send
        </button>
      </Form>
    </>
    // <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
    //   {errors.user_name && errors.user_name.type === 'required' && (
    //     <div role='alert'>
    //       Name is required
    //       <br />
    //     </div>
    //   )}
    //   <input type='hidden' name='contact_number' value={contactNumber} />
    //   <input
    //     type='text'
    //     name='user_name'
    //     placeholder='Name'
    //     {...register('user_name')}
    //     maxLength='30'
    //     aria-invalid={errors.user_name ? 'true' : 'false'}
    //     required={true}
    //   />
    //   <br />
    //   <input
    //     type='email'
    //     name='user_email'
    //     placeholder='Email'
    //     {...register('user_email')}
    //   />
    //   <br />
    //   <textarea
    //     name='message'
    //     placeholder='Message'
    //     {...register('message')}
    //     maxLength='1500'
    //   />
    //   <p className='message-chars-left'>{messageCharsLeft} characeters left</p>
    //   <br />
    //   <Button type='submit' value='Send'>
    //     Send{' '}
    //   </Button>

    //   {emailSent && (
    //     <p>Your message was sent 🚀 , I'll get back to you shortly!</p>
    //   )}
    // </form>
  );
}

export default Contact;
