/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import feature from 'assets/images/feature.png';
import emoji from 'assets/images/icons/emoji-2.png';

const data = [
  {
    title: 'Strategy',
    contents: (
      <div>
        <h5>Translating brand objectives into actionable outcomes</h5>
        <ul>
          <li>- Website & eCommerce audits</li>
          <li>- Content & site architecture</li>
          <li>- User persona mapping</li>
          <li>- Wireframing</li>
          <li>- Moodboarding</li>
          <li>- Tailored tech stack</li>
        </ul>
         By learning everything about your brand, your target audience, your KPIs, and your back-office dependencies, we set out to create tactful digital products.
      </div>
    ),
  },
  {
    title: 'Design',
    contents: (
      <div>
        <h5>Crafting relatable user experiences that move the needle</h5>
        <ul>
          <li>- Visual branding</li>
          <li>- UX/UI design</li>
          <li>- Mobile-first design</li>
        </ul>
         Marrying memorable visual identity with functional user journeys for experiences that delight, engage, and convert.
      </div>
    ),
  },
  {
    title: `Development`,
    contents: (
      <div>
        <h5>Responsive. Modular. Scalable.</h5>
        <ul>
          <li>- Website Development</li>
          <li>- Platforms & Portals</li>
          <li>- Web Apps</li>
          <li>- eCommerce implementation</li>
          <li>- Complex Integrations</li>
          <li>- Fluid responsive methodologies</li>
          <li>- ADA Compliant Code</li>
          <li>- Modular Content Management</li>
        </ul>
         We understand that business objectives drive technology, and we only leverage tech stacks that helps propel our partners forward.
      </div>
    ),
  },
  {
    title: `Optimization`,
    contents: (
      <div>
        <h5>A proactice approach to ever-evolving digital products</h5>
        <ul>
          <li>- On-site SEO</li>
          <li>- Google Analytics</li>
          <li>- Heatmapping</li>
          <li>- Split-testing</li>
          <li>- Performance-first methodology</li>
          <li>- Ongoing Maintenance & Support</li>
        </ul>
         A digital product is a living, breathing thing that will continuously fulfill its mandate if we stay abreast and act upon user behavior, data, and organic search trends.
      </div>
    ),
  },
];

const ExcitingFeatures = () => {
  return (
    <Box as="section" variant="section.excitingFeatures">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.illustration}>
            <Image src={feature} alt="feature" />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              emoji={emoji}
              sx={styles.heading}
              title="A few of our services that make our client's clients go..."
              description="Build incredible relationships and grow your business our tailored or turnkey solutions, with proven results."
            />
            <Box sx={styles.accordionGroup}>
              <Accordion items={data} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ExcitingFeatures;

const styles = {
  contentWrapper: {
    // gap: [0, 0, 0, 0, 10, 100],
    display: ['block', 'block', 'grid', 'flex', 'grid'],
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    flexDirection: ['column-reverse'],
  },
  illustration: {
    display: ['none', 'none', 'block'],
  },
  heading: {
    maxWidth: [295, 295, 495, 495, 410, 500],
    textAlign: ['center', null, null, null, 'left'],
    mb: [30],
    ml: ['auto', null, null, null, 0],
    h2: {
      fontSize: ['28px', '28px', '28px', '36px', '32px', '36px', '48px'],
      lineHeight: [1.33, 1.33, 1.26],
      letterSpacing: '-1px',
    },
    img: {
      maxWidth: ['24px', '24px', '24px', '30px', '30px', '30px', '100%'],
      top: ['4px', '8px'],
    },
  },
  accordionGroup: {
    maxWidth: ['none', null, null, 600, 'none'],
    '.accordion-item': {
      backgroundColor: '#F6F8FB',
      borderRadius: 10,
      p: [
        '20px 30px',
        '20px 30px',
        '30px 45px',
        '20px 25px 20px',
        '30px 45px',
        '20px 35px',
      ],
      '&.is-open': {
        backgroundColor: '#fff',
        boxShadow: '0px 9px 30px rgba(69, 88, 157, 0.08)',
      },
    },
    h5: {
      marginTop: '5px',
      marginBottom: '5px',
    },
    li: {
      listStyleType: 'none',
      fontSize: '80%',
    }
  },
};
