import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Meta, Schema, Media } from "@once-ui-system/core";
import { home, about, person, contact, baseURL, routes } from "@/resources";
import { ContactForm } from "@/components";
import { Projects } from "@/components/work/Projects";

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth paddingY="24" gap="m">
        <Column maxWidth="s">
          {/* {home.featured.display && (
          <RevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="32" paddingLeft="12">
            <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false}
              href={home.featured.href}>
              <Row paddingY="2">{home.featured.title}</Row>
            </Badge>
          </RevealFx>
          )} */}
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="start" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Flex gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      
      {/* Side Income Section Header */}
      <RevealFx translateY="16" delay={0.5}>
        <Column fillWidth gap="l" paddingY="0">
          <Column maxWidth="s" gap="m">
            <Heading wrap="balance" variant="heading-strong-xl">
              Side Business and Services
            </Heading>
            {/* <Text wrap="balance" onBackground="neutral-weak" variant="body-default-l">
              Beyond my main development work, I offer specialized services including custom wedding RSVP websites that help couples manage their special day, and computer science tutoring for primary and secondary students to build foundational programming skills.
            </Text> */}
          </Column>
        </Column>
      </RevealFx>

      {/* Wedding RSVP Websites Section */}
      <RevealFx translateY="16" delay={0.6}>
        <Column fillWidth gap="l" paddingY="0">
          <Column maxWidth="s" gap="m">
            <Heading wrap="balance" variant="heading-strong-l">
              Wedding RSVP Websites
            </Heading>
            <Text wrap="balance" onBackground="neutral-weak" variant="body-default-m">
              Custom-built responsive websites for wedding invitations and guest management. Each template includes RSVP tracking, guest lists, dietary preferences, and real-time updates for couples.
            </Text>
          </Column>
          
          <Column fillWidth gap="m" paddingTop="16">
            <Text onBackground="neutral-weak" variant="body-default-s" paddingBottom="8">
              <strong>Key Features:</strong><br/>
              • Online RSVP with real-time guest count updates<br/>
              • Mobile-optimized responsive design<br/>
              • Map integration for venue locations (Waze, Google Maps)<br/>
              • Contact integration (WhatsApp)<br/>
              • Image gallery collection<br/>
            </Text>
            <Row gap="s" paddingBottom="16" wrap>
              <Badge background="brand-alpha-weak" textVariant="label-default-xs">Angular.js</Badge>
              <Badge background="brand-alpha-weak" textVariant="label-default-xs">Firebase</Badge>
              <Badge background="brand-alpha-weak" textVariant="label-default-xs">Netlify</Badge>
            </Row>
          </Column>
            
          {/* Wedding Template Cards */}
          <Row fillWidth gap="s" wrap>
            <Column flex={1} gap="s" paddingX="0" paddingY="0" background="neutral-alpha-weak" radius="m" style={{ minWidth: "200px", maxWidth: "320px", display: "flex", flexDirection: "column" }}>
              <a href="https://colorfulfloral.netlify.app/#/" target="_blank" rel="noopener noreferrer" style={{ cursor: "pointer" }}>
                <Media
                  src="/images/projects/project-01/colorful_floral.png"
                  alt="Colorful Floral Template Preview"
                  radius="m"
                  style={{ width: "100%", height: "180px", objectFit: "cover" }}
                />
              </a>
              <Column gap="s" paddingX="12" paddingY="12" style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                <Heading variant="heading-strong-s">Colorful FLoral</Heading>
                <Text onBackground="neutral-weak" variant="body-default-xs" style={{ flex: "1" }}>
                  Timeless and sophisticated design with clean typography and subtle animations. Perfect for traditional ceremonies.
                </Text>
                <Column gap="s" paddingTop="8">
                  <Flex fillWidth horizontal="space-between" vertical="center">
                    <Text variant="heading-strong-m" onBackground="brand-strong">RM 30.00</Text>
                    <a 
                      href="https://wa.me/60182402451?text=Hi! I'm interested in the Colorful Floral wedding template (RM 30.00). Can you provide more details?" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ textDecoration: "none" }}
                    >
                      <Badge background="brand-strong" textVariant="label-default-xs" style={{ cursor: "pointer" }}>Buy Now</Badge>
                    </a>
                  </Flex>
                </Column>
              </Column>
            </Column>
            
            <Column flex={1} gap="s" paddingX="0" paddingY="0" background="neutral-alpha-weak" radius="m" style={{ minWidth: "200px", maxWidth: "320px", display: "flex", flexDirection: "column" }}>
              <a href="https://modernminimal.netlify.app/#/" target="_blank" rel="noopener noreferrer" style={{ cursor: "pointer" }}>
                <Media
                  src="/images/projects/project-01/modern_minimalist.png"
                  alt="Modern Minimalist Template Preview"
                  radius="m"
                  style={{ width: "100%", height: "180px", objectFit: "cover" }}
                />
              </a>
              <Column gap="s" paddingX="12" paddingY="12" style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                <Heading variant="heading-strong-s">Modern Minimalist</Heading>
                <Text onBackground="neutral-weak" variant="body-default-xs" style={{ flex: "1" }}>
                  Clean, contemporary design with bold typography and smooth transitions. Ideal for modern couples.
                </Text>
                <Column gap="s" paddingTop="8">
                  <Flex fillWidth horizontal="space-between" vertical="center">
                    <Text variant="heading-strong-m" onBackground="brand-strong">RM 30.00</Text>
                    <a 
                      href="https://wa.me/60182402451?text=Hi! I'm interested in the Modern Minimalist wedding template (RM 30.00). Can you provide more details?" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ textDecoration: "none" }}
                    >
                      <Badge background="brand-strong" textVariant="label-default-xs" style={{ cursor: "pointer" }}>Buy Now</Badge>
                    </a>
                  </Flex>
                </Column>
              </Column>
            </Column>
            
            <Column flex={1} gap="s" paddingX="0" paddingY="0" background="neutral-alpha-weak" radius="m" style={{ minWidth: "200px", maxWidth: "320px", display: "flex", flexDirection: "column" }}>
              <a href="https://botanicalpink.netlify.app/#/" target="_blank" rel="noopener noreferrer" style={{ cursor: "pointer" }}>
                <Media
                  src="/images/projects/project-01/botanical_pink.png"
                  alt="Botanical Pink Template Preview"
                  radius="m"
                  style={{ width: "100%", height: "180px", objectFit: "cover" }}
                />
              </a>
              <Column gap="s" paddingX="12" paddingY="12" style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                <Heading variant="heading-strong-s">Botanical Pink</Heading>
                <Text onBackground="neutral-weak" variant="body-default-xs" style={{ flex: "1" }}>
                  Floral-inspired design with soft colors and organic elements. Perfect for garden or outdoor weddings.
                </Text>
                <Column gap="s" paddingTop="8">
                  <Flex fillWidth horizontal="space-between" vertical="center">
                    <Text variant="heading-strong-m" onBackground="brand-strong">RM 30.00</Text>
                    <a 
                      href="https://wa.me/60182402451?text=Hi! I'm interested in the Botanical Pink wedding template (RM 30.00). Can you provide more details?" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ textDecoration: "none" }}
                    >
                      <Badge background="brand-strong" textVariant="label-default-xs" style={{ cursor: "pointer" }}>Buy Now</Badge>
                    </a>
                  </Flex>
                </Column>
              </Column>
            </Column>
          </Row>
               <Row fillWidth gap="s" wrap>
            <Column flex={1} gap="s" paddingX="0" paddingY="0" background="neutral-alpha-weak" radius="m" style={{ minWidth: "200px", maxWidth: "320px", display: "flex", flexDirection: "column" }}>
              <a href="https://oceanblues.netlify.app/#/" target="_blank" rel="noopener noreferrer" style={{ cursor: "pointer" }}>
                <Media
                  src="/images/projects/project-01/ocean_blue.png"
                  alt="Ocean Blue Template Preview"
                  radius="m"
                  style={{ width: "100%", height: "180px", objectFit: "cover" }}
                />
              </a>
              <Column gap="s" paddingX="12" paddingY="12" style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                <Heading variant="heading-strong-s">Ocean Blue</Heading>
                <Text onBackground="neutral-weak" variant="body-default-xs" style={{ flex: "1" }}>
                  Timeless and sophisticated design with clean typography and subtle animations. Perfect for traditional ceremonies.
                </Text>
                <Column gap="s" paddingTop="8">
                  <Flex fillWidth horizontal="space-between" vertical="center">
                    <Text variant="heading-strong-m" onBackground="brand-strong">RM 30.00</Text>
                    <a 
                      href="https://wa.me/60182402451?text=Hi! I'm interested in the Ocean Blue wedding template (RM 30.00). Can you provide more details?" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ textDecoration: "none" }}
                    >
                      <Badge background="brand-strong" textVariant="label-default-xs" style={{ cursor: "pointer" }}>Buy Now</Badge>
                    </a>
                  </Flex>
                </Column>
              </Column>
            </Column>
            
            <Column flex={1} gap="s" paddingX="0" paddingY="0" background="neutral-alpha-weak" radius="m" style={{ minWidth: "200px", maxWidth: "320px", display: "flex", flexDirection: "column" }}>
              <a href="https://olivegreens.netlify.app/#/" target="_blank" rel="noopener noreferrer" style={{ cursor: "pointer" }}>
                <Media
                  src="/images/projects/project-01/olive_green.png"
                  alt="Olive Green Template Preview"
                  radius="m"
                  style={{ width: "100%", height: "180px", objectFit: "cover" }}
                />
              </a>
              <Column gap="s" paddingX="12" paddingY="12" style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                <Heading variant="heading-strong-s">Olive Green</Heading>
                <Text onBackground="neutral-weak" variant="body-default-xs" style={{ flex: "1" }}>
                  Clean, contemporary design with bold typography and smooth transitions. Ideal for modern couples.
                </Text>
                <Column gap="s" paddingTop="8">
                  <Flex fillWidth horizontal="space-between" vertical="center">
                    <Text variant="heading-strong-m" onBackground="brand-strong">RM 30.00</Text>
                    <a 
                      href="https://wa.me/60182402451?text=Hi! I'm interested in the Olive Green wedding template (RM 30.00). Can you provide more details?" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ textDecoration: "none" }}
                    >
                      <Badge background="brand-strong" textVariant="label-default-xs" style={{ cursor: "pointer" }}>Buy Now</Badge>
                    </a>
                  </Flex>
                </Column>
              </Column>
            </Column>
            
            <Column flex={1} gap="s" paddingX="0" paddingY="0" background="neutral-alpha-weak" radius="m" style={{ minWidth: "200px", maxWidth: "320px", display: "flex", flexDirection: "column" }}>
              <a href="https://lightmaroon.netlify.app/#/" target="_blank" rel="noopener noreferrer" style={{ cursor: "pointer" }}>
                <Media
                  src="/images/projects/project-01/romantic garden.jpg"
                  alt="Romantic Garden Template Preview"
                  radius="m"
                  style={{ width: "100%", height: "180px", objectFit: "cover" }}
                />
              </a>
              <Column gap="s" paddingX="12" paddingY="12" style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                <Heading variant="heading-strong-s">Purple Lavender</Heading>
                <Text onBackground="neutral-weak" variant="body-default-xs" style={{ flex: "1" }}>
                  Floral-inspired design with soft colors and organic elements. Perfect for garden or outdoor weddings.
                </Text>
                <Column gap="s" paddingTop="8">
                  <Flex fillWidth horizontal="space-between" vertical="center">
                    <Text variant="heading-strong-m" onBackground="brand-strong">RM 30.00</Text>
                    <a 
                      href="https://wa.me/60182402451?text=Hi! I'm interested in the Purple Lavender wedding template (RM 30.00). Can you provide more details?" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ textDecoration: "none" }}
                    >
                      <Badge background="brand-strong" textVariant="label-default-xs" style={{ cursor: "pointer" }}>Buy Now</Badge>
                    </a>
                  </Flex>
                </Column>
              </Column>
            </Column>
          </Row>
        </Column>
      </RevealFx>

      {/* Computer Science Tutoring Section */}
      <RevealFx translateY="16" delay={0.7}>
        <Column fillWidth gap="l" paddingY="0">
          <Column maxWidth="s" gap="m">
            <Heading wrap="balance" variant="heading-strong-l">
              Computer Science Tutoring
            </Heading>
            <Text wrap="balance" onBackground="neutral-weak" variant="body-default-m">
              Providing comprehensive computer science education for primary and secondary school students, specializing in visual programming and modern development tools to build foundational coding skills.
            </Text>
          </Column>
          
          <Column fillWidth gap="m" paddingTop="16">
              <Text onBackground="neutral-weak" variant="body-default-s" paddingBottom="8">
                <strong>Curriculum Highlights:</strong><br/>
                • FlutterFlow visual app development<br/>
                • Vibe coding fundamentals and logic<br/>
                • Firebase integration and cloud services<br/>
                • Interactive project-based learning<br/>
                • Age-appropriate programming concepts<br/>
              </Text>
              <Row gap="s" paddingTop="12" wrap>
                <Badge background="brand-alpha-weak" textVariant="label-default-xs">FlutterFlow</Badge>
                <Badge background="brand-alpha-weak" textVariant="label-default-xs">Vibe Coding</Badge>
                <Badge background="brand-alpha-weak" textVariant="label-default-xs">Firebase</Badge>
                <Badge background="brand-alpha-weak" textVariant="label-default-xs">Machine Learning</Badge>
                <Badge background="brand-alpha-weak" textVariant="label-default-xs">Scratch</Badge>
              </Row>
          </Column>
        </Column>
      </RevealFx>
      
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      <Projects range={[2]} />
      
      {contact.display && <ContactForm contact={contact} />}
    </Column>
  );
}
