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
import HomeLocationMap from '@/components/HomeComponents/HomeLocationMap';

// Reference design tokens (matched to Aurous Academy JEE index.html)
const green = '#003e34';

const filters = [
    { id: '11', label: 'Class 11' },
    { id: '12', label: 'Class 12' },
    { id: 'dropper', label: 'Dropper' },
];

const programs = [
    {
        id: 'class11-classroom',
        stage: '11',
        titleLines: ['Classroom', 'Program'],
        details: ['Class 11', 'JEE Main + Advanced', 'Evening Program'],
        target: '2028',
        img: '/Images/aurous-student.png',
        href: '/course/classroom',
    },
    {
        id: 'class11-sankalp',
        stage: '11',
        titleLines: ['Sankalp', 'Program'],
        details: ['Class 11', 'JEE Main + Advanced', 'Morning Program'],
        target: '2028',
        img: '/Images/aurous-male-2.png',
        href: '/course/sankalp',
    },
    {
        id: 'class11-sip',
        stage: '11',
        titleLines: ['School Integrated', 'Program'],
        details: ['Class 11', 'JEE Main + Advanced', 'Within-School'],
        target: '2028',
        img: '/Images/aurous-student-3.png',
        href: '/course/school-integrated',
    },
    {
        id: 'class11-venus',
        stage: '11',
        titleLines: ['Venus', 'Program'],
        details: ['Class 11', 'JEE Main + Advanced', 'Within-School'],
        target: '2028',
        img: '/Images/aurous-student-2.png',
        href: '/course/venus',
    },
    {
        id: 'class12-classroom',
        stage: '12',
        titleLines: ['Classroom', 'Program'],
        details: ['Class 12', 'JEE Main + Advanced', 'Evening Program'],
        target: '2027',
        img: '/Images/aurous-student.png',
        href: '/course/class12-classroom',
    },
    {
        id: 'class12-sankalp',
        stage: '12',
        titleLines: ['Sankalp', 'Program'],
        details: ['Class 12', 'JEE Main + Advanced', 'Morning Program'],
        target: '2027',
        img: '/Images/aurous-male-2.png',
        href: '/course/class12-sankalp',
    },
    {
        id: 'class12-sip',
        stage: '12',
        titleLines: ['School Integrated', 'Program'],
        details: ['Class 12', 'JEE Main + Advanced', 'Within-School'],
        target: '2027',
        img: '/Images/aurous-student-3.png',
        href: '/course/class12-school-integrated',
    },
    {
        id: 'dropper',
        stage: 'dropper',
        titleLines: ['Dropper', 'Program'],
        details: ['Class 12 passout', 'JEE Main + Advanced', 'Morning Program'],
        target: '2027',
        img: '/Images/aurous-student-3.png',
        href: '/course/dropper',
    },
];

const wrapStyles = {
    maxWidth: 1554,
    margin: 'auto',
    padding: { xs: '0 16px', md: '0 24px', lg: '0 36px' },
};

const fieldSx = {
    '& .MuiInputLabel-root': {
        fontSize: '10px',
        fontWeight: 700,
        color: '#123d36',
    },
    '& .MuiOutlinedInput-root': {
        fontSize: '12px',
    },
    '& .MuiOutlinedInput-input': {
        padding: '12px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#ccd8cc',
        borderRadius: '6px',
    },
};

