import {
  Box,
  Center,
  Container,
  Wrap,
  WrapItem,
  Text,
  Image,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { FAQSection } from "./components/FAQSection";
import { Feature } from "./components/Feature";
import { HeroSection } from "./components/HeroSection";
import { Layout } from "./components/Layout";
import { PricingSection } from "./components/PricingSection";

const faqs: any[] = [
  {
    q: "How many clients can I bring on?",
    a: "You can bring on 3 clients with the Free plan. Upgrade to Pro for additional seats.",
  },
  {
    q: "Can I connect it to my CRM?",
    a: "Yes! We support Notion and PipeDrive currently.",
  },
  {
    q: "Do you support international payments?",
    a: "Yes - payments can be made from and to any country.",
  },
  {
    q: "Who can I connect to for support?",
    a: "Email me at sukh@saasbase.dev",
  },
];

export interface HighlightType {
  icon: string;
  title: string;
  description: string;
}

const highlights: HighlightType[] = [
  {
    icon: "✨",
    title: "No-code",
    description:
      "We are No-Code friendly. There is no coding required to get started. Launchman connects with Airtable and lets you generate a new page per row. It's just that easy!",
  },
  {
    icon: "🎉",
    title: "Make Google happy",
    description:
      "We render all our pages server-side; when Google's robots come to index your site, the page does not have to wait for JS to be fetched. This helps you get ranked higher.",
  },
  {
    icon: "😃",
    title: "Rapid experimenting",
    description:
      "You don't have to wait hours to update your hard-coded landing pages. Figure out what resonates with your customers the most and update the copy in seconds",
  },
  {
    icon: "🔌",
    title: "Rapid experimenting",
    description:
      "You don't have to wait hours to update your hard-coded landing pages. Figure out what resonates with your customers the most and update the copy in seconds",
  },
];

interface FeatureType {
  title: string;
  description: string;
  image: string;
}

const features: FeatureType[] = [
  {
    title: "Detailed Analytics",
    description:
      "No more spending hours writing formulas in Excel to figure out how much you're making. We surface important metrics to keep your business going strong.",
    image:
      "https://launchman-space.nyc3.digitaloceanspaces.com/chakra-ui-landing-page-feature-1.png",
  },
  {
    title: "Track your clients",
    description:
      "Know when and how your projects are going so you can stay on top of delivery dates.",
    image:
      "https://launchman-space.nyc3.digitaloceanspaces.com/chakra-ui-landing-page-feature-2.png",
  },
  {
    title: "Manage projects",
    description:
      "You don't have to hunt your email inbox to find that one conversation. Every task, project, and client information is just a click away.",
    image:
      "https://launchman-space.nyc3.digitaloceanspaces.com/chakra-ui-landing-page-feature-3.png",
  },
];

export const App = () => {
  return (
    <Layout>
      <Box bg="gray.50">
        <HeroSection />
        <Container maxW="container.xl">
          <Center p={[0, 10]}>
            <video
              playsInline
              autoPlay
              muted
              poster="https://launchman-space.nyc3.digitaloceanspaces.com/biller-hero-2.png"
              loop
            >
              <source
                src="https://launchman-space.nyc3.digitaloceanspaces.com/biller-hero-2.webm"
                type="video/mp4"
              />
            </video>
          </Center>
        </Container>

        <Container maxW="container.2xl" centerContent py={[20]}>
          <Text color="gray.600" fontSize="lg">
            Used by teams worldwide
          </Text>

          <Wrap
            spacing={[10, 20]}
            mt={8}
            align="center"
            justify="center"
            w="full"
          >
            <WrapItem>
              <Image src="microsoft-logo.svg" alt="Microsoft logo" />
            </WrapItem>

            <WrapItem>
              <Image src="adobe-logo.svg" alt="Adobe logo" />
            </WrapItem>

            <WrapItem>
              <Image src="microsoft-logo.svg" alt="Microsoft logo" />
            </WrapItem>

            <WrapItem>
              <Image src="adobe-logo.svg" alt="Adobe logo" />
            </WrapItem>
          </Wrap>
        </Container>

        <VStack
          backgroundColor="white"
          w="full"
          id="features"
          spacing={16}
          py={[16, 0]}
        >
          {features.map(
            ({ title, description, image }: FeatureType, i: number) => {
              return (
                <Feature
                  key={`feature_${i}`}
                  title={title}
                  description={description}
                  image={image}
                  reverse={i % 2 === 1}
                />
              );
            }
          )}
        </VStack>

        <Container maxW="container.md" centerContent py={[8, 28]}>
          <SimpleGrid spacingX={10} spacingY={20} minChildWidth="300px">
            {highlights.map(({ title, description, icon }, i: number) => (
              <Box p={4} rounded="md" key={`highlight_${i}`}>
                <Text fontSize="4xl">{icon}</Text>

                <Text fontWeight={500}>{title}</Text>

                <Text color="gray.500" mt={4}>
                  {description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>

        <Container py={28} maxW="container.lg" w="full" id="pricing">
          <PricingSection />
        </Container>

        <Container py={28} maxW="container.md">
          <Box w="full">
            <VStack spacing={10} w="full">
              <Text fontWeight={500} fontSize="2xl" align="center">
                Frequently asked questions
              </Text>
              <FAQSection items={faqs} />
            </VStack>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};
