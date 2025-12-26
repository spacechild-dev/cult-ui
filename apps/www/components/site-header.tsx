"use client";

import { usePathname } from "next/navigation";
import {
    Flex,
    Text,
    Row,
    NavIcon,
    Button,
    useTheme,
    ToggleButton,
    IconButton
} from "@once-ui-system/core";
import { docsConfig } from "@/config/docs";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import Link from "next/link";

export const SiteHeader = () => {
    const pathname = usePathname();
    const isActive = (path: string) => path === "/" ? pathname === "/" : pathname?.startsWith(path);

    return (
        <Flex
            style={{
                borderBottom: '1px solid var(--neutral-alpha-weak)',
                background: 'var(--neutral-background-medium)',
                backdropFilter: 'blur(12px)',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100
            }}
            fillWidth
            paddingX="24"
            paddingY="12"
            justifyContent="center"
        >
            <Flex maxWidth="m" fillWidth justifyContent="space-between" vertical="center">
                <Row vertical="center" gap="24">
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                        <Flex padding="8" radius="m" background="brand-alpha-weak">
                            <Icons.logo className="size-5 text-brand-strong" />
                        </Flex>
                        <Text variant="heading-strong-s" onBackground="neutral-strong">Dağkan</Text>
                    </Link>

                    <Row gap="12" hide="s">
                        {docsConfig.mainNav.map((item) => (
                            <Link 
                                key={item.href} 
                                href={item.href!}
                                style={{ 
                                    textDecoration: 'none',
                                    padding: '8px 12px',
                                    borderRadius: '8px',
                                    background: isActive(item.href!) ? 'var(--neutral-alpha-weak)' : 'transparent',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                <Text 
                                    variant="label-strong-s" 
                                    onBackground={isActive(item.href!) ? "brand-strong" : "neutral-weak"}
                                >
                                    {item.title}
                                </Text>
                            </Link>
                        ))}
                    </Row>
                </Row>

                <Row vertical="center" gap="8">
                    <Button
                        href={siteConfig.links.buyMeACoffee}
                        target="_blank"
                        variant="secondary"
                        size="s"
                        prefixIcon="rocket"
                    >
                        Support
                    </Button>
                </Row>
            </Flex>
        </Flex>
    );
};