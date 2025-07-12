import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Meta, Schema } from "@once-ui-system/core";
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
      
      {/* Side Income Section */}
      <RevealFx translateY="16" delay={0.5}>
        <Column fillWidth gap="l" paddingY="0">
          <Column maxWidth="s" gap="m">
            <Heading wrap="balance" variant="heading-strong-xl">
              Side Business and Services
            </Heading>
            <Text wrap="balance" onBackground="neutral-weak" variant="body-default-l">
              Beyond my main development work, I offer specialized services including custom wedding RSVP websites that help couples manage their special day, and computer science tutoring for primary and secondary students to build foundational programming skills.
            </Text>
          </Column>
          
          <Column fillWidth gap="m" paddingTop="24">
            <Row fillWidth gap="l" wrap>
              <Column flex={1} gap="s" paddingX="16" paddingY="20" background="neutral-alpha-weak" radius="m">
                <Heading variant="heading-strong-m">Wedding RSVP Websites</Heading>
                <Text onBackground="neutral-weak" variant="body-default-s">
                  Custom-built responsive websites for wedding invitations and guest management. Features include RSVP tracking, guest lists, dietary preferences, and real-time updates for couples.
                </Text>
                <Text onBackground="neutral-weak" variant="body-default-s" paddingTop="8">
                  <strong>Key Features:</strong><br/>
                  • Online RSVP with real-time guest count updates<br/>
                  • Mobile-optimized responsive design<br/>
                  • Map integration for venue locations (Waze, Google Maps)<br/>
                  • Contact integration (WhatsApp)<br/>
                  • Image gallery collection<br/>
                </Text>
                <Row gap="s" paddingTop="12" wrap>
                  <Badge background="brand-alpha-weak" textVariant="label-default-xs">Angular.js</Badge>
                  <Badge background="brand-alpha-weak" textVariant="label-default-xs">Firebase</Badge>
                  <Badge background="brand-alpha-weak" textVariant="label-default-xs">Netlify</Badge>
                </Row>
              </Column>
              
              <Column flex={1} gap="s" paddingX="16" paddingY="20" background="neutral-alpha-weak" radius="m">
                <Heading variant="heading-strong-m">Computer Science Tutoring</Heading>
                <Text onBackground="neutral-weak" variant="body-default-s">
                  Providing comprehensive computer science education for primary and secondary school students, specializing in visual programming and modern development tools to build foundational coding skills.
                </Text>
                <Text onBackground="neutral-weak" variant="body-default-s" paddingTop="8">
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
