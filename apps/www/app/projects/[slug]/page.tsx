import { notFound } from "next/navigation";
import { getAllProjects, getProject } from "@/lib/projects";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Image from "next/image";
import { components } from "@/components/blog-mdx-components";
import rehypePrettyCode from "rehype-pretty-code";
import { 
    Heading, 
    Text, 
    Column, 
    Flex, 
    Row, 
    Button, 
    Line, 
    Scroller,
    Background
} from "@once-ui-system/core";
import { Icons } from "@/components/icons";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: `${project.title} | Projects`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <Column fillWidth horizontal="center" paddingY="128" paddingX="l" style={{ minHeight: "100vh" }}>
      <Column maxWidth="m" fillWidth gap="64">
        {/* Back Link */}
        <Link href="/projects" style={{ textDecoration: 'none' }}>
            <Row vertical="center" gap="8">
                <Icons.logo className="size-4 rotate-180 text-neutral-weak" />
                <Text variant="label-strong-s" onBackground="neutral-weak">Back to Projects</Text>
            </Row>
        </Link>

        {/* Top Row: App Info & Featured Image */}
        <Row gap="48" vertical="center" wrap>
            <Column flex={1} gap="24" style={{ minWidth: '300px' }}>
                <Column gap="12">
                    <Heading variant="display-strong-m">{project.title}</Heading>
                    <Text variant="body-default-l" onBackground="neutral-weak">{project.description}</Text>
                </Column>
                <Flex gap="8" wrap>
                    {project.tags.map((tag) => (
                        <Flex key={tag} paddingX="8" paddingY="4" radius="m" background="neutral-alpha-weak">
                            <Text variant="code-default-xs">#{tag}</Text>
                        </Flex>
                    ))}
                </Flex>
                <Row gap="12">
                    <Button href={project.href} variant="primary" size="s" suffixIcon="chevronRight">Visit Live</Button>
                    <Button href={project.github} variant="secondary" size="s" prefixIcon="github">Source</Button>
                </Row>
            </Column>
            <Flex flex={1} style={{ minWidth: '300px' }}>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-neutral-alpha-weak shadow-xl">
                    {project.img ? (
                        <Image src={project.img} alt={project.title} fill className="object-cover" />
                    ) : (
                        <Flex fillWidth fillHeight background="surface" center>
                            <ShieldCheck className="size-16 text-emerald-500/20" />
                        </Flex>
                    )}
                </div>
            </Flex>
        </Row>

        {/* Key Features */}
        {project.keyFeatures && (
            <Column gap="24">
                <Heading variant="heading-strong-l">Key Features</Heading>
                <Line background="neutral-alpha-weak" />
                <Row gap="24" wrap>
                    {project.keyFeatures.map((feature, index) => (
                        <Flex key={index} flex="1 1 200px" padding="24" radius="l" background="surface" border="neutral-alpha-weak" gap="12" vertical="center">
                            <CheckCircle2 className="size-5 text-emerald-500 shrink-0" />
                            <Text variant="label-strong-s">{feature}</Text>
                        </Flex>
                    ))}
                </Row>
            </Column>
        )}

        {/* Detailed Description (MDX) */}
        <Column gap="24">
            <Heading variant="heading-strong-l">Detailed Overview</Heading>
            <Line background="neutral-alpha-weak" />
            <div className="prose prose-neutral dark:prose-invert max-w-none">
                <MDXRemote 
                    source={project.content} 
                    components={components}
                    options={{
                        mdxOptions: {
                            rehypePlugins: [[rehypePrettyCode, { theme: "github-dark" }]],
                        },
                    }}
                />
            </div>
        </Column>

        {/* App Screenshots Scroller */}
        <Column gap="24">
            <Heading variant="heading-strong-l">Screenshots</Heading>
            <Line background="neutral-alpha-weak" />
            <Scroller fillWidth gap="16" paddingBottom="12">
                {/* Real Screenshot */}
                {project.screenshots?.map((ss, i) => (
                    <div key={i} style={{ minWidth: '400px' }} className="relative aspect-[16/9] rounded-xl overflow-hidden border border-neutral-alpha-weak shadow-md">
                        <Image src={ss} alt="Screenshot" fill className="object-cover" />
                    </div>
                ))}
                {/* Placeholders */}
                {[1, 2, 3].map((_, i) => (
                    <Flex key={i} style={{ minWidth: '400px' }} aspect="16/9" background="surface" border="neutral-alpha-weak" radius="l" center>
                        <Text onBackground="neutral-faint">Screenshot Placeholder {i + 1}</Text>
                    </Flex>
                ))}
            </Scroller>
        </Column>
      </Column>
    </Column>
  );
}
