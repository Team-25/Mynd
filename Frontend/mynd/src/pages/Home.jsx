import Banner from '../components/Homepage/Banner/banner';
import DescriptionBlock from '../components/Homepage/DescriptionBlock/DescriptionBlock';
import Quote from '../components/Homepage/Quote/Quote';

import Container from '@material-ui/core/Container';


import img from '../img/face.jpg';
import FAQs from '../components/Homepage/FAQs/FAQs';

const Home = () => {
    return (
        <>
            <Banner title="Mynd" description="An awesome description about our site"/>
            <div className="content">
                <DescriptionBlock image={img} />

                <Quote quote="An awesome quote from our company!" author="Mynd CEO"/>

                <FAQs />

                {/* Temporary space filler */}
                <div id="background-stripe"></div>
            </div>
        </>
    );
}


export default Home;