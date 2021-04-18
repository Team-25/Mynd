import Banner from '../components/Homepage/Banner/banner';
import DescriptionBlock from '../components/Homepage/DescriptionBlock/DescriptionBlock';
import Quote from '../components/Homepage/Quote/Quote';

import Container from '@material-ui/core/Container';

import img from '../img/test.png';
import FAQs from '../components/Homepage/FAQs/FAQs';

const Home = () => {
  return (
    <>
      <Banner
        title=''
        description='Join hundreds of others giving and receiving peer support now! En stuff'
      />

      <DescriptionBlock image={img} />

      <Quote quote='An awesome quote from our company!' author='Mynd CEO' />

      <FAQs />

      {/* Temporary space filler */}
      <div id='background-stripe'></div>
    </>
  );
};

export default Home;
