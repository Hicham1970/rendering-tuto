"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '@/components/theme-provider';
import { clientSideFunction } from '@/utils/client-utils';



function ClientRoutePage() {

    // Utiliser le themeContext:
    const theme = useTheme();
    // Utiliser la fonction clientSideFunction:
    const result = clientSideFunction(); // This function is executed on the client side


    const settings = {
        dots: true,
    };
    return (
        <>
            <h1 style={{ color: theme.colors.primary }}>Client router Page </h1>
            <p>{result}</p>
        </>
    );

}

export default ClientRoutePage
