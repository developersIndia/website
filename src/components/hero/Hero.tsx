import { Col, Image } from "@nextui-org/react";
import {
  StyledContainer,
  StyledSubtitle,
  StyledTitle,
} from "@components/hero/Hero.styles";

//TODO import StyledButton and ButtonWrapper from Hero.styles whenever we add buttons back

export default function Hero() {
  return (
    //custom styled component to wrap hero section
    //and other custom components named Styled are all declared in Hero.styles.ts
    <StyledContainer>
      {/* NextUI image component */}
      <Image
        showSkeleton
        autoResize
        width={620}
        height={120}
        src="/images/heroIcons.png"
        alt="Hero Icons Image"
        css={{ px: "1rem" }}
      />
      {/* NextUI column component */}
      <Col>
        <StyledTitle>
          India’s Biggest
          <br />
          Developers Community.
        </StyledTitle>
        <StyledSubtitle>
          We are India’s biggest and ever growing community of developers.
          <br />
          Join our socials, hang around on discord and check our mission!
        </StyledSubtitle>
      </Col>

      {/* Custom Button component and it's wrapper
      This is commented out to be used later with proper links 
      and once we have proper understanding of what other platforms fits for the community beside Discord  
      //TODO import Link component from @nextui-org/react whenever we add buttons */}

      {/* <ButtonWrapper>
        <Link href="https://discord.gg/ygx3Jbkn9e">
          {" "}
          <StyledButton
            clickable
            size="solidsize"
            css={{ background: "$btnColor" }}>
            Join Our Discord
          </StyledButton>
        </Link>
        <StyledButton
          bordered
          size="borderedsize"
          css={{ border: "2px solid $btnColor", color: "$btnColor" }}>
          Learn about our mission
        </StyledButton>
      </ButtonWrapper> */}
    </StyledContainer>
  );
}
