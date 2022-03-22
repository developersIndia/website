import { Col, Link, Image } from "@nextui-org/react";
import {
  StyledContainer,
  StyledSubtitle,
  StyledTitle,
  StyledButton,
  ButtonWrapper,
} from "./Hero.styles";

export default function Hero() {
  return (
    <StyledContainer>
      <Image
        showSkeleton
        autoResize
        width={620}
        height={120}
        src="/images/heroIcons.png"
        alt="Hero Icons Image"
        css={{ px: "1rem" }}
      />
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
      <ButtonWrapper>
        <Link href="https://discord.gg/ygx3Jbkn9e">
          {" "}
          <StyledButton
            clickable
            size="mysize"
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
      </ButtonWrapper>
    </StyledContainer>
  );
}
