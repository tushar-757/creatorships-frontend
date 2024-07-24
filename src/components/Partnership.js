// import React from 'react';
// import { Card, Container, Row, Col,Button } from 'react-bootstrap'; // Assuming you're using React Bootstrap
// import Header from './Header';


// const BusinessCard = ({ business }) => {
//   const { user, companyName, industry, website, description } = business;

//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Body>
//         <Card.Title>{companyName}</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">{industry}</Card.Subtitle>
//         <Card.Text>{description}</Card.Text>
//         <Card.Text>
//           <strong>Website:</strong> <a href={website} target="_blank" rel="noopener noreferrer">{website}</a>
//         </Card.Text>
//         <Button variant="primary">Contact {user.username}</Button>
//       </Card.Body>
//     </Card>
//   );
// };

// const CreatorCard = ({ creator }) => {
//   const { socialLinks, user, bio, skills, portfolio } = creator;

//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={portfolio[0]} />
//       <Card.Body>
//         <Card.Title>{user.username}</Card.Title>
//         <Card.Text>{bio}</Card.Text>
//         <Card.Text><strong>Skills:</strong> {skills.join(', ')}</Card.Text>
//         <Card.Text>
//           <strong>Social Links:</strong>
//           <ul>
//             {Object.entries(socialLinks).map(([key, value]) => (
//               <li key={key}>
//                 <a href={value} target="_blank" rel="noopener noreferrer">{key}</a>
//               </li>
//             ))}
//           </ul>
//         </Card.Text>
//         <Button variant="primary">Contact {user.username}</Button>
//       </Card.Body>
//     </Card>
//   );
// };

// const partnershipData = [
//   {
//     business: {
//       _id: "66994a5e3abb0a7143994b4f",
//       user: {
//         _id: "66994a5d3abb0a7143994b4d",
//         username: "user02",
//         email: "user02@gmail.com"
//       },
//       companyName: "ABC Inc.",
//       industry: "Education",
//       website: "https://www.abcinc.com",
//       description: "ABC Inc. is a leading education technology company focused on providing innovative learning solutions.",
//       __v: 0
//     },
//     creator: {
//       _id: "6697ee153d5189f77060ea98",
//       user: {
//         _id: "6697ee153d5189f77060ea96",
//         username: "user01",
//         email: "user01@gmail.com"
//       },
//       bio: "Hey, I am a creator passionate about gaming and technology.",
//       skills: ["Gaming", "Video Editing", "Content Creation"],
//       portfolio: ["https://example.com/portfolio.jpg"],
//       socialLinks: {
//         youtube: "https://www.youtube.com/user/user01",
//         instagram: "https://www.instagram.com/user01",
//         twitter: "https://www.twitter.com/user01",
//         tiktok: "https://www.tiktok.com/@user01"
//       },
//       __v: 0
//     }
//   },
//   // Add more partnerships as needed
// ];


// const PartnershipCard = ({ partnership }) => {
//   const { business, creator } = partnership;
//   const { user, companyName, industry, website, description } = business;
//   const { bio, skills, portfolio, socialLinks } = creator;

//   return (
//     <Card className="partnership-card">
//       <Card.Body>
//         <Card.Title>{companyName}</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">{industry}</Card.Subtitle>
//         <Card.Text>{description}</Card.Text>
//         <Card.Text>
//           <strong>Website:</strong> <a href={website} target="_blank" rel="noopener noreferrer">{website}</a>
//         </Card.Text>
//         <hr />
//         <Row>
//           <Col md={4}>
//             <Card.Img src={portfolio[0]} />
//           </Col>
//           <Col md={8}>
//             <Card.Title>{user.username}</Card.Title>
//             <Card.Text>{bio}</Card.Text>
//             <Card.Text><strong>Skills:</strong> {skills.join(', ')}</Card.Text>
//             <Card.Text>
//               <strong>Social Links:</strong>
//               <ul className="list-unstyled">
//                 {Object.entries(socialLinks).map(([key, value]) => (
//                   <li key={key}>
//                     <a href={value} target="_blank" rel="noopener noreferrer">{key}</a>
//                   </li>
//                 ))}
//               </ul>
//             </Card.Text>
//             <Button variant="primary" block>Contact {user.username}</Button>
//           </Col>
//         </Row>
//       </Card.Body>
//     </Card>
//   );
// };

// const PartnershipPage = () => {
//     return (
//     <Container className="py-4">
//         <Header/>
//       <Row>
//       <h1 className="text-center mb-4">Partnerships</h1>
//       {partnershipData.map((partnership, index) => (
//         <PartnershipCard key={index} partnership={partnership} />
//       ))}
//       </Row>
//     </Container>
//   );
// };


// export default PartnershipPage;


import React from 'react';
import { Space, Table, Tag } from 'antd';
import Header from './Header';

const columns = [
  {
    title: 'Business',
    dataIndex: 'business',
    key: 'business',
    render: (business) => <a>{business.companyName}</a>,
  },
  {
    title: 'Creator',
    dataIndex: 'creator',
    key: 'creator',
    render: (creator) => <a>{creator.user.username}</a>,
  },
  {
    title: 'Collaborated On',
    dataIndex: 'collaboratedOn',
    key: 'collaboratedOn',
  },
  {
    title: 'Stake',
    dataIndex: 'stake',
    key: 'stake',
    render: (stake) => (
      <Tag color={stake.toLowerCase() === 'high' ? 'red' : 'green'}>
        {stake.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Details</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    business: {
      companyName: 'ABC Inc.',
      industry: 'Education',
      website: 'https://www.abcinc.com',
      description: 'Leading education technology company.',
    },
    creator: {
      user: {
        username: 'user01',
      },
      bio: 'Passionate creator in gaming and technology.',
      skills: ['Gaming', 'Video Editing'],
      socialLinks: {
        youtube: 'https://www.youtube.com/user/user01',
        instagram: 'https://www.instagram.com/user01',
      },
    },
    collaboratedOn: 'Content Creation',
    stake: 'High',
  },
  {
    key: '2',
    business: {
      companyName: 'XYZ Tech',
      industry: 'Technology',
      website: 'https://www.xyztech.com',
      description: 'Innovative technology solutions provider.',
    },
    creator: {
      user: {
        username: 'user02',
      },
      bio: 'Experienced in software development and AI.',
      skills: ['Software Development', 'AI'],
      socialLinks: {
        github: 'https://github.com/user02',
        twitter: 'https://twitter.com/user02',
      },
    },
    collaboratedOn: 'App Development',
    stake: 'Medium',
  },
];

const Partnership = () =>{

  return  (
    <>
    <Header/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Table columns={columns} dataSource={data} style={{width:'70%',margin:'auto'}}/>
    </>
)
};

export default Partnership;
