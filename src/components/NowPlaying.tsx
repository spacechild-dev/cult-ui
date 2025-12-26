"use client";

import React, { useEffect, useState } from "react";
import { Flex, Text, Heading, Row, Icon } from "@once-ui-system/core";
import { SiLastdotfm } from "react-icons/si";
import { motion } from "framer-motion";

interface Track {
    name: string;
    artist: { '#text': string };
    image: { '#text': string }[];
    '@attr'?: { nowplaying: string };
}

export const NowPlaying = () => {
    const [track, setTrack] = useState<Track | null>(null);
    const apiKey = 'b196b523ff00d1b3803ae66c3d5d2da5';
    const user = 'dagkan';
    const profileUrl = "https://www.last.fm/user/dagkan";

    const fetchNowPlaying = () => {
        const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${apiKey}&format=json&limit=1`;
        fetch(url)
            .then(r => r.json())
            .then(data => {
                if (!data.recenttracks) return;
                const latestTrack = data.recenttracks.track[0];
                if (latestTrack && latestTrack['@attr'] && latestTrack['@attr'].nowplaying) {
                    setTrack(latestTrack);
                } else {
                    setTrack(null);
                }
            })
            .catch(() => setTrack(null));
    };

    useEffect(() => {
        fetchNowPlaying();
        const interval = setInterval(fetchNowPlaying, 10000);
        return () => clearInterval(interval);
    }, []);

    if (!track) return null;

    const cover = track.image.slice().reverse().find(img => img['#text'])?.['#text'] || 'https://placehold.co/74x74?text=♫';

    return (
        <Flex
            fillWidth
            style={{
                maxWidth: '400px', // Optimized width
                backdropFilter: 'blur(12px)',
                boxShadow: 'var(--shadow-elevation-dark-two)',
                transition: 'all 0.3s ease',
            }}
            padding="12"
            radius="l"
            background="surface"
            border="neutral-alpha-weak"
        >
            <Row fillWidth vertical="center" gap="16">
                <Flex
                    style={{
                        width: '56px',
                        height: '56px',
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: '8px',
                        flexShrink: 0,
                        border: '1px solid var(--neutral-alpha-weak)'
                    }}
                >
                    <img 
                        src={cover} 
                        alt="Album Cover" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </Flex>

                <Flex direction="column" gap="4" style={{ minWidth: 0, flex: 1, overflow: 'hidden' }}>
                    <Text variant="code-default-xs" onBackground="brand-strong" style={{ letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.8 }}>
                        Now Playing
                    </Text>
                    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
                        {track.name.length > 25 ? (
                            <motion.div
                                animate={{ x: [0, -100, 0] }}
                                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                style={{ display: 'inline-block', paddingRight: '20px' }}
                            >
                                <Heading variant="heading-strong-s">{track.name}</Heading>
                            </motion.div>
                        ) : (
                            <Heading variant="heading-strong-s">{track.name}</Heading>
                        )}
                    </div>
                    <Text variant="body-default-xs" onBackground="neutral-weak" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {track.artist['#text']}
                    </Text>
                </Flex>

                <a href={profileUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Flex padding="8" radius="full" background="brand-alpha-weak">
                        <SiLastdotfm className="text-brand-strong" size={18} />
                    </Flex>
                </a>
            </Row>
        </Flex>
    );
};
