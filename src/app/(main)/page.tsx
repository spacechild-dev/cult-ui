"use client";

import React from "react";
import {
  Heading,
  Text,
  Button,
  Column,
  Badge,
  Flex,
  LetterFx,
} from "@once-ui-system/core";
import { social } from "@/resources/once-ui.config";
import { FaGithub, FaLinkedin, FaSpotify, FaEnvelope } from "react-icons/fa";
import { SiLastdotfm } from "react-icons/si";
import { NowPlaying } from "@/components/NowPlaying";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t, language } = useLanguage();

  const posts = [
    {
      title: language === "tr" ? "UTM & ClickID Takibi: Parametreleri Tarayıcıda Saklama Rehberi" : "UTM & ClickID Tracking: A Guide to Storing Parameters in the Browser",
      description: language === "tr" ? "UTM parametrelerini ve Click ID'leri localStorage/sessionStorage üzerinde saklayarak dijital pazarlama analizlerinizi nasıl iyileştirebileceğinizi öğrenin." : "Learn how to capture and store UTM parameters and Click IDs in local and session storage to maintain tracking data across user sessions.",
      date: "2024-07-05",
      slug: "utm-parameters-and-tracking",
      tags: ["marketing", "analytics", "tracking"]
    }
  ];

  return (
    <Column fillWidth horizontal="center">
      {/* Hero Section - 80% Height */}
      <Column 
        fillWidth 
        horizontal="center" 
        vertical="center" 
        paddingX="l" 
        style={{ minHeight: "80vh" }}
      >
        <Column maxWidth="s" horizontal="center" gap="l" align="center">
          <Badge
            textVariant="code-default-s"
            border="neutral-alpha-medium"
            onBackground="neutral-medium"
            vertical="center"
            gap="16"
          >
            <Flex vertical="center" gap="8">
              <FaGithub size={14} />
              <Text marginX="4">
                <LetterFx trigger="instant">{t("home.badge")}</LetterFx>
              </Text>
            </Flex>
          </Badge>

          <Column gap="24" horizontal="center" marginTop="24">
              <Text
                  variant="body-default-xl"
                  onBackground="neutral-weak"
                  wrap="balance"
                  align="center"
              >
                  {t("home.bio1")}
              </Text>
              <Text
                  variant="body-default-l"
                  onBackground="neutral-weak"
                  wrap="balance"
                  align="center"
              >
                  {t("home.bio2")}
              </Text>
          </Column>

          {/* Last.fm Widgets Comparison */}
          <Column gap="12" fillWidth marginTop="32">
            <Text variant="label-default-xs" onBackground="neutral-weak" align="center">Last.fm Modül Alternatifleri (Öneri: Orta/Medium)</Text>
            
            <Flex direction="column" gap="16" fillWidth horizontal="center">
                {/* Compact Variant */}
                <Column gap="8" fillWidth horizontal="center">
                    <Text variant="code-default-xs" onBackground="neutral-weak">Kompakt (24px):</Text>
                    <NowPlaying variant="compact" />
                </Column>

                {/* Medium Variant */}
                <Column gap="8" fillWidth horizontal="center">
                    <Text variant="code-default-xs" onBackground="neutral-weak">Orta (44px - YENİ):</Text>
                    <NowPlaying variant="medium" />
                </Column>

                {/* Default Variant */}
                <Column gap="8" fillWidth>
                    <Text variant="code-default-xs" onBackground="neutral-weak">Geniş (64px):</Text>
                    <NowPlaying variant="default" />
                </Column>
            </Flex>
          </Column>
          
          <Flex gap="12" wrap horizontal="center" marginTop="48">
            <Button href={social.github} variant="secondary" size="s">
              <Flex gap="8" vertical="center"><FaGithub /> GitHub</Flex>
            </Button>
            <Button href={social.linkedin} variant="secondary" size="s">
              <Flex gap="8" vertical="center"><FaLinkedin /> LinkedIn</Flex>
            </Button>
            <Button href="mailto:hello@dagkanbayramoglu.com" variant="primary" size="s">
              <Flex gap="8" vertical="center"><FaEnvelope /> Mail Me</Flex>
            </Button>
          </Flex>
        </Column>
      </Column>

      {/* Blog Section */}
      <Column fillWidth horizontal="center" paddingY="128" paddingX="l" background="surface">
        <Column maxWidth="s" fillWidth gap="m">
            <Flex fillWidth horizontal="between" vertical="center" marginBottom="32">
                <Heading variant="display-strong-xs">{t("home.recent")}</Heading>
                <Button href="/blog" variant="tertiary" size="s" suffixIcon="chevronRight">{t("home.viewAll")}</Button>
            </Flex>

            <Flex direction="column" gap="16">
                {posts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', width: '100%' }}>
                        <Flex 
                            fillWidth 
                            padding="24" 
                            radius="l" 
                            background="page" 
                            border="neutral-alpha-weak" 
                            direction="column" 
                            gap="8"
                            style={{ transition: 'all 0.2s ease' }}
                        >
                            <Text variant="code-default-s" onBackground="neutral-weak">{post.date}</Text>
                            <Heading variant="heading-strong-m">{post.title}</Heading>
                            <Text variant="body-default-m" onBackground="neutral-weak">{post.description}</Text>
                        </Flex>
                    </Link>
                ))}
            </Flex>
        </Column>
      </Column>
    </Column>
  );
}