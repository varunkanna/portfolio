import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { styled } from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: canter;
  gap: 50px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const Input = styled.input`
  background-color: '#e8e6e6l';
  padding: 20px;
  border: none;
  border-radius: 5px;
`;
const TextArea = styled.textarea`
  background-color:'#e8e6e6l';
  padding: 20px;
  border: none;
  border-radius: 5px;
`;
const Button = styled.button`
  background-color: #da4ea2;
  /* background-color: #fff; */
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  padding: 20px;
`;
const Right = styled.div`
  flex: 1;
`;

function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(null)
  const handleSubmit = e => {
    e.preventDefault();

    emailjs.sendForm('service_pz5abbf', 'template_23wmqpp', form.current, 'dXARczEaBYstf8Yaz')
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
      }, (error) => {
          console.log(error.text);
          setSuccess(false);
      });

  }
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={form} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea placeholder="Write a Message" rows={10} name="message" />
            <Button type="submit">Submit</Button>
            {success && "Your message has been send. we'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
}

export default Contact;
