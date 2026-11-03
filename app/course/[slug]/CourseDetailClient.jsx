'use client';

import React, { useState } from 'react';
import {
    Box,
    Button,
    Typography,
    Dialog,
    DialogContent,
    IconButton,
    TextField,
    MenuItem,
    Checkbox,
    FormControlLabel,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { getJeeProgram, learningSteps, subjects } from '@/lib/jeePrograms';

const WHATSAPP_NUMBER = '919993936947';

const primaryButtonSx = {
    background: '#ffda16',
    color: '#071c14',
    borderRadius: '5px',
    padding: '15px 25px',
    fontSize: '13px',
    fontWeight: 800,
    textTransform: 'none',
    '&:hover': { background: '#f1c900' },
};

const fieldSx = {
    '& .MuiInputLabel-root': { fontSize: '11px', fontWeight: 700, color: '#111820' },
    '& .MuiOutlinedInput-root': { fontSize: '12px' },
    '& .MuiOutlinedInput-input': { padding: '11px 10px' },
    '& .MuiOutlinedInput-notchedOutline': { borderColor: '#dce0e5', borderRadius: '5px' },
};

// Decorative line icons used across the page
const iconDocument = (
    <path d="M5 2h10l4 4v16H5zM14 2v5h5M8 11h8M8 15h8M8 18h5" />
);
const iconClock = (
    <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v6l4 2" />
    </>
);
const iconSun = (
    <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 1v3m0 16v3M1 12h3m16 0h3M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2" />
    </>
);
const iconBook = (
    <path d="M3 5q5-2 9 1 4-3 9-1v15q-5-2-9 1-4-3-9-1zM12 6v15M6 8l3 1m-3 3 3 1m6-4 3-1m-3 5 3-1" />
);
const iconPeople = (
    <>
        <circle cx="12" cy="7" r="4" />
        <path d="M5 22v-4a7 7 0 0114 0v4M3 4a3 3 0 000 6M21 4a3 3 0 010 6M1 20v-5m22 5v-5" />
    </>
);
const iconRefresh = (
    <path d="M20 8a9 9 0 00-16-2M4 6V1m0 5h5M4 16a9 9 0 0016 2m0 0v5m0-5h-5" />
);
const iconAtom = (
    <>
        <ellipse cx="12" cy="12" rx="11" ry="4" />
        <ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1" />
    </>
);
const iconFlask = <path d="M9 2h6m-5 0v8L3 21h18l-7-11V2M7 15h10" />;

const factIcons = [iconDocument, iconSun, iconClock, iconBook, iconDocument, iconDocument, iconDocument];
const stepIcons = [iconBook, iconDocument, iconPeople, iconRefresh];

function Svg({ children, color = '#003c2d', size = 25, sx = {} }) {
    return (
        <Box component="svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" sx={{ width: size, height: size, color, ...sx }}>
            {children}
        </Box>
    );
}

function Eyebrow({ children, dark = true }) {
    return (
        <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '11px', letterSpacing: '2px', fontWeight: 600, marginBottom: '16px', color: dark ? '#111820' : '#c6d9d0' }}>
            <Box component="span" sx={{ display: 'block', width: 34, height: 2, background: '#19805b' }} />
            {children}
        </Box>
    );
}

export default function CourseDetailClient({ slug }) {
    const program = getJeeProgram(slug);
    const [registrationOpen, setRegistrationOpen] = useState(false);
    const [status, setStatus] = useState('');

    const openWhatsApp = (message) => {
        window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message), '_blank', 'noopener');
    };

    const handleHeroEnquiry = (event) => {
        event.preventDefault();
        const f = new FormData(event.target);
        const message =
            'Hello Aurous Academy, I would like course counselling.\n' +
            'Student: ' + f.get('student') + '\n' +
            'Mobile: ' + f.get('mobile') + '\n' +
            'Program: ' + f.get('program');
        openWhatsApp(message);
    };

    const handleRegistrationSubmit = (event) => {
        event.preventDefault();
        const f = new FormData(event.target);
        const message =
            'Hello Aurous Academy, I would like IIT-JEE counselling.\n' +
            'Student: ' + f.get('student') + '\n' +
            'Mobile: ' + f.get('mobile') + '\n' +
            'Class: ' + f.get('stage') + '\n' +
            'Program: ' + f.get('program');
        openWhatsApp(message);
        setStatus('Please send the prepared message in WhatsApp. Your enquiry has not been saved on this page.');
    };

    return (
        <Box sx={{ fontFamily: '"Plus Jakarta Sans", Arial, sans-serif', color: '#111820', background: '#ffffff' }}>
            {/* ===== Hero ===== */}
            <Box component="section" sx={{ background: 'radial-gradient(ellipse at 55% 50%, #15563b, transparent 62%), #002e22', color: '#ffffff', overflow: 'hidden' }}>
                <Box sx={{ width: '90%', maxWidth: 1280, margin: 'auto', position: 'relative', minHeight: { md: 515 }, display: { xs: 'block', md: 'flex' }, justifyContent: 'space-between', alignItems: 'flex-start', paddingBottom: { xs: '20px', md: 0 } }}>
                    {/* Diagonal stripes */}
                    <Box sx={{ position: 'absolute', inset: '0 -20% 0 35%', background: 'repeating-linear-gradient(124deg, transparent 0 130px, #16774b28 130px 190px, transparent 190px 260px)', display: { xs: 'none', md: 'block' }, '&::after': { content: '""', position: 'absolute', top: 55, left: '30%', width: 60, height: 280, transform: 'skew(-35deg)', background: '#ffe01c' } }} />

                    {/* Students image */}
                    <Box component="img" src="/Images/hero-students-uniform.png" alt="Two students in orange Aurous Academy T-shirts" sx={{ position: { xs: 'relative', md: 'absolute' }, width: { xs: '100%', md: '58%' }, height: { xs: 310, md: '98%' }, objectFit: 'contain', objectPosition: 'center bottom', bottom: 0, left: { xs: 'auto', md: '32%' }, zIndex: 1, display: 'block', marginTop: { xs: '10px', md: 0 } }} />

                    {/* Hero copy */}
                    <Box sx={{ position: 'relative', zIndex: 2, width: { xs: '100%', md: '43%' }, padding: { xs: '30px 0 0', md: '46px 0 35px' } }}>
                        <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '11px', letterSpacing: '2px', fontWeight: 600, marginBottom: '16px' }}>
                            <Box component="span" sx={{ display: 'block', width: 34, height: 2, background: '#ffdc18' }} />
                            {program.eyebrow}
                        </Box>
                        <Typography component="h1" sx={{ fontSize: { xs: '54px', md: 'clamp(46px, 5.3vw, 76px)' }, lineHeight: 1, letterSpacing: '-2.5px', fontWeight: 850, margin: '0 0 10px' }}>
                            <Box component="span" sx={{ fontSize: '0.62em', letterSpacing: '-1px', color: '#ffdc18' }}>{program.titlePrefix}</Box>
                            <br />
                            {program.titleMain}
                            <br />
                            {program.titleSuffix}
                        </Typography>
                        <Box sx={{ display: 'inline-flex', border: '1px solid #ffdc18', borderRadius: '4px', overflow: 'hidden', color: '#ffdc18', fontSize: { xs: '26px', md: '29px' }, lineHeight: 1.25, marginBottom: '18px', whiteSpace: 'nowrap' }}>
                            <Box component="b" sx={{ background: '#ffdc18', color: '#071710', padding: '6px 14px', fontWeight: 700 }}>{program.classLabel}</Box>
                            <Box component="span" sx={{ padding: '6px 20px' }}>Target {program.target}</Box>
                        </Box>
                        <Typography component="h2" sx={{ fontSize: { xs: '18px', md: '19px' }, letterSpacing: '-0.3px', lineHeight: 1.3, marginBottom: '12px', fontWeight: 700 }}>
                            {program.tagline}
                        </Typography>
                        <Typography sx={{ fontSize: { xs: '14px', md: '14px' }, maxWidth: 440, color: '#c6d9d0', lineHeight: 1.45 }}>
                            {program.description}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '25px', marginTop: '24px' }}>
                            <Button onClick={() => setRegistrationOpen(true)} sx={{ ...primaryButtonSx, padding: { xs: '12px 18px', md: '15px 25px' } }}>
                                Enquire Now →
                            </Button>
                            <Box component="a" href="#planner" sx={{ display: 'flex', alignItems: 'center', fontSize: '10px', lineHeight: 1.4, gap: '12px', color: '#ffffff', textDecoration: 'none' }}>
                                <Box component="span" sx={{ border: '2px solid #ffffff', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, fontSize: '23px', flexShrink: 0 }}>↓</Box>
                                <Box component="span">Know more<br />about the program</Box>
                            </Box>
                        </Box>
                    </Box>

                    {/* Enquiry card */}
                    <Box sx={{ position: 'relative', zIndex: 3, width: { xs: '100%', md: '23%' }, background: '#ffffff', color: '#111820', border: '1px solid #dde6de', borderRadius: '10px', padding: { xs: '20px', md: '18px 17px' }, margin: { xs: '20px 0 0', md: '48px -1% 35px 0' }, boxShadow: '0 8px 20px #001e2120' }}>
                        <Box component="span" sx={{ display: 'block', height: 3, width: 35, background: '#237c4f', marginBottom: '14px' }} />
                        <Typography component="h2" sx={{ fontSize: { xs: '21px', md: '23px' }, letterSpacing: '-0.6px', fontWeight: 800 }}>
                            Enquire Now
                        </Typography>
                        <Typography sx={{ fontSize: '13px', margin: '8px 0 20px', color: '#5b616b', lineHeight: 1.45 }}>
                            Get detailed program information from our academic team.
                        </Typography>
                        <Box component="form" onSubmit={handleHeroEnquiry} sx={{ display: { xs: 'grid', md: 'block' }, gridTemplateColumns: { xs: '1fr 1fr', md: 'none' }, gap: { xs: '12px', md: 0 } }}>
                            <Box component="label" sx={{ display: 'block', fontSize: '11px', fontWeight: 700, marginTop: '18px' }}>
                                Student Name
                                <Box component="input" name="student" placeholder="Enter student name" required maxLength={80} autoComplete="name" sx={{ display: 'block', width: '100%', border: '1px solid #dce0e5', borderRadius: '5px', padding: '11px 10px', fontSize: '12px', marginTop: '6px', minWidth: 0, fontFamily: 'inherit', color: '#111820', '&::placeholder': { color: '#9aa3aa' } }} />
                            </Box>
                            <Box component="label" sx={{ display: 'block', fontSize: '11px', fontWeight: 700, marginTop: '18px' }}>
                                Mobile Number
                                <Box component="input" name="mobile" placeholder="Enter 10 digit mobile number" required type="tel" pattern="[6-9][0-9]{9}" maxLength={10} autoComplete="tel-national" sx={{ display: 'block', width: '100%', border: '1px solid #dce0e5', borderRadius: '5px', padding: '11px 10px', fontSize: '12px', marginTop: '6px', minWidth: 0, fontFamily: 'inherit', color: '#111820', '&::placeholder': { color: '#9aa3aa' } }} />
                            </Box>
                            <Box component="input" name="program" type="hidden" value={program.programName} />
                            <Button type="submit" fullWidth sx={{ ...primaryButtonSx, marginTop: '18px', padding: '13px', gridColumn: { xs: '1/-1', md: 'auto' } }}>
                                Register Now →
                            </Button>
                            <Typography component="small" sx={{ fontSize: '9px', lineHeight: 1.4, color: '#757e82', display: 'block', marginTop: '12px', gridColumn: { xs: '1/-1', md: 'auto' } }}>
                                Opens WhatsApp. Press Send to share your enquiry.
                            </Typography>
                            <Button type="button" onClick={() => setRegistrationOpen(true)} sx={{ background: 'transparent', color: '#315b48', fontSize: '10px', padding: '8px 0 0', textTransform: 'none', gridColumn: { xs: '1/-1', md: 'auto' } }}>
                                Ask about course fees →
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* ===== Facts ===== */}
            <Box component="section" sx={{ background: '#fffcf0' }}>
                <Box sx={{ width: '90%', maxWidth: 1280, margin: 'auto', display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(7, 1fr)' }, gap: { xs: '25px 0', md: 0 }, padding: '30px 0' }}>
                    {program.facts.map((fact, index) => (
                        <Box key={index} sx={{ padding: { xs: '0 20px', md: '0 19px' }, borderRight: { xs: 'none', md: index < program.facts.length - 1 ? '1px solid #dcdfd8' : 'none' }, paddingLeft: { md: index === 0 ? 0 : '19px' }, gridColumn: { xs: index === program.facts.length - 1 && program.facts.length % 2 === 1 ? '1/-1' : 'auto', md: 'auto' } }}>
                            <Svg>{factIcons[index] || iconDocument}</Svg>
                            <Box component="strong" sx={{ fontSize: { xs: '17px', md: '20px' }, lineHeight: 1.1, display: 'block', letterSpacing: '-0.5px', color: '#111820' }}>
                                {fact.value}
                                {fact.sub && <Box component="small" sx={{ fontSize: '15px', display: 'block', fontWeight: 400 }}>{fact.sub}</Box>}
                            </Box>
                            <Typography sx={{ fontSize: '11px', marginTop: '8px', color: '#5b616b' }}>{fact.label}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* ===== Learning journey ===== */}
            <Box component="section" id="planner" sx={{ padding: '35px 0 30px' }}>
                <Box sx={{ width: '90%', maxWidth: 1280, margin: 'auto' }}>
                    <Box sx={{ display: { xs: 'block', md: 'flex' }, alignItems: 'center', justifyContent: 'space-between', gap: '40px', marginBottom: '28px' }}>
                        <Box>
                            <Eyebrow>YOUR PREPARATION, STEP BY STEP</Eyebrow>
                            <Typography component="h2" sx={{ fontSize: { xs: '29px', md: '32px' }, lineHeight: 1.12, letterSpacing: '-1px', fontWeight: 800 }}>
                                A structured learning journey<br />for JEE success
                            </Typography>
                        </Box>
                        <Typography sx={{ maxWidth: 400, fontSize: '13px', color: '#5b616b', lineHeight: 1.45, marginTop: { xs: '15px', md: 0 } }}>
                            From concept building to exam-ready practice, every element of the program is designed to help you learn better, practice smarter and stay ahead.
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: { xs: '25px 12px', md: '24px' } }}>
                        {learningSteps.map((step, index) => (
                            <Box key={step.title} sx={{ position: 'relative', background: index % 2 === 0 ? '#edf8f1' : '#fff8df', borderRadius: '10px', padding: { xs: '27px 17px 20px', md: '30px 27px 24px' } }}>
                                <Box component="span" sx={{ position: 'absolute', top: -12, left: 12, background: index % 2 === 0 ? '#137645' : '#eda600', borderRadius: '50%', border: '2px solid #ffffff', width: 31, height: 31, color: '#ffffff', textAlign: 'center', lineHeight: '27px', fontSize: '15px', fontWeight: 700 }}>{index + 1}</Box>
                                <Svg color={index % 2 === 0 ? '#003e2c' : '#e69c00'} size={40}>{stepIcons[index]}</Svg>
                                <Typography component="h3" sx={{ fontSize: { xs: '16px', md: '18px' }, letterSpacing: '-0.5px', marginBottom: '7px', fontWeight: 800 }}>{step.title}</Typography>
                                <Typography sx={{ fontSize: { xs: '12px', md: '14px' }, lineHeight: 1.45, color: '#5b616b' }}>{step.desc}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* ===== Tests ===== */}
            {program.tests.length > 0 && (
                <Box component="section" sx={{ background: '#f1f8f5', padding: '28px 0' }}>
                    <Box sx={{ width: '90%', maxWidth: 1280, margin: 'auto', display: 'grid', gridTemplateColumns: { xs: '1fr', md: '0.85fr 1.15fr' }, gap: { xs: '20px', md: '50px' }, alignItems: 'center' }}>
                        <Box>
                            <Eyebrow>TESTS &amp; ASSESSMENT</Eyebrow>
                            <Typography component="h2" sx={{ fontSize: { xs: '29px', md: '30px' }, lineHeight: 1.12, letterSpacing: '-1px', fontWeight: 800 }}>
                                Regular testing for<br />consistent improvement
                            </Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: '12px', color: '#5b616b', lineHeight: 1.45 }}>
                                A well-planned test structure helps you track your progress, identify areas for improvement and get familiar with the exam patterns.
                            </Typography>
                            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '10px' }}>
                                {program.tests.map((test) => (
                                    <Box key={test.title} sx={{ display: 'flex', alignItems: 'center', gap: { xs: '12px', md: '22px' }, background: '#ffffff', padding: { xs: '17px 12px', md: '20px 25px' }, borderRadius: '10px' }}>
                                        <Svg size={34}>{iconDocument}</Svg>
                                        <Box>
                                            <Box component="strong" sx={{ fontSize: '25px', lineHeight: 1, color: '#111820' }}>{test.count}</Box>
                                            <Typography component="h3" sx={{ fontSize: '16px', fontWeight: 800, marginTop: '2px' }}>{test.title}</Typography>
                                            <Typography sx={{ fontSize: '11px', marginTop: '4px', color: '#5b616b' }}>{test.pattern}</Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            )}

            {/* ===== Subjects ===== */}
            <Box component="section" sx={{ padding: '28px 0 25px' }}>
                <Box sx={{ width: '90%', maxWidth: 1280, margin: 'auto' }}>
                    <Eyebrow>THE THREE PILLARS</Eyebrow>
                    <Box sx={{ display: { xs: 'block', md: 'flex' }, alignItems: 'center', justifyContent: 'space-between', gap: '30px', marginBottom: '18px' }}>
                        <Typography component="h2" sx={{ fontSize: { xs: '25px', md: '27px' }, lineHeight: 1.12, letterSpacing: '-1px', fontWeight: 800 }}>
                            Complete focus on Physics, Chemistry and Mathematics
                        </Typography>
                        <Typography sx={{ maxWidth: 300, fontSize: '12px', color: '#5b616b', lineHeight: 1.45, marginTop: { xs: '15px', md: 0 } }}>
                            In-depth theory, extensive practice and continuous assessment across all three subjects.
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: '20px' }}>
                        {subjects.map((subject) => (
                            <Box key={subject.title} sx={{ display: 'flex', border: '1px solid #e0e3e6', borderRadius: '7px', padding: '15px', gap: '18px' }}>
                                <Box component="span" sx={{ background: '#f0f8f2', borderRadius: '8px', color: '#003e2c', flexShrink: 0, width: 65, height: 65, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '64px', fontFamily: 'Georgia, serif', lineHeight: 1 }}>
                                    {subject.icon === 'pi' ? 'π' : <Svg size={45}>{subject.icon === 'atom' ? iconAtom : iconFlask}</Svg>}
                                </Box>
                                <Box>
                                    <Typography component="h3" sx={{ fontSize: '15px', marginBottom: '6px', fontWeight: 800 }}>{subject.title}</Typography>
                                    <Typography sx={{ fontSize: '12px', color: '#5b616b', lineHeight: 1.45 }}>{subject.desc}</Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* ===== CTA ===== */}
            <Box component="section" sx={{ background: '#ffde16', padding: '20px 0' }}>
                <Box sx={{ width: '90%', maxWidth: 1280, margin: 'auto', display: { xs: 'block', md: 'flex' }, justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
                    <Box>
                        <Eyebrow>TAKE THE NEXT STEP</Eyebrow>
                        <Typography component="h2" sx={{ fontSize: { xs: '23px', md: '25px' }, letterSpacing: '-0.5px', fontWeight: 800, color: '#09271d' }}>{program.ctaTitle}</Typography>
                        <Typography sx={{ fontSize: '12px', color: '#09271d', marginTop: '5px', lineHeight: 1.45 }}>{program.ctaDesc}</Typography>
                    </Box>
                    <Button onClick={() => setRegistrationOpen(true)} sx={{ background: '#003c2d', color: '#ffffff', minWidth: 180, borderRadius: '5px', padding: '15px 25px', fontSize: '13px', fontWeight: 800, textTransform: 'none', marginTop: { xs: '18px', md: 0 }, '&:hover': { background: '#0b5440' } }}>
                        Register Now →
                    </Button>
                </Box>
            </Box>

            {/* ===== Registration dialog ===== */}
            <Dialog
                open={registrationOpen}
                onClose={() => setRegistrationOpen(false)}
                fullWidth
                maxWidth="sm"
                PaperProps={{ sx: { borderRadius: '18px', width: 'min(560px, 92vw)', padding: { xs: '25px', sm: '32px' }, color: '#123d36', maxHeight: '90vh', boxShadow: '0 25px 70px #0003' } }}
            >
                <IconButton onClick={() => setRegistrationOpen(false)} aria-label="Close registration" sx={{ float: 'right', width: 30, height: 30, borderRadius: '50%', background: '#edf3e9', color: '#003e34', fontSize: '23px' }}>
                    <CloseIcon fontSize="inherit" />
                </IconButton>
                <DialogContent sx={{ padding: 0 }}>
                    <Box component="span" sx={{ fontSize: '9px', letterSpacing: '1.4px', fontWeight: 800, color: '#66856a' }}>AUROUS ACADEMY</Box>
                    <Typography component="h2" sx={{ fontSize: '25px', fontWeight: 800, margin: '15px 0 9px' }}>Register your interest</Typography>
                    <Typography sx={{ fontSize: '12px', lineHeight: 1.7, color: '#788575', marginBottom: '20px' }}>
                        Share your details with our admissions team via WhatsApp.
                    </Typography>
                    <Box component="form" onSubmit={handleRegistrationSubmit}>
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: '15px' }}>
                            <TextField name="student" label="Student name" required fullWidth sx={fieldSx} />
                            <TextField name="mobile" label="Mobile number" required type="tel" fullWidth sx={fieldSx} />
                            <TextField name="stage" label="Current class" select defaultValue="11" fullWidth sx={fieldSx}>
                                <MenuItem value="11">Class 11</MenuItem>
                                <MenuItem value="12">Class 12</MenuItem>
                                <MenuItem value="dropper">Class 12 passout / Dropper</MenuItem>
                            </TextField>
                            <TextField name="program" label="Program" defaultValue={program.programName} fullWidth sx={fieldSx} />
                        </Box>
                        <FormControlLabel
                            required
                            control={<Checkbox name="consent" sx={{ padding: 0, marginRight: '10px', alignSelf: 'flex-start' }} />}
                            label="I agree to share these details with Aurous Academy for counselling about IIT-JEE programs."
                            sx={{ display: 'flex', alignItems: 'flex-start', margin: '18px 0', '& .MuiFormControlLabel-label': { fontSize: '10px', fontWeight: 400, lineHeight: 1.7, color: '#123d36' } }}
                        />
                        <Button type="submit" fullWidth sx={{ background: '#003e34', color: '#ffffff', padding: '13px 20px', borderRadius: '7px', fontSize: '12px', fontWeight: 700, textTransform: 'none', '&:hover': { background: '#10634e' } }}>
                            Send registration enquiry ↗
                        </Button>
                        <Typography sx={{ fontSize: '10px', color: '#73816d', lineHeight: 1.8, marginTop: '13px' }}>
                            Opens a prepared message. Please press Send in WhatsApp to contact the team. A counselling slot is confirmed only after the team replies.
                        </Typography>
                        <Typography role="status" sx={{ fontSize: '10px', color: '#73816d', lineHeight: 1.8, marginTop: '13px' }}>
                            {status}
                        </Typography>
                    </Box>
                </DialogContent>
            </Dialog>
        </Box>
    );
}
