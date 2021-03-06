import * as React from 'react';
import {View} from 'remax/one';
// import { createCameraContext } from 'remax/wechat';
import { usePageEvent, useAppEvent } from 'remax/macro';
import './index.scss';
import {useEffect} from "react";
import {loadVideo, mobile, videoSize} from "@/utils";
import dat from 'dat.gui';
import PoseDetection from "@/poseDetection";
import {initSketchGui, setupSketch} from "@/sketch";

export default () => {

    // loadVideo().then(video => {
        // const gui = new dat.GUI({width: 250});
        // const detectionGui = gui.addFolder('detection');
        // const sketchGui = gui.addFolder('sketch');
        //
        // let poseDetection = new PoseDetection(video, mobile());
        // const { videoHeight, videoWidth } = videoSize();
        // poseDetection.initPoseDetection().then(() => {
        //     setupSketch(poseDetection, video, videoWidth, videoHeight);
        //     initSketchGui(sketchGui);
        // });
        // poseDetection.initGui(detectionGui);
    // })
    usePageEvent('onReady', () => {
        console.log('onReady', 3);
        // const camera = createCameraContext();
        // console.log(camera);
    })
    usePageEvent('onShow', () => {
        console.log('onShow', 2);
    })
    usePageEvent('onLoad', () => {
        console.log('onLoad', 1);
    })

    return (
        <View>
            <View>1234567</View>
            <video id="video" />
            <canvas id="output" />
        </View>
    );
};
