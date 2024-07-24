import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import Header from './Header';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'creator', // default role
    bio: '',
    socialLinks: { youtube: '', instagram: '', twitter: '', tiktok: '' },
    skills: '',
    portfolio: '',
    companyName: '',
    industry: '',
    website: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('socialLinks.')) {
      const socialKey = name.split('.')[1];
      setFormData({ ...formData, socialLinks: { ...formData.socialLinks, [socialKey]: value } });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const showMessage = (message, type) => {
    Swal.fire({
      title: `${message}'${type}`,
    }).then(() => {
    //   window.location.reload();
       if (type === 'Success!') {
         window.location.href = '/login';
       }
     });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("inside register");
    try {
      await axios.post('http://localhost:5000/api/user/register-user', formData);
    //   alert('Registration successful!');
    console.log("inside register 1");
      showMessage("Registration successful!",'Success!');
    } catch (err) {
         console.log("inside register 2",err.response.data.msg);
    //   console.error("inside ",err.message);
    //   alert('Registration failed!');
      showMessage(err.response.data.msg,"Registration failed!");
    }
  };

  const renderCreatorFields = () => (
    <>
      <Form.Group controlId="formBio">
        <Form.Label>Bio</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter your bio"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formSocialLinks">
        <Form.Label>Social Links</Form.Label>
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="YouTube"
              name="socialLinks.youtube"
              value={formData.socialLinks.youtube}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Instagram"
              name="socialLinks.instagram"
              value={formData.socialLinks.instagram}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <Form.Control
              type="text"
              placeholder="Twitter"
              name="socialLinks.twitter"
              value={formData.socialLinks.twitter}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="TikTok"
              name="socialLinks.tiktok"
              value={formData.socialLinks.tiktok}
              onChange={handleChange}
            />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group controlId="formSkills">
        <Form.Label>Skills</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your skills"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formPortfolio">
        <Form.Label>Portfolio</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter portfolio URLs"
          name="portfolio"
          value={formData.portfolio}
          onChange={handleChange}
        />
      </Form.Group>
    </>
  );

  const renderBusinessFields = () => (
    <>
      <Form.Group controlId="formCompanyName">
        <Form.Label>Company Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter company name"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
      </Form.Group>

 <Form.Group controlId="formIndustry">
      <Form.Label>Industry</Form.Label>
      <Form.Control
        as="select"
        name="industry"
        value={formData.industry}
        onChange={handleChange}
      >
        <option value="">Select industry</option>
        <option value="IT">IT</option>
        <option value="Finance">Finance</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Education">Education</option>
        <option value="Retail">Retail</option>
        {/* Add more options as needed */}
      </Form.Control>
    </Form.Group>
      <Form.Group controlId="formWebsite">
        <Form.Label>Website</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter website URL"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </Form.Group>
    </>
  );

  return (
    <Container>
     <Header/>
      <Row className="justify-content-md-center mt-5">
        <Col md={8}>
          <h1 className="text-center mb-4">Register</h1>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={3}>
                <Form.Group controlId="formUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formRole">
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    as="select"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="creator">Creator</option>
                    <option value="business">Business</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            {formData.role === 'creator' ? renderCreatorFields() : renderBusinessFields()}

            <div className="text-center mt-4">
              <Button variant="primary" type="submit">
                Register
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationPage;
