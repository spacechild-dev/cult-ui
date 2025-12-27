"use client";

import React, { useState } from "react";
import {
  Heading,
  Text,
  Column,
  Flex,
  Line,
  IconButton
} from "@once-ui-system/core";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function PrivacyPage() {
  const { t } = useLanguage();
  const [isAudioLiftOpen, setIsAudioLiftOpen] = useState(false);

  return (
    <Column fillWidth horizontal="center" paddingY="128" paddingX="l" style={{ minHeight: "100vh" }}>
      <Column maxWidth="s" fillWidth gap="48">
        {/* Header */}
        <Column gap="16">
          <Heading variant="display-strong-s">{t("privacy.title")}</Heading>
          <Line background="neutral-alpha-weak" />
        </Column>

        {/* General Privacy */}
        <Column gap="16">
          <Heading variant="heading-strong-l">{t("privacy.generalTitle")}</Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            {t("privacy.generalContent")}
          </Text>
        </Column>

        {/* AudioLift Accordion */}
        <Column gap="8" background="surface" radius="l" border="neutral-alpha-weak" padding="24">
          <Flex vertical="center" horizontal="between" cursor="pointer" onClick={() => setIsAudioLiftOpen(!isAudioLiftOpen)}>
            <Heading variant="heading-strong-m">{t("privacy.audioLiftTitle")}</Heading>
            <IconButton
              icon={isAudioLiftOpen ? "chevronUp" : "chevronDown"}
              variant="tertiary"
              size="s"
            />
          </Flex>
          {isAudioLiftOpen && (
            <Column gap="16" marginTop="16">
              <Text variant="body-default-m" onBackground="neutral-weak">
                {t("privacy.audioLiftContent")}
              </Text>
              <Link href="/privacy/audiolift" style={{ textDecoration: 'none' }}>
                <Text variant="label-strong-s" onBackground="brand-weak">
                  View dedicated AudioLift Privacy Page →
                </Text>
              </Link>
            </Column>
          )}
        </Column>
      </Column>
    </Column>
  );
}
