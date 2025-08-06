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
    if (isDesktop) return "calc(var(--spacing-lg)";
    return "var(--spacing-xl)";
  };

  const getGridColumns = () => {
    if (isMobile) return 12; // Full width on mobile
    if (breakpoint === "sm") return 6; // 2 columns on small screens
    if (breakpoint === "md") return 4; // 3 columns on medium screens
    return 3; // 4 columns on large screens
  };

  return (
    <Stack gap="10" sx={{ minHeight: "100vh" }}>
      {/* Responsive Navigation */}
      <Grid sx={{ width: "100%" }}>
        <GridCol span={12}>
          <div className="geist-mono-nav">
            <SimpleTopNav
              brandName="Vignesh Vishnumoorthy"
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
                ...(isMobile && {
                  flexDirection: "column",
                  gap: "var(--spacing-md)",
                }),
                "& [data-brand]": {
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--spacing-sm)",
                  whiteSpace: "nowrap",
                  flexDirection: "row",
                  justifyContent: "center",
                  ...(isMobile && {
                    flexDirection: "column",
                    textAlign: "center",
                    gap: "var(--spacing-xs)",
                  }),
                },
                "& [data-brand-name]": {
                  color: "var(--color-text-primary) !important",
                  textAlign: "center",
                  ...(isMobile && {
                    fontSize: "var(--font-size-lg)",
                  }),
                },
                "& [data-brand-title]": {
                  color: "var(--color-text-secondary) !important",
                  textAlign: "center",
                  ...(isMobile && {
                    fontSize: "var(--font-size-sm)",
                  }),
                },
                "& [data-nav]": {
                  display: "flex",
                  gap: "var(--spacing-md)",
                  ...(isMobile && {
                    gap: "var(--spacing-sm)",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }),
                },
              }}
            />
          </div>
        </GridCol>
      </Grid>

      {/* Responsive Main Content */}
      <Stack gap="0" sx={{ flex: 1 }}>
        <Container
          size="lg"
          sx={{
            padding: getContainerPadding(),
          }}
        >
          {/* Hero Section */}
          <Stack
            gap="xl"
            sx={{ textAlign: "center", marginBottom: "var(--spacing-xxl)" }}
          >
            <Text
              as="h1"
              variant="xxl"
              sx={{
                marginBottom: "var(--spacing-lg)",
                ...(isMobile && {
                  fontSize: "var(--font-size-2xl)",
                }),
              }}
            >
              Welcome to My Portfolio
            </Text>
            <Text
              variant="lg"
              color="secondary"
              sx={{
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              This is a clean portfolio page using Pulse UI components with
              responsive design.
            </Text>
          </Stack>

          {/* Responsive Grid using Pulse UI Grid System */}
          <Grid gutter="lg" sx={{ marginTop: "var(--spacing-xxl)" }}>
            {/* Grid Items */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <GridCol key={item} span={getGridColumns()}>
                <Stack
                  gap="md"
                  sx={{
                    padding: "var(--spacing-lg)",
                    backgroundColor: "surface",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--color-border-primary)",
                    height: "100%",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "var(--shadow-lg)",
                    },
                  }}
                >
                  <Text
                    as="h3"
                    variant="xl"
                    sx={{
                      ...(isMobile && {
                        fontSize: "var(--font-size-lg)",
                      }),
                    }}
                  >
                    Project {item}
                  </Text>
                  <Text
                    color="secondary"
                    sx={{
                      ...(isMobile && {
                        fontSize: "var(--font-size-sm)",
                      }),
                    }}
                  >
                    This is a sample project description that showcases the
                    responsive grid layout.
                  </Text>
                </Stack>
              </GridCol>
            ))}
          </Grid>
        </Container>
      </Stack>
    </Stack>
  );
}
