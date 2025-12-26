import React from "react";
import Link from "next/link";
import {
  Heading,
  Text,
  Button,
  Column,
  Badge,
  Flex,
  LetterFx,
} from "@once-ui-system/core";
import { getAllBlogPosts } from "@/lib/blog";
import { getAllProjects } from "@/lib/projects";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { ShieldCheck } from "lucide-react";

export default function HomePage() {
  const recentPosts = getAllBlogPosts().slice(0, 3);
  const projects = getAllProjects().slice(0, 2);

  return (
    <Column fillWidth horizontal="center" paddingY="128" paddingX="l" style={{ minHeight: "100vh" }}>
      {/* Hero Section */}
      <Column maxWidth="m" horizontal="center" gap="l" align="center" marginBottom="64">
        <Badge
          textVariant="code-default-s"
          border="neutral-alpha-medium"
          onBackground="neutral-medium"
          vertical="center"
          gap="16"
        >
          <Flex vertical="center" gap="8">
            <Icons.gitHub className="size-4" />
            <Text marginX="4">
              <LetterFx trigger="instant">Open Source Explorer</LetterFx>
            </Text>
          </Flex>
        </Badge>
        <Heading variant="display-strong-xl" align="center" marginTop="24">
          Dağkan
        </Heading>
        <Text
          variant="heading-default-xl"
          onBackground="neutral-weak"
          wrap="balance"
          align="center"
          marginBottom="16"
        >
          I’m Dağkan. I love exploring and experimenting with data-driven performance marketing, analytics, and martech.
        </Text>
        
        <Flex gap="12" wrap>
          <Button href={siteConfig.links.github} variant="secondary" size="s" prefixIcon="github">
            GitHub
          </Button>
          <Button href="https://linkedin.com/in/dagkanbayramoglu" variant="secondary" size="s">
            LinkedIn
          </Button>
          <Button href="mailto:hello@dagkanbayramoglu.com" variant="primary" size="s">
            Mail Me
          </Button>
        </Flex>
      </Column>

      {/* Blog Section */}
      <Column maxWidth="m" fillWidth gap="m" marginBottom="64">
        <Flex fillWidth justifyContent="space-between" vertical="center" marginBottom="24">
          <Heading variant="display-strong-xs">Recent Writing</Heading>
          <Button href="/blog" variant="tertiary" size="s" suffixIcon="chevronRight">View All</Button>
        </Flex>

        <Flex direction="column" gap="16">
          {recentPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', width: '100%' }}>
              <Flex 
                fillWidth 
                padding="24" 
                radius="l" 
                background="surface" 
                border="neutral-alpha-weak" 
                direction="column" 
                gap="8"
                style={{ transition: 'all 0.2s ease' }}
              >
                <Text variant="code-default-s" onBackground="neutral-weak">
                  {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </Text>
                <Heading variant="heading-strong-m">{post.title}</Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">{post.description}</Text>
              </Flex>
            </Link>
          ))}
        </Flex>
      </Column>

      {/* Projects Section */}
      <Column maxWidth="m" fillWidth gap="m">
        <Flex fillWidth justifyContent="space-between" vertical="center" marginBottom="24">
          <Heading variant="display-strong-xs">Featured Projects</Heading>
          <Button href="/projects" variant="tertiary" size="s" suffixIcon="chevronRight">All Projects</Button>
        </Flex>

        <Flex gap="24" wrap>
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} style={{ textDecoration: 'none', flex: '1 1 300px' }}>
              <Flex 
                direction="column" 
                padding="24" 
                radius="l" 
                background="surface" 
                border="neutral-alpha-weak" 
                gap="16"
                style={{ height: '100%' }}
              >
                <Flex vertical="center" gap="12">
                  <div style={{ padding: '8px', borderRadius: '8px', background: 'var(--neutral-alpha-weak)' }}>
                    {project.slug === 'spotify-mixtapekit' ? <Icons.spotify className="size-5 text-green-500" /> : <ShieldCheck className="size-5 text-emerald-500" />}
                  </div>
                  <Heading variant="heading-strong-s">{project.title}</Heading>
                </Flex>
                <Text variant="body-default-s" onBackground="neutral-weak">{project.description}</Text>
              </Flex>
            </Link>
          ))}
        </Flex>
      </Column>
    </Column>
  );
}