import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import ExcitingFeatures from 'sections/exciting-features';
import WorkHard from 'sections/work-hard';
import UltimateFeatures from 'sections/ultimate-features';
import HappyCustomer from 'sections/happy-customer';
import Blog from 'sections/blog';
import SubscribeUs from 'sections/subscribe-us';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="The Beta Agency"
          description="A react landing page build with Next JS"
        />
        <Banner />
        <Services />
        <ExcitingFeatures />
        <WorkHard />
        <UltimateFeatures />
        <HappyCustomer />
        <Blog />
        <SubscribeUs />
      </Layout>
    </ThemeProvider>
  );
}
