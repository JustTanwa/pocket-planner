import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value

        if (password !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }

        try {
            setError('')
            setLoading(true)
            await signup(email, password)
        } catch {
            setError('Failed to create an account')
        }
        
        setLoading(false)
    }
    
    return (
        <main>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Sign Up</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password'ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id='password-confirm'>
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type='password'ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button className='w-100 mt-2' disabled={loading} type='submit'>Submit</Button>
                    </Form>

                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-3'>
                Already have an account? Log In
            </div>
        </main>
    )
}
