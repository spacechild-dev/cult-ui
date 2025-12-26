"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    Flex,
    Text,
    Row,
    Button,
    NavIcon,
} from "@once-ui-system/core";
import { docsConfig } from "@/config/docs";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Code } from "lucide-react";

export const SiteHeader = () => {
    const pathname = usePathname();
    const isActive = (path: string) => path === "/" ? pathname === "/" : pathname?.startsWith(path);

    return (
        <Flex
            as="header"
            fillWidth
            paddingX="24"
            paddingY="16"
            justifyContent="center"
            style={{
                position: 'fixed',
                top: 0,
                zIndex: 100,
                background: 'var(--page-background)',
                borderBottom: '1px solid var(--neutral-alpha-weak)',
                backdropFilter: 'blur(8px)'
            }}
        >
            <Flex maxWidth="m" fillWidth justifyContent="space-between" vertical="center">
                <Row vertical="center" gap="32">
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                        <Flex padding="8" radius="m" background="brand-alpha-weak" border="brand-alpha-weak">
                            <Code className="size-5 text-brand-strong" />
                        </Flex>
                        <Text variant="heading-strong-s" onBackground="neutral-strong">Dağkan</Text>
                    </Link>

                    <Row gap="8" hide="s">
                        {docsConfig.mainNav.map((item) => (
                            <Link 
                                key={item.href} 
                                href={item.href!}
                                style={{ 
                                    textDecoration: 'none',
                                    padding: '8px 16px',
                                    borderRadius: '12px',
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

                <Row vertical="center" gap="12">
                    <Button
                        href={siteConfig.links.buyMeACoffee}
                        target="_blank"
                        variant="secondary"
                        size="s"
                        weight="strong"
                    >
                        Support
                    </Button>
                </Row>
            </Flex>
        </Flex>
    );
};