"use client";

import React from "react";
import {
  Heading,
  Text,
  Column,
  Line,
  Button
} from "@once-ui-system/core";
import { useLanguage } from "@/context/LanguageContext";

export default function AudioLiftPrivacyPage() {
  const { t } = useLanguage();

  return (
    <Column fillWidth horizontal="center" paddingY="128" paddingX="l" style={{ minHeight: "100vh" }}>
      <Column maxWidth="s" fillWidth gap="48">
        {/* Header */}
        <Column gap="16">
          <Button href="/privacy" variant="tertiary" size="s" prefixIcon="chevronLeft">
            Back to Privacy Policy
          </Button>
          <Heading variant="display-strong-s">{t("privacy.audioLiftTitle")}</Heading>
          <Line background="neutral-alpha-weak" />
        </Column>

        {/* Content */}
        <Column gap="16">
          <Text variant="body-default-m" onBackground="neutral-weak">
            {t("privacy.audioLiftContent")}
          </Text>
        </Column>

        <Column gap="16" marginTop="32">
          <Heading variant="heading-strong-m">Technical Implementation</Heading>
          <Text variant="body-default-s" onBackground="neutral-weak">
            The extension leverages the browser's built-in Web Audio API. When you enable an effect, AudioLift creates a processing node within your browser's audio graph. This allows for real-time manipulation of audio data without ever needing to send that data to a remote server.
          </Text>
          <Text variant="body-default-s" onBackground="neutral-weak" marginTop="8">
            Storage of your preferences is handled by <code>chrome.storage.local</code>, which is a key-value pair storage system provided by Chrome that stays strictly on your local machine.
          </Text>
        </Column>
      </Column>
    </Column>
  );
}
