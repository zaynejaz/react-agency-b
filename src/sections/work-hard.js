/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container, Image, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import { LearnMore } from 'components/link';
import workHard from 'assets/images/work-hard.png';
import emoji from 'assets/images/icons/emoji.png';
import check from 'assets/images/icons/check-circle.png';

const data = [
  {
    id: 1,
    label: 'Web Design',
  },
  {
    id: 2,
    label: 'Web Development',
  },
  {
    id: 3,
    label: 'Brand Identity',
  },
  {
    id: 4,
    label: 'Digital Marketing',
  },
  {
    id: 5,
    label: 'Data Analytics',
  },
  {
    id: 6,
    label: 'Site Optimization',
  },
];

const WorkHard = () => {
  return (
    <Box as="section" variant="section.workHard">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.rightContent}>
            <SectionHeading
              emoji={emoji}
              sx={styles.heading}
              title="To work hard is great, but working smart is just smart. So let us help you with both."
              description="The reason we exist is to correctly brand the world of eCommerce through a comprehensive digital strategy, design, & implementation partnerships."
            />
            <Box sx={styles.features}>
              {data?.map(({ id, label }) => (
                <Flex key={id} as="span" sx={{ alignItems: 'flex-start' }}>
                  <Image src={check} alt="" />
                  <Text as="span">{label}</Text>
                </Flex>
              ))}
            </Box>
            <Box sx={styles.learnMore}>
              <LearnMore label="Explore more" path="#!" />
            </Box>
          </Box>
          <Box sx={styles.illustration}>
            <Image src={workHard} alt="workHard" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WorkHard;

const styles = {
  contentWrapper: {
    gap: [0, 0, 0, 0, 10, 30],
    display: ['flex', null, null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'column', 'row'],
    gridTemplateColumns: ['0.9fr 1.1fr'],
    alignItems: 'center',
  },
  heading: {
    maxWidth: ['none', null, null, '495px', 'auto'],
    textAlign: ['center', null, null, null, 'left'],
    mb: ['20px'],
    ml: [0],
    h2: {
      color: 'heading',
      fontSize: ['24px', '24px', null, '36px', '31px', '35px', '48px'],
      lineHeight: [1.33, 1.33, 1.26],
      letterSpacing: '-1px',
    },
    img: {
      maxWidth: ['24px', null, null, '30px', null, null, '100%'],
      top: ['4px', '8px'],
    },
    p: {
      maxWidth: 430,
    },
  },
  features: {
    columnCount: [1, 2],
    lineHeight: 2.81,
    ml: ['20px', 0],
    img: {
      mr: '10px',
      mt: '11px',
    },
    '+ a': {
      mt: '25px',
      ml: ['20px', 0],
    },
  },
  learnMore: {
    mt: [4],
    ml: [20, null, null, 0],
    textAlign: [null, null, null, 'center', 'left'],
  },
  illustration: {
    mb: ['50px', '50px', 0],
    mt: [0, 0, 0, '50px', 0],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    img: {
      maxWidth: ['100%', null, null, '80%', '100%'],
    },
  },
};
