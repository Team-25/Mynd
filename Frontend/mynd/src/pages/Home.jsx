import Banner from '../components/Homepage/Banner/banner';
import DescriptionBlock from '../components/Homepage/DescriptionBlock/DescriptionBlock';
import Container from '@material-ui/core/Container';

import img from '../img/face.jpg';

const Home = () => {
    return (
        <>
            
            <Banner title="Mynd" description="An awesome description about our site"/>
            <DescriptionBlock image={img} />
            {/* Temporary space filler */}
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Container maxWidth="lg" id="background-stripe"></Container>
        </>
    );
}


export default Home;