'use client';

import { Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Network from '@/lib/Netwrok';
import instId from '@/constant/instId';
import Endpoints from '@/constant/endpoints';

const GREEN = '#00382b';
const YELLOW = '#ffc800';
const DARK_GREEN = '#00523f';
const INK = '#173f34';

const Eyebrow = ({ children, sx = {} }) => (
    <Box
        sx={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            fontSize: '11px',
            letterSpacing: '2px',
            fontWeight: 800,
            textTransform: 'uppercase',
            color: '#53786a',
            '&::before': { content: '""', width: '23px', height: '3px', background: YELLOW },
            ...sx,
        }}
    >
        {children}
    </Box>
);

const FacultyPortrait = () => (
    <svg viewBox="0 0 200 220" aria-hidden="true" style={{ height: '210px', width: '200px', position: 'relative' }}>
        <path d="M27 220v-27c0-40 31-65 73-65s73 25 73 65v27" fill="#b3c9bb" />
        <ellipse cx="100" cy="81" rx="39" ry="47" fill="#ccdbd0" />
        <path d="M61 78c-7-37 10-60 39-60s48 23 39 60c-8-15-15-32-20-35-15 14-35 18-58 16" fill="#9ab5a4" />
        <path d="m77 136 23 26 23-26-9 84H86Z" fill="#eef4ef" />
        <path d="m77 136 23 26-22 18-16-32Zm46 0-23 26 22 18 16-32Z" fill="#8fab99" />
    </svg>
);

const AcademicArt = () => (
    <Box
        aria-hidden="true"
        sx={{
            width: { xs: '135px', md: '350px' },
            minWidth: { xs: '100px', md: 'auto' },
            height: { xs: '140px', md: '165px' },
            position: 'relative',
            color: '#60917c',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Box component="span" sx={{ position: 'absolute', color: '#719682', opacity: 0.5, fontSize: '21px', fontWeight: 600, left: '5px', top: '22px', transform: 'rotate(-9deg)', display: { xs: 'none', md: 'block' } }}>
            E = mc²
        </Box>
        <Box component="span" sx={{ position: 'absolute', color: '#719682', opacity: 0.5, fontSize: '21px', fontWeight: 600, right: '12px', top: '17px', transform: 'rotate(8deg)', display: { xs: 'none', md: 'block' } }}>
            ƒ(x)
        </Box>
        <Box component="span" sx={{ position: 'absolute', color: '#719682', opacity: 0.5, fontSize: '35px', fontWeight: 600, right: '21px', bottom: '42px', display: { xs: 'none', md: 'block' } }}>
            ∑
        </Box>
        <svg viewBox="0 0 180 140" style={{ height: '145px', width: '185px', opacity: 0.55 }}>
            <g fill="none" stroke="currentColor" strokeWidth="1.3">
                <ellipse cx="90" cy="70" rx="65" ry="24" />
                <ellipse cx="90" cy="70" rx="65" ry="24" transform="rotate(60 90 70)" />
                <ellipse cx="90" cy="70" rx="65" ry="24" transform="rotate(120 90 70)" />
            </g>
            <circle cx="90" cy="70" r="6" fill="#ffc800" />
        </svg>
        <Box
            sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                display: { xs: 'none', md: 'flex' },
                gap: '12px',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '9px',
                letterSpacing: '1.7px',
                fontWeight: 700,
                color: '#446d59',
            }}
        >
            IIT-JEE <i style={{ height: '4px', width: '4px', borderRadius: '50%', background: '#d4aa00', display: 'inline-block' }} /> NEET <i style={{ height: '4px', width: '4px', borderRadius: '50%', background: '#d4aa00', display: 'inline-block' }} /> FOUNDATION
        </Box>
    </Box>
);

const OurFacultySection = () => {
    const [selected, setSelected] = useState('All Faculty');
    const [search, setSearch] = useState('');
    const [employees, setEmployees] = useState([]);
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await Network.fetchEmployee(instId.instId);
                setEmployees(response?.employees || []);
                setGroups(response?.groups || []);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        fetchEmployee();
    }, []);

    const subjects = ['All Faculty', ...groups];

    const faculty = employees.map((emp) => ({
        subject: emp?.group || 'Faculty',
        name: [emp?.firstName, emp?.lastName].filter(Boolean).join(' ') || 'Faculty Name',
        qualification: emp?.designation || 'Faculty Member',
    }));

    const filtered = faculty.filter(
        (f) =>
            (selected === 'All Faculty' || f.subject === selected) &&
            `${f.name} ${f.subject}`.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Box sx={{ background: '#ffffff', minHeight: '100vh', color: INK }}>
            {/* Hero */}
            <Box sx={{ background: 'linear-gradient(110deg, #f4f9f6 55%, #ebf4ec)', borderBottom: '1px solid #e8eee9', overflow: 'hidden' }}>
                <Box sx={{ maxWidth: '1184px', mx: 'auto', px: { xs: '20px', md: '28px' } }}>
                    {/* Breadcrumb */}
                    <Box sx={{ fontSize: { xs: '10px', md: '11px' }, color: '#71837b', pt: { xs: '20px', md: '22px' } }}>
                        <Box component="a" href="/" sx={{ color: 'inherit', textDecoration: 'none' }}>
                            Home
                        </Box>
                        &nbsp; / &nbsp;
                        <Box component="a" href="/about" sx={{ color: 'inherit', textDecoration: 'none' }}>
                            About Aurous
                        </Box>
                        &nbsp; / &nbsp;
                        <Box component="b" sx={{ color: GREEN }}>
                            Our Faculty
                        </Box>
                    </Box>

                    {/* Banner */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            minHeight: { xs: '190px', md: '230px' },
                            py: { xs: '30px 0', md: '34px 0 40px' },
                            gap: { xs: '10px', md: '30px' },
                        }}
                    >
                        <Box>
                            <Eyebrow sx={{ fontSize: { xs: '8px', md: '10px' }, letterSpacing: { xs: '1.5px', md: '2.5px' }, '&::before': { content: '""', width: { xs: '15px', md: '23px' }, height: '3px', background: YELLOW } }}>
                                Aurous Academy
                            </Eyebrow>
                            <Typography
                                component="h1"
                                sx={{
                                    fontSize: { xs: '32px', md: '44px' },
                                    lineHeight: 1.2,
                                    letterSpacing: '-1.5px',
                                    color: GREEN,
                                    margin: '12px 0 10px',
                                    maxWidth: { xs: '250px', md: 'none' },
                                }}
                            >
                                Our Faculty{' '}
                                <Box
                                    component="span"
                                    sx={{
                                        position: 'relative',
                                        zIndex: 1,
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: '-5px',
                                            left: 0,
                                            width: '100%',
                                            height: '5px',
                                            background: YELLOW,
                                            borderRadius: '2px',
                                            zIndex: -1,
                                        },
                                    }}
                                >
                                    Team
                                </Box>
                            </Typography>
                            <Typography sx={{ margin: '16px 0 0', fontSize: { xs: '12px', md: '14px' }, color: '#6a7e74', maxWidth: { xs: '210px', md: 'none' } }}>
                                The mentors behind every milestone.
                            </Typography>
                        </Box>

                        <AcademicArt />
                    </Box>
                </Box>
            </Box>

            {/* Directory */}
            <Box sx={{ maxWidth: '1184px', mx: 'auto', px: { xs: '20px', md: '28px' }, py: { xs: '35px 0', md: '38px 0 60px' } }}>
                <Box sx={{ display: { xs: 'block', md: 'flex' }, justifyContent: 'space-between', alignItems: 'flex-end', gap: '24px' }}>
                    <Box>
                        <Eyebrow>Our academic team</Eyebrow>
                        <Typography component="h2" sx={{ fontSize: '27px', letterSpacing: '-1px', margin: '8px 0', color: GREEN }}>
                            Meet your mentors
                        </Typography>
                        <Typography sx={{ margin: '7px 0', fontSize: '14px', color: '#6a7e74' }}>
                            Explore our faculty by subject.
                        </Typography>
                    </Box>
                    <Box
                        component="input"
                        type="search"
                        placeholder="Search faculty or subject…"
                        aria-label="Search faculty or subject"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        sx={{
                            border: '1px solid #dae4dd',
                            borderRadius: '7px',
                            padding: '13px 16px',
                            minWidth: { xs: '100%', md: '245px' },
                            outlineColor: '#00523f',
                            fontSize: '14px',
                            color: INK,
                            background: '#fff',
                            mt: { xs: '15px', md: 0 },
                            fontFamily: 'inherit',
                        }}
                    />
                </Box>

                {/* Toolbar */}
                <Box
                    sx={{
                        display: 'flex',
                        gap: '9px',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        margin: { xs: '20px 0 23px', md: '23px 0 23px' },
                        paddingBottom: '23px',
                        borderBottom: '1px solid #e6ece8',
                    }}
                >
                    {subjects.map((s) => (
                        <Box
                            key={s}
                            component="button"
                            type="button"
                            onClick={() => setSelected(s)}
                            sx={{
                                border: '1px solid #dae4dd',
                                background: selected === s ? DARK_GREEN : '#ffffff',
                                color: selected === s ? '#ffffff' : '#597066',
                                borderColor: selected === s ? DARK_GREEN : '#dae4dd',
                                padding: { xs: '10px 13px', md: '11px 20px' },
                                borderRadius: '6px',
                                fontSize: '12px',
                                fontWeight: 600,
                                cursor: 'pointer',
                                fontFamily: 'inherit',
                            }}
                        >
                            {s}
                        </Box>
                    ))}
                    <Box component="span" sx={{ ml: 'auto', fontSize: '11px', color: '#84958c', width: { xs: '100%', md: 'auto' }, mt: { xs: '8px', md: 0 } }}>
                        {filtered.length} faculty members
                    </Box>
                </Box>

                {/* Grid */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' },
                        gap: { xs: '13px', md: '23px' },
                    }}
                >
                    {filtered.length > 0 ? (
                        filtered.map((f, i) => (
                            <Box
                                key={i}
                                sx={{
                                    border: '1px solid #e2eae4',
                                    borderRadius: '11px',
                                    overflow: 'hidden',
                                    background: '#fff',
                                    transition: 'transform .2s, box-shadow .2s',
                                    '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 12px 30px rgba(0, 56, 43, 0.07)' },
                                }}
                            >
                                {/* Portrait */}
                                <Box
                                    sx={{
                                        height: { xs: '185px', md: '230px' },
                                        background: '#edf3ef',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                        justifyContent: 'center',
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            width: '180px',
                                            height: '180px',
                                            border: '1px solid #d7e3da',
                                            borderRadius: '50%',
                                            top: '22px',
                                        },
                                    }}
                                >
                                    <Box component="span" sx={{ position: 'absolute', top: '13px', left: '13px', fontSize: '9px', letterSpacing: '1px', fontWeight: 800, color: DARK_GREEN }}>
                                        AUROUS ACADEMY
                                    </Box>
                                    {
                                        f.profile !== null ? <FacultyPortrait /> :
                                            <img
                                                alt=''
                                                src={Endpoints.mediaBaseUrl + f.profile}
                                            />
                                    }
                                    {
                                        f.profile !== null && (
                                            <Box component="span" sx={{ position: 'absolute', bottom: '12px', left: '12px', background: 'rgba(255,255,255,0.87)', padding: '4px 8px', borderRadius: '3px', fontSize: '9px', color: '#71867a' }}>
                                                PHOTO PLACEHOLDER
                                            </Box>
                                        )
                                    }
                                </Box>

                                {/* Info */}
                                <Box sx={{ padding: { xs: '14px', md: '20px' } }}>
                                    <Box component="span" sx={{ fontSize: '10px', color: '#61816f', textTransform: 'uppercase', letterSpacing: '1.4px', fontWeight: 800 }}>
                                        {f.subject}
                                    </Box>
                                    <Typography component="h3" sx={{ fontSize: { xs: '15px', md: '18px' }, margin: '8px 0 5px', color: GREEN }}>
                                        {f.name}
                                    </Typography>
                                    {/* <Typography sx={{ fontSize: '11px', color: '#6a7e74', m: 0 }}>{f.qualification}</Typography> */}
                                </Box>
                            </Box>
                        ))
                    ) : (
                        <Box sx={{ gridColumn: '1/-1', textAlign: 'center', padding: '40px', color: '#6a7e74', fontSize: '14px' }}>
                            {loading ? 'Loading faculty…' : 'No matching faculty. Try another subject.'}
                        </Box>
                    )}
                </Box>

                {/* Note */}
                <Box sx={{ fontSize: '11px', background: '#f9faf7', borderLeft: '3px solid #ffc800', padding: '12px 16px', mt: '25px', color: '#788579' }}>
                    Design preview · Faculty names, photographs and qualifications are placeholders awaiting approved Aurous team details.
                </Box>
            </Box>

            {/* Approach */}
            <Box sx={{ background: '#f4f9f6', py: '45px' }}>
                <Box
                    sx={{
                        maxWidth: '1184px',
                        mx: 'auto',
                        px: { xs: '20px', md: '28px' },
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr 1fr', md: '1.1fr 1fr 1fr 1fr' },
                        gap: { xs: '24px', md: '35px' },
                    }}
                >
                    <Box sx={{ gridColumn: { xs: '1/-1', md: 'auto' } }}>
                        <Eyebrow>Beyond the classroom</Eyebrow>
                        <Typography component="h2" sx={{ fontSize: '25px', margin: '9px 0', color: GREEN }}>
                            Guidance at
                            <br />
                            every step.
                        </Typography>
                    </Box>
                    {[
                        { num: '01 /', title: 'Concepts made clear', desc: 'A space for understanding the why behind every answer.' },
                        { num: '02 /', title: 'Questions welcomed', desc: 'Make room for curiosity, discussion and deeper learning.' },
                        { num: '03 /', title: 'Preparation with purpose', desc: 'Connect classroom learning with your academic goals.' },
                    ].map((s) => (
                        <Box key={s.num}>
                            <Box component="span" sx={{ color: '#a7bcb0', fontSize: '12px' }}>
                                {s.num}
                            </Box>
                            <Typography component="h3" sx={{ fontSize: '14px', margin: '12px 0 5px', color: GREEN }}>
                                {s.title}
                            </Typography>
                            <Typography sx={{ fontSize: '12px', color: '#6a7e74', m: 0 }}>{s.desc}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* CTA */}
            <Box sx={{ maxWidth: '1184px', mx: 'auto', px: { xs: '20px', md: '28px' } }}>
                <Box
                    sx={{
                        margin: { xs: '30px 0', md: '48px auto' },
                        background: DARK_GREEN,
                        borderRadius: '12px',
                        padding: { xs: '25px', md: '30px 35px' },
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: { xs: 'stretch', md: 'center' },
                        justifyContent: 'space-between',
                        gap: '25px',
                        color: '#fff',
                    }}
                >
                    <Box>
                        <Typography component="h2" sx={{ fontSize: '24px', margin: '0 0 8px', color: '#fff' }}>
                            Your next chapter starts here.
                        </Typography>
                        <Typography sx={{ color: '#c5d8ce', margin: 0, fontSize: '12px' }}>
                            Explore IIT-JEE, NEET and Foundation programmes at Aurous.
                        </Typography>
                    </Box>
                    <Link href="/jee" style={{ textDecoration: 'none' }}>
                        <Box component="span" sx={{ display: 'inline-block', background: YELLOW, color: GREEN, padding: '14px 21px', borderRadius: '7px', fontWeight: 700, fontSize: '13px' }}>
                            Explore our programmes ↗
                        </Box>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default OurFacultySection;
