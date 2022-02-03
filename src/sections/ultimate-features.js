/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import icon1 from 'assets/images/icons/1.png';
import icon2 from 'assets/images/icons/2.png';
import icon3 from 'assets/images/icons/3.png';
import icon4 from 'assets/images/icons/4.png';
import icon5 from 'assets/images/icons/5.png';
import icon6 from 'assets/images/icons/6.png';

const data = [
  {
    id: 1,
    icon: icon1,
    path: '#!',
    title: 'Email Campaign Templates',
    description: `Get your info tests delivered at home collect a sample from the your task.`,
  },
  {
    id: 2,
    icon: icon2,
    path: '#!',
    title: 'Bespoke Transaction Performance',
    description: `Get your info tests delivered at home collect a sample from the your task.`,
  },
  {
    id: 3,
    icon: icon3,
    path: '#!',
    title: 'Current Secure Analytics',
    description: `Get your info tests delivered at home collect a sample from the your task.`,
  },
  {
    id: 4,
    icon: icon4,
    path: '#!',
    title: 'Premium Wordpress Plugins',
    description: `Get your info tests delivered at home collect a sample from the your task.`,
  },
  {
    id: 5,
    icon: icon5,
    path: '#!',
    title: 'Custom Salesforce Development',
    description: `Get your info tests delivered at home collect a sample from the your task.`,
  },
  {
    id: 6,
    icon: icon6,
    path: '#!',
    title: 'Unique Shopify Integrations',
    description: `Get your info tests delivered at home collect a sample from the your task.`,
  },
];

const UltimateFeatures = () => {
  return (
    <Box as="section" id="features" variant="section.ultimateFeatures">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Out of the box features designed to get you running before walking"
          description="Thoroughly researched and tested solutions in order for all our catered work to enhance and work with the any brand and business. This means we are constantly exploring and always innovating resulting in creative innovation."
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <Feature className="feature-item" key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UltimateFeatures;

const styles = {
  heading: {
    marginBottom: [50, 50, 80],
    p: {
      maxWidth: 490,
      margin: ['10px auto 0'],
    },
  },
  features: {
    gap: [60, 60, 60, 40, '50px 30px', 60],
    display: ['grid', 'grid'],
    maxWidth: 1030,
    margin: '0 auto',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    '.feature-item': {
      display: ['block'],
      textAlign: 'center',
      maxWidth: [290, 260, 260, 280, 'none'],
      m: ['0 auto', '0 auto', '0 auto', '0 auto', '0 auto', 0],
      figure: {
        m: ['0 0 20px'],
      },
      h4: {
        mb: ['15px', '15px', '20px'],
      },
      p: {
        fontSize: ['14px', '14px', '16px', '16px', '14px', '16px'],
      },
    },
  },
};
