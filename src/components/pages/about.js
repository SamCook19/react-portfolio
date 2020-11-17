import { convertToRaw } from 'draft-js';
import React from 'react';
import headshot from '../../../static/assets/images/bio/headshot.jpg';

export default function() {
    return (
        <div className="content-page-wrapper">
            <div className="left-column"
            style={{
                background: "url(" + headshot + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            >

            </div>
            <div className="right-column"> 

            My name is Sam Cook and I am a 22 year old web developer.


            </div>
        </div>
    );
}