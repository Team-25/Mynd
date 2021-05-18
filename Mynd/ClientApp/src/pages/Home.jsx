import Banner from '../components/Homepage/Banner/banner';
import DescriptionBlock from '../components/Homepage/DescriptionBlock/DescriptionBlock';
import Quote from '../components/Homepage/Quote/Quote';

import Container from '@material-ui/core/Container';


import img from '../img/test.png';
import FAQs from '../components/Homepage/FAQs/FAQs';

const Home = () => {
    return (
        <>
            <Banner title="" description="Join hundreds of others giving and receiving peer support now!"/>
            
            <DescriptionBlock image={img} />

            <Quote quote="Any place, any time, everyone deserves access to support - we strive to offer that support. At Mynd we are here for you!" author="Mynd Team"/>

            <FAQs />

            {/* Temporary space filler */}
            <div id="background-stripe"></div>
            
        </>
    );
}


export default Home;