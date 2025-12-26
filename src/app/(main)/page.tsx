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

export default function Home() {
  return (
    <Column fillWidth horizontal="center" paddingY="160" paddingX="l" style={{ minHeight: "100vh" }}>
      {/* Hero Section */}
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
              <LetterFx trigger="instant">Performance Marketing & Tracking</LetterFx>
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
                Bu siteyi hem kişisel merakım hem de mesleki ilgim doğrultusunda oluşturdum. Veriye dayalı performans pazarlama, pazarlama analitiği ve iç görüleri, performans ölçümlemesi ve pazarlama teknolojilerini deneyimlemeyi seviyorum -zaten işim de bu-. İroniktir ama veriye dayalı stratejileri bütünsel stratejilerle de dengelerim.
            </Text>

            <Text
                variant="body-default-l"
                onBackground="neutral-weak"
                wrap="balance"
                align="center"
            >
                Bu site üzerinde Google Tag Manager, Google Analytics 4, server side GTM, Facebook CAPI, çevrimdışı dönüşümler gibi birçok şeyi test ediyorum. Aslında zırt pırt güncellediğim için muhtemelen bozulmuşlardır ve düzeltmeye üşeniyorumdur. Yine de çerezleri kabul ederseniz (tabi bu da bozulmadıysa) çok sevinirim; böylece denemelerim daha sağlıklı sonuçlar verebilir.
            </Text>

            <Flex direction="column" horizontal="center" gap="12">
                <Text
                    variant="body-default-l"
                    onBackground="neutral-strong"
                    wrap="balance"
                    align="center"
                    weight="bold"
                >
                    Son olarak; algoritmalar değişiyor, kafalar karışıyor. Birlikte çözüm arayalım.
                </Text>
                <Button href="https://linkedin.com/in/dagkanbayramoglu/" variant="tertiary" size="m" suffixIcon="chevronRight">
                    Sohbete Katıl
                </Button>
            </Flex>
        </Column>

        <NowPlaying />
        
        <Flex gap="12" wrap horizontal="center" marginTop="48">
          <Button href={social.github} variant="secondary" size="s">
            <Flex gap="8" vertical="center"><FaGithub /> GitHub</Flex>
          </Button>
          <Button href={social.linkedin} variant="secondary" size="s">
            <Flex gap="8" vertical="center"><FaLinkedin /> LinkedIn</Flex>
          </Button>
          <Button href={social.spotify} variant="secondary" size="s">
            <Flex gap="8" vertical="center"><FaSpotify /> Spotify</Flex>
          </Button>
          <Button href={social.lastfm} variant="secondary" size="s">
            <Flex gap="8" vertical="center"><SiLastdotfm /> Last.fm</Flex>
          </Button>
          <Button href="mailto:hello@dagkanbayramoglu.com" variant="primary" size="s">
            <Flex gap="8" vertical="center"><FaEnvelope /> Mail Me</Flex>
          </Button>
        </Flex>
      </Column>
    </Column>
  );
}
