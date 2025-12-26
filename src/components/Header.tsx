"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    Flex,
    Text,
    Row,
    MegaMenu,
    Dialog,
    Button,
    Input,
    Textarea,
    IconButton,
    ToggleButton,
    Line
} from "@once-ui-system/core";
import { social } from "@/resources/once-ui.config";
import { FaCoffee } from "react-icons/fa";
import { Code } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export const Header = () => {
    const pathname = usePathname();
    const [isContactOpen, setIsContactOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('data-theme') as 'light' | 'dark';
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(isDark ? 'dark' : 'light');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('data-theme', newTheme);
    };

    return (
        <Flex
            as="header"
            fillWidth
            paddingTop="16"
            paddingX="24"
            horizontal="center"
            style={{
                position: 'fixed',
                top: 0,
                zIndex: 100,
                pointerEvents: 'none'
            }}
        >
            <Flex 
                fillWidth 
                horizontal="between" 
                vertical="center"
                paddingX="12"
                radius="full"
                style={{
                    background: 'var(--neutral-background-medium)',
                    backdropFilter: 'blur(16px)',
                    height: '48px',
                    width: 'fit-content',
                    minWidth: '480px',
                    border: '1px solid var(--neutral-alpha-weak)',
                    boxShadow: 'var(--shadow-elevation-dark-two)',
                    pointerEvents: 'auto'
                }}
            >
                <Row vertical="center" gap="12">
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <Flex padding="8" radius="full" background="brand-alpha-weak">
                            <Code size={16} className="text-brand-strong" />
                        </Flex>
                    </Link>

                    <MegaMenu
                        menuGroups={[
                            {
                                id: "home",
                                label: t("nav.home"),
                                href: "/"
                            },
                            {
                                id: "blog",
                                label: t("nav.blog"),
                                sections: [
                                    {
                                        title: t("nav.topics"),
                                        links: [
                                            {
                                                label: t("nav.allPosts"),
                                                href: "/blog",
                                                icon: "document",
                                                description: "Read everything",
                                            },
                                            {
                                                label: t("nav.digitalMarketing"),
                                                href: "/blog?tag=marketing",
                                                icon: "target",
                                                description: "Performance & Strategy",
                                            },
                                            {
                                                label: t("nav.tracking"),
                                                href: "/blog?tag=tracking",
                                                icon: "chart",
                                                description: "Analytics & Data",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                id: "projects",
                                label: t("nav.projects"),
                                sections: [
                                    {
                                        title: "Explore",
                                        links: [
                                            {
                                                label: "All Projects",
                                                href: "/projects",
                                                icon: "layers",
                                                description: "View all case studies",
                                            },
                                            {
                                                label: "Web Apps",
                                                href: "/projects?type=web",
                                                icon: "globe",
                                                description: "Next.js & React apps",
                                            },
                                            {
                                                label: "Docker Apps",
                                                href: "/projects?type=docker",
                                                icon: "cube",
                                                description: "Self-hosted solutions",
                                            },
                                            {
                                                label: "Chrome Apps",
                                                href: "/projects?type=chrome",
                                                icon: "puzzle",
                                                description: "Browser extensions",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                id: "career",
                                label: t("nav.career"),
                                sections: [
                                    {
                                        title: "Professional",
                                        links: [
                                            {
                                                label: t("nav.experience"),
                                                href: "/resume#experience",
                                                icon: "briefcase",
                                                description: "Work history",
                                            },
                                            {
                                                label: t("nav.certificates"),
                                                href: "/resume#certificates",
                                                icon: "book",
                                                description: "Skills & Badges",
                                            },
                                        ],
                                    },
                                ],
                            }
                        ]}
                    />
                </Row>

                <Row vertical="center" gap="8">
                    {/* Integrated Switcher Group */}
                    <Flex background="neutral-alpha-weak" radius="full" padding="2" vertical="center">
                        <ToggleButton
                            size="s"
                            selected={language === 'en'}
                            onClick={() => setLanguage('en')}
                        >
                            EN
                        </ToggleButton>
                        <ToggleButton
                            size="s"
                            selected={language === 'tr'}
                            onClick={() => setLanguage('tr')}
                        >
                            TR
                        </ToggleButton>
                        <Line vert background="neutral-alpha-medium" height="12" marginX="4" />
                        <IconButton
                            size="s"
                            variant="tertiary"
                            icon={theme === 'dark' ? 'sun' : 'moon'}
                            onClick={toggleTheme}
                        />
                    </Flex>

                    <Button 
                        variant="tertiary" 
                        size="s" 
                        onClick={() => setIsContactOpen(true)}
                        prefixIcon="mail"
                    >
                        <span className="hidden sm:inline">{t("nav.contact")}</span>
                    </Button>

                    <a 
                        href={social.buyMeACoffee} 
                        target="_blank" 
                        rel="noreferrer"
                        style={{
                            background: '#FFDD00',
                            color: 'black',
                            padding: '6px 12px',
                            borderRadius: '9999px',
                            fontSize: '9px',
                            fontWeight: 900,
                            textTransform: 'uppercase',
                            fontStyle: 'italic',
                            letterSpacing: '0.02em',
                            textDecoration: 'none',
                            boxShadow: '0 2px 8px 0 rgba(255, 221, 0, 0.2)',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        <Row vertical="center" gap="4">
                            <FaCoffee size={12} />
                            <span className="hidden sm:inline">{t("nav.support")}</span>
                        </Row>
                    </a>
                </Row>
            </Flex>

            <Dialog
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
                title="Get in Touch"
                description="Drop me a message and let's start a conversation."
                maxWidth="s"
            >
                <Flex direction="column" gap="16" padding="16">
                    <Input 
                        id="contact-email"
                        label="Email" 
                        placeholder="your@email.com" 
                        type="email"
                    />
                    <Textarea 
                        id="contact-message"
                        label="Message" 
                        placeholder="What's on your mind?" 
                    />
                    <Button variant="primary" fillWidth onClick={() => setIsContactOpen(false)}>
                        Send Message
                    </Button>
                </Flex>
            </Dialog>
        </Flex>
    );
};