const JEESection1 = () => {
    const [stage, setStage] = useState('11');
    const [dialogOpen, setDialogOpen] = useState(false);
    const [status, setStatus] = useState('');

    const visiblePrograms = programs.filter((program) => program.stage === stage);

    const handleEnquirySubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const message =
            'Hello Aurous Academy, I would like IIT-JEE counselling.\n' +
            'Student: ' + formData.get('student') + '\n' +
            'Mobile: ' + formData.get('mobile') + '\n' +
            'Class: ' + formData.get('stage') + '\n' +
            'Program: ' + formData.get('program');
        window.open(
            'https://wa.me/919993936947?text=' + encodeURIComponent(message),
            '_blank',
            'noopener'
        );
        setStatus('Please send the prepared message in WhatsApp. Your enquiry has not been saved on this page.');
    };

    return (
        <>
            <Box sx={wrapStyles}>
                {/* ===== Banner ===== */}
                <Box
                    component="section"
                    aria-label="IIT-JEE banner"
                    sx={{
                        position: 'relative',
                        isolation: 'isolate',
                        overflow: 'hidden',
                        background: '#fff5c9',
                        borderRadius: '10px',
                        marginTop: { xs: '15px', md: '18px' },
                        minHeight: { xs: 390, md: 292 },
                        display: 'flex',
                        alignItems: { xs: 'flex-start', md: 'center' },
                    }}
                >
                    <Box
                        component="img"
                        src="/Images/academic-illustration.png"
                        alt=""
                        aria-hidden="true"
                        sx={{
                            position: 'absolute',
                            zIndex: -1,
                            right: 0,
                            bottom: 0,
                            width: { xs: '100%', md: '54%' },
                            height: { xs: '175px', md: '100%' },
                            objectFit: 'cover',
                            objectPosition: 'center',
                            mixBlendMode: 'multiply',
                            maskImage: {
                                xs: 'linear-gradient(to bottom, transparent, #000 20%)',
                                md: 'linear-gradient(to right, transparent, #000 13%)',
                            },
                            WebkitMaskImage: {
                                xs: 'linear-gradient(to bottom, transparent, #000 20%)',
                                md: 'linear-gradient(to right, transparent, #000 13%)',
                            },
                        }}
                    />
                    <Box
                        sx={{
                            position: 'relative',
                            zIndex: 1,
                            padding: { xs: '25px 22px', md: '36px 38px' },
                            maxWidth: 760,
                        }}
                    >
                        <Typography
                            component="h1"
                            sx={{
                                fontSize: { xs: '38px', md: 'clamp(40px, 4.6vw, 64px)' },
                                fontWeight: 800,
                                lineHeight: 1.08,
                                letterSpacing: { xs: '-1.6px', md: '-2.5px' },
                                marginBottom: '8px',
                                color: '#123d36',
                            }}
                        >
                            Your goal is IIT.
                        </Typography>
                        <Typography
                            component="h2"
                            sx={{
                                fontSize: { xs: '23px', md: 'clamp(23px, 2.6vw, 36px)' },
                                lineHeight: 1.2,
                                letterSpacing: { xs: '-0.6px', md: '-1.1px' },
                                fontWeight: 700,
                                marginBottom: '12px',
                                color: '#123d36',
                                maxWidth: { xs: 330, md: 'none' },
                            }}
                        >
                            Let’s build your next chapter.
                        </Typography>
                        <Typography
                            component="p"
                            sx={{
                                fontSize: { xs: '11px', md: '14px' },
                                lineHeight: 1.7,
                                color: '#3e4b3d',
                                maxWidth: { xs: 290, md: 610 },
                                marginBottom: { xs: '16px', md: '18px' },
                            }}
                        >
                            JEE Main & Advanced preparation for Class 11, Class 12 and droppers.
                        </Typography>
                        <Button
                            href="#programs"
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '21px',
                                background: green,
                                color: '#ffffff',
                                borderRadius: '6px',
                                padding: { xs: '11px 15px', md: '12px 20px' },
                                fontSize: { xs: '10px', md: '12px' },
                                fontWeight: 600,
                                textTransform: 'none',
                                lineHeight: 1,
                                '&:hover': { background: '#10634e' },
                            }}
                        >
                            Find Your Program
                            <Box component="span" sx={{ fontSize: '21px', lineHeight: 1 }}>
                                →
                            </Box>
                        </Button>
                    </Box>
                </Box>

                {/* ===== Programs ===== */}
                <Box
                    component="section"
                    id="programs"
                    aria-label="IIT-JEE programs"
                    sx={{
                        color: '#123d36',
                        pt: { xs: '28px', md: '39px' },
                        pb: { xs: '20px', md: '27px' },
                        px: { xs: 0, md: '9px' },
                        scrollMarginTop: { xs: '90px', md: '160px' },
                    }}
                >
                    {/* Program heading + filters */}
                    <Box
                        sx={{
                            display: { xs: 'block', md: 'flex' },
                            justifyContent: 'space-between',
                            gap: '24px',
                            alignItems: 'center',
                            marginBottom: { xs: '18px', md: '22px' },
                        }}
                    >
                        <Typography
                            component="h2"
                            sx={{
                                fontSize: { xs: '27px', md: '29px', lg: '34px' },
                                fontWeight: 800,
                                letterSpacing: { xs: '-1px', md: '-1.2px' },
                                lineHeight: 1.2,
                                color: '#123d36',
                                margin: 0,
                                marginBottom: { xs: '17px', md: 0 },
                            }}
                        >
                            Find your IIT-JEE program
                        </Typography>

                        <Box
                            role="group"
                            aria-label="Choose your class"
                            sx={{
                                display: 'flex',
                                border: '1px solid #aebbb5',
                                borderRadius: '7px',
                                overflow: 'hidden',
                                flexShrink: 0,
                                width: { xs: 'fit-content', md: 'auto' },
                            }}
                        >
                            {filters.map((filter) => {
                                const active = stage === filter.id;
                                return (
                                    <Button
                                        key={filter.id}
                                        onClick={() => setStage(filter.id)}
                                        aria-pressed={active}
                                        disableRipple
                                        sx={{
                                            background: active ? green : '#ffffff',
                                            color: active ? '#ffffff' : green,
                                            padding: { xs: '11px 22px', md: '12px 20px', lg: '12px 25px' },
                                            fontSize: '11px',
                                            borderRight: filter.id !== 'dropper' ? '1px solid #bdc7c0' : 'none',
                                            borderRadius: 0,
                                            minWidth: 0,
                                            textTransform: 'none',
                                            lineHeight: 1.5,
                                            fontWeight: 400,
                                            '&:hover': {
                                                background: active ? green : '#f4f6ee',
                                            },
                                        }}
                                    >
                                        {filter.label}
                                    </Button>
                                );
                            })}
                        </Box>
                    </Box>

                    {/* Course grid */}
                    <Box
                        sx={{
                            display: 'flex',
                            gap: { xs: '15px', md: '18px' },
                            overflowX: 'auto',
                            scrollSnapType: 'x mandatory',
                            padding: '0 0 5px',
                            scrollbarWidth: 'thin',
                            scrollbarColor: '#b7c6b8 #f4f6ee',
                        }}
                    >
                        {visiblePrograms.map((program) => (
                            <Box
                                key={program.id}
                                sx={{
                                    flex: '0 0 auto',
                                    width: { xs: '280px', md: '270px', lg: 'calc((100% - 54px) / 4)' },
                                    minWidth: 265,
                                    maxWidth: 400,
                                    border: '1px solid #a9bcb2',
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                    background: '#ffffff',
                                    scrollSnapAlign: 'start',
                                    transition: 'box-shadow .2s',
                                    '&:hover': {
                                        boxShadow: '0 7px 18px #003e3415',
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        isolation: 'isolate',
                                        overflow: 'hidden',
                                        height: 320,
                                        padding: '19px 16px 0',
                                        '&::before': {
                                            content: '""',
                                            zIndex: -1,
                                            position: 'absolute',
                                            inset: 0,
                                            background: '#eff3cf',
                                            clipPath: 'polygon(75% 0, 100% 0, 100% 100%, 22% 100%)',
                                        },
                                    }}
                                >
                                    <Typography
                                        component="h3"
                                        sx={{
                                            position: 'relative',
                                            zIndex: 3,
                                            fontSize: '23px',
                                            fontWeight: 800,
                                            lineHeight: 1.16,
                                            letterSpacing: '-0.6px',
                                            maxWidth: 185,
                                            minHeight: 67,
                                            color: '#103041',
                                            margin: 0,
                                        }}
                                    >
                                        {program.titleLines[0]}
                                        <br />
                                        {program.titleLines[1]}
                                    </Typography>

                                    <Box
                                        component="ul"
                                        sx={{
                                            padding: 0,
                                            margin: '16px 0 0',
                                            listStyle: 'none',
                                            position: 'relative',
                                            zIndex: 3,
                                            width: 135,
                                            pointerEvents: 'none',
                                        }}
                                    >
                                        {program.details.map((detail) => (
                                            <Box
                                                component="li"
                                                key={detail}
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '10px',
                                                    fontSize: '11px',
                                                    lineHeight: 1.65,
                                                    color: '#24304a',
                                                    minHeight: 24,
                                                    marginBottom: '4px',
                                                }}
                                            >
                                                <Box component="span" sx={{ maxWidth: 108 }}>
                                                    {detail}
                                                </Box>
                                            </Box>
                                        ))}
                                        <Box
                                            component="li"
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '10px',
                                                fontSize: '11px',
                                                lineHeight: 1.65,
                                                color: '#24304a',
                                                minHeight: 24,
                                                marginBottom: '4px',
                                            }}
                                        >
                                            <Box
                                                component="span"
                                                sx={{
                                                    display: 'block',
                                                    color: '#07543f',
                                                }}
                                            >
                                                <Box
                                                    component="small"
                                                    sx={{
                                                        display: 'block',
                                                        fontSize: '8px',
                                                        fontWeight: 400,
                                                        letterSpacing: '0.5px',
                                                        color: '#53665c',
                                                        marginBottom: '3px',
                                                    }}
                                                >
                                                    TARGET
                                                </Box>
                                                <Box
                                                    component="strong"
                                                    sx={{
                                                        display: 'block',
                                                        fontSize: '23px',
                                                        lineHeight: 1.2,
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    {program.target}
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>

                                    <Box
                                        component="img"
                                        src={program.img}
                                        alt="Illustrative Aurous student model"
                                        loading="lazy"
                                        sx={{
                                            position: 'absolute',
                                            zIndex: 1,
                                            width: 221,
                                            height: 332,
                                            objectFit: 'contain',
                                            right: -22,
                                            bottom: -64,
                                            maxWidth: 'none',
                                            pointerEvents: 'none',
                                        }}
                                    />

                                    <Box
                                        component="a"
                                        href={program.href}
                                        sx={{
                                            position: 'absolute',
                                            zIndex: 3,
                                            left: 16,
                                            bottom: 14,
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '6px',
                                            background: green,
                                            color: '#ffffff',
                                            padding: '10px 14px',
                                            borderRadius: '6px',
                                            fontSize: '10px',
                                            fontWeight: 700,
                                            lineHeight: 1,
                                            textDecoration: 'none',
                                            '&:hover': {
                                                background: '#12614d',
                                            },
                                        }}
                                    >
                                        Explore More
                                        <Box component="span" aria-hidden="true" sx={{ fontSize: '14px', fontWeight: 400, lineHeight: 1 }}>
                                            ↗
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* ===== Campus / Location (previously built component) ===== */}
            <HomeLocationMap />

            <Box sx={wrapStyles}>
                {/* ===== Register strip ===== */}
                <Box
                    component="section"
                    id="counselling"
                    aria-label="Register your interest"
                    sx={{
                        position: 'relative',
                        isolation: 'isolate',
                        overflow: 'hidden',
                        background: '#003f34',
                        color: '#ffffff',
                        border: '1px solid #13654e',
                        borderRadius: '16px',
                        padding: { xs: '20px', md: '23px 29px' },
                        marginLeft: { xs: 0, md: '9px' },
                        marginRight: { xs: 0, md: '9px' },
                        marginBottom: { xs: '16px', md: '23px' },
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: { xs: 'flex-start', md: 'center' },
                        gap: { xs: '16px', md: '21px' },
                        boxShadow: '0 7px 18px #003e3412',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            left: 0,
                            top: 24,
                            bottom: 24,
                            width: 4,
                            borderRadius: '0 4px 4px 0',
                            background: '#ffda2a',
                        },
                        '&::after': {
                            content: '""',
                            zIndex: -1,
                            position: 'absolute',
                            width: 240,
                            height: 240,
                            right: 140,
                            top: -150,
                            border: '1px solid #ffffff12',
                            borderRadius: '50%',
                            boxShadow: '0 0 0 32px #ffffff03, 0 0 0 64px #ffffff02',
                        },
                    }}
                >
                    <Box
                        aria-hidden="true"
                        sx={{
                            flexShrink: 0,
                            width: 58,
                            height: 58,
                            background: '#ffffff08',
                            border: '1px solid #4a7957',
                            borderRadius: '15px',
                            color: '#ffda2a',
                            display: 'grid',
                            placeItems: 'center',
                            transform: 'rotate(-5deg)',
                        }}
                    >
                        <svg
                            viewBox="0 0 40 40"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ width: 36, height: 36, transform: 'rotate(5deg)' }}
                        >
                            <path d="M8 30V12a3 3 0 0 1 3-3h15M8 30h20V19M8 30l5 3h17" />
                            <path d="m17 23 15-15 4 4-15 15-6 2 2-6ZM29 11l4 4" />
                        </svg>
                    </Box>

                    <Box sx={{ flex: 1 }}>
                        <Box
                            component="span"
                            sx={{
                                display: 'block',
                                fontSize: '8px',
                                fontWeight: 700,
                                letterSpacing: '1.8px',
                                color: '#a6c9b8',
                                marginBottom: '8px',
                            }}
                        >
                            YOUR NEXT CHAPTER STARTS HERE
                        </Box>
                        <Typography
                            component="h2"
                            sx={{
                                fontSize: { xs: '21px', md: '25px' },
                                fontWeight: 700,
                                lineHeight: 1.25,
                                letterSpacing: '-0.8px',
                                color: '#ffffff',
                            }}
                        >
                            Ready to begin your{' '}
                            <Box component="span" sx={{ color: '#ffdf50' }}>
                                JEE preparation?
                            </Box>
                        </Typography>
                    </Box>

                    <Button
                        onClick={() => setDialogOpen(true)}
                        sx={{
                            minWidth: { xs: 175, md: 187 },
                            flexShrink: 0,
                            background: '#ffda2a',
                            color: '#00392d',
                            fontWeight: 800,
                            fontSize: { xs: '11px', md: '12px' },
                            borderRadius: '9px',
                            gap: '25px',
                            padding: '12px 14px 12px 20px',
                            boxShadow: '0 4px 0 #bfa21c',
                            textTransform: 'none',
                            transition: 'transform .18s, box-shadow .18s',
                            '&:hover': {
                                background: '#ffe269',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 6px 0 #bfa21c',
                            },
                            '&:active': {
                                transform: 'translateY(2px)',
                                boxShadow: '0 2px 0 #bfa21c',
                            },
                        }}
                    >
                        Register Now
                        <Box
                            component="span"
                            aria-hidden="true"
                            sx={{
                                display: 'grid',
                                placeItems: 'center',
                                width: 30,
                                height: 30,
                                background: '#003e3410',
                                borderRadius: '50%',
                                fontSize: '20px',
                            }}
                        >
                            ↗
                        </Box>
                    </Button>
                </Box>
            </Box>

            {/* ===== Registration dialog ===== */}
            <Dialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                fullWidth
                maxWidth="sm"
                PaperProps={{
                    sx: {
                        borderRadius: '18px',
                        width: 'min(560px, 92vw)',
                        padding: { xs: '25px', sm: '32px' },
                        color: '#123d36',
                        maxHeight: '90vh',
                        boxShadow: '0 25px 70px #0003',
                    },
                }}
            >
                <IconButton
                    onClick={() => setDialogOpen(false)}
                    aria-label="Close registration"
                    sx={{
                        float: 'right',
                        width: 30,
                        height: 30,
                        borderRadius: '50%',
                        background: '#edf3e9',
                        color: green,
                        fontSize: '23px',
                    }}
                >
                    <CloseIcon fontSize="inherit" />
                </IconButton>

                <DialogContent sx={{ padding: 0, overflow: 'visible' }}>
                    <Box component="span" sx={{ fontSize: '9px', letterSpacing: '1.4px', fontWeight: 800, color: '#66856a' }}>
                        AUROUS ACADEMY
                    </Box>
                    <Typography component="h2" sx={{ fontSize: '25px', fontWeight: 800, margin: '15px 0 9px' }}>
                        Register your interest
                    </Typography>
                    <Typography sx={{ fontSize: '12px', lineHeight: 1.7, color: '#788575', marginBottom: '20px' }}>
                        Share your details with our admissions team via WhatsApp.
                    </Typography>

                    <Box component="form" onSubmit={handleEnquirySubmit}>
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: '15px' }}>
                            <TextField
                                name="student"
                                label="Student name"
                                required
                                fullWidth
                                sx={fieldSx}
                            />
                            <TextField
                                name="mobile"
                                label="Mobile number"
                                required
                                type="tel"
                                fullWidth
                                sx={fieldSx}
                            />
                            <TextField
                                name="stage"
                                label="Current class"
                                select
                                defaultValue="11"
                                fullWidth
                                sx={fieldSx}
                            >
                                <MenuItem value="11">Class 11</MenuItem>
                                <MenuItem value="12">Class 12</MenuItem>
                                <MenuItem value="dropper">Class 12 passout / Dropper</MenuItem>
                            </TextField>
                            <TextField
                                name="program"
                                label="Program"
                                defaultValue="Help me choose"
                                fullWidth
                                sx={fieldSx}
                            />
                        </Box>

                        <FormControlLabel
                            required
                            control={
                                <Checkbox
                                    name="consent"
                                    sx={{ padding: 0, marginRight: '10px', alignSelf: 'flex-start' }}
                                />
                            }
                            label="I agree to share these details with Aurous Academy for counselling about IIT-JEE programs."
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                margin: '18px 0',
                                '& .MuiFormControlLabel-label': {
                                    fontSize: '10px',
                                    fontWeight: 400,
                                    lineHeight: 1.7,
                                    color: '#123d36',
                                },
                            }}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            sx={{
                                background: green,
                                color: '#ffffff',
                                padding: '13px 20px',
                                borderRadius: '7px',
                                fontSize: '12px',
                                fontWeight: 700,
                                textTransform: 'none',
                                '&:hover': { background: '#10634e' },
                            }}
                        >
                            Send registration enquiry ↗
                        </Button>

                        <Typography sx={{ fontSize: '10px', color: '#73816d', lineHeight: 1.8, marginTop: '13px' }}>
                            Opens a prepared message. Please press Send in WhatsApp to contact the team. A counselling
                            slot is confirmed only after the team replies.
                        </Typography>
                        <Typography role="status" sx={{ fontSize: '10px', color: '#73816d', lineHeight: 1.8, marginTop: '13px' }}>
                            {status}
                        </Typography>
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default JEESection1;


