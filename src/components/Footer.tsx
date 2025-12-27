"use client";

import {
    Flex,
    Text,
    Row,
    Line
} from "@once-ui-system/core";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <Flex
            as="footer"
            fillWidth
            paddingTop="64"
            paddingBottom="32"
            paddingX="l"
            horizontal="center"
        >
            <Flex maxWidth="s" fillWidth direction="column" gap="16" horizontal="center">
                <Line background="neutral-alpha-weak" />
                <Row fillWidth horizontal="between" vertical="center" wrap gap="16">
                    <Text variant="body-default-xs" onBackground="neutral-weak">
                        © {currentYear} Dağkan Bayramoğlu
                    </Text>
                    <Flex gap="16" vertical="center">
                        <Link href="/privacy" style={{ textDecoration: 'none' }}>
                            <Text variant="body-default-xs" onBackground="neutral-weak" className="hover-highlight">
                                {t("privacy.title")}
                            </Text>
                        </Link>
                    </Flex>
                </Row>
            </Flex>
        </Flex>
    );
};
