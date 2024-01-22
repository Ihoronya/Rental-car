import {
  ConclusionParagraph,
  HomeContainer,
  WelcomeHeader,
} from './Home.styled';
import carImg from '../../images/car-rent.jpg';

export const Home = () => {
  return (
    <HomeContainer>
      <WelcomeHeader>
        Welcome to Car Rental Service - Your Reliable Car Rental Partner
      </WelcomeHeader>
      <img src={carImg} alt="car"></img>

      <ConclusionParagraph>
        Explore World with confidence and convenience by choosing our company
        for your car rental needs.
        <br />
        Book your car today and embark on a memorable journey!
      </ConclusionParagraph>
    </HomeContainer>
  );
};
