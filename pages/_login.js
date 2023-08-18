import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
      <div className='wrap'>
      <Form className='userLogin mx-auto'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <h1>Welcome back!</h1>
        <Form.Label className='Form-Label mt-4'>Email</Form.Label>
        <Form.Control className='Form-Label2' type="email" placeholder="Enter your email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='Form-Label'>Password</Form.Label>
        <Form.Control className='Form-Label2' type="password" placeholder="Password" required />
      </Form.Group>
      <Button className='submitButton' variant="primary" type="submit">
        Submit
      </Button>
      <p className='sso'>or login with SSO</p>
    </Form>
    {/* <Button>Help</Button> */}
    <p className='option'>Don&apos;t have an account? <span className='signUpText'>Sign up</span></p>
    <p className='policy'>This site is protected by reCAPTCHA and the Google <span className='privatePolicy'>Privacy Policy</span> and <span className='termOfService'>Terms of Service</span> apply.</p>
  
    </div>
      
    
  );
}

export default BasicExample;