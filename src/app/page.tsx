"use client";

import {
  SimpleTopNav,
  Grid,
  GridCol,
  Stack,
  Container,
  Text,
} from "pulseui-base";
import { useBreakpoint } from "pulseui-base";
import "pulseui-base/styles";
export default function Home() {
  const { isMobile, isTablet, isDesktop, breakpoint } = useBreakpoint();

  // Responsive values based on breakpoint
  const getNavigationPadding = () => {
    if (isMobile) return "var(--spacing-md)";
    if (isTablet) return "var(--spacing-lg)";
    if (isDesktop) return "calc(var(--spacing-xl) * 5)";
    return "var(--spacing-lg)";
  };

  const getContainerPadding = () => {
    if (isMobile) return "var(--spacing-md)";
    if (isTablet) return "var(--spacing-lg)";
    if (isDesktop) return "calc(var(--spacing-lg) * 2)";
    return "var(--spacing-xl)";
  };

  const getGridColumns = () => {
    if (isMobile) return 12; // Full width on mobile
    if (breakpoint === "sm") return 6; // 2 columns on small screens
    if (breakpoint === "md") return 4; // 3 columns on medium screens
    return 3; // 4 columns on large screens
  };

  return (
    <Stack gap="0" sx={{ minHeight: "100vh", backgroundColor: "white" }}>
      {/* Responsive Navigation */}
      <Grid sx={{ width: "100%" }}>
        <GridCol span={12}>
          <div className="geist-mono-nav">
            <SimpleTopNav
              brandName="VIGNESH VISHNUMOORTHY"
              brandTitle="PRODUCT DESIGNER + ENGINEER"
              items={[
                { id: "work", label: "WORK", active: true },
                { id: "fun", label: "FUN" },
                { id: "about", label: "ABOUT" },
                { id: "resume", label: "RESUME" },
              ]}
              sx={{
                paddingLeft: getNavigationPadding(),
                paddingRight: getNavigationPadding(),
                backgroundColor: "white",
                minHeight: "80px",
                paddingTop: "var(--spacing-lg)",
                paddingBottom: "var(--spacing-lg)",
                ...(isMobile && {
                  flexDirection: "column",
                  gap: "var(--spacing-md)",
                }),
              }}
            />
          </div>
        </GridCol>
      </Grid>

      {/* Hero Section */}
      <Stack
        gap="0"
        sx={{ flex: 1, backgroundColor: "white", position: "relative" }}
      >
        <Container
          size="lg"
          sx={{
            padding: getContainerPadding(),
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
            minHeight: "calc(100vh - 120px)",
            textAlign: "center",
          }}
        >
          {/* Hero Content */}
          <Stack
            gap="xl"
            sx={{
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {/* Main Heading */}
            <div
              className="hero-heading"
              style={{
                fontSize: isMobile ? "2rem" : "3.5rem",
              }}
            >
              <div>I'm Vignesh and I turn ideas into</div>
              <div>
                structured, scalable products — through{" "}
                <span style={{ whiteSpace: "nowrap" }}>
                  <span className="underlined-text">design</span>{" "}
                  <span className="underlined-text">code</span> and{" "}
                  <span className="underlined-text">clarity</span>
                </span>
              </div>
              <div>
                Currently building Pulse UI, an open-source system for scalable
                UI. Focused on design, developer velocity, and the future of
                intelligent interfaces.
              </div>
            </div>
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
}
