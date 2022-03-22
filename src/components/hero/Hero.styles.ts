import { styled, Button } from "@nextui-org/react";

export const StyledContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  alignContent: "center",
  width: "100vw",
  height: "100vh",
  backgroundImage: `url('./images/hero.png')`,
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "scroll",
  backgroundPosition: "bottom",
  gap: "2rem",
});

export const StyledTitle = styled("h1", {
  fontSize: "4rem",
  textGradient: "$myGradient",
  textAlign: "center",
  py: "0.8rem",
  "@sm": {
    fontSize: "3rem",
  },
  "@smMax": {
    fontSize: "2rem",
  },
});

export const StyledSubtitle = styled("h6", {
  fontSize: "1.4rem",
  textAlign: "center",
  padding: "1rem",
  "@md": {
    fontSize: "1.6rem",
  },
  "@smMax": {
    fontSize: "0.8rem",
  },
});

export const ButtonWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  alignContent: "center",
  gap: "1rem",
  "@sm": {
    flexDirection: "row",
  },
  "@md": {
    flexDirection: "row",
  },
});

export const StyledButton = styled(Button, {
  variants: {
    size: {
      mysize: {
        height: "$12", // space[12]
        borderRadius: "$lg", // radii.xs
        fontSize: "0.8rem",
        "@xs": {
          height: "$12",
          fontSize: "0.8rem",
        },
        "@sm": {
          height: "$14",
          fontSize: "0.8rem",
        },
        "@md": {
          height: "$16",
          width: "$24",
          fontSize: "1rem",
        },
        "@lg": {
          height: "$18", // space[12]
          width: "$42",
          fontSize: "1.2rem",
        },
      },
      borderedsize: {
        height: "$12", // space[12]
        borderRadius: "$lg", // radii.xs
        fontSize: "0.8rem",
        "@xs": {
          height: "$12",
          fontSize: "0.8rem",
        },
        "@sm": {
          height: "$14",
          fontSize: "0.8rem",
        },
        "@md": {
          height: "$16",
          width: "$24",
          fontSize: "1rem",
        },
        "@lg": {
          height: "$18", // space[12]
          width: "$42",
          fontSize: "1.2rem",
        },
      },
    },
  },
});
