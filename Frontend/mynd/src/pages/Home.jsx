import Banner from '../components/Homepage/Banner/banner';
import DescriptionBlock from '../components/Homepage/DescriptionBlock/DescriptionBlock';

import img from '../img/person1.jpg';

const Home = () => {
    return (
        <>
            <Banner title="Mynd" description="An awesome description about our site"/>
            <DescriptionBlock image={img} />
        </>
    );
}


export default Home;