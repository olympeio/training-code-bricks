import { VisualBrick, registerBrick } from 'olympe';

//react imports
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

//RxJS imports
import {combineLatest} from 'rxjs';

export default class BarChart extends VisualBrick {

    /**
     * @override
     */
    setupExecution($) {
        return combineLatest([
            $.observe('legend'),
            $.observe('labels'),
            $.observe('data')
        ]);
    }

    /**
     * @override
     */
    updateParent(parent, element) {
        ReactDOM.render(element, parent);
        return () => {
            ReactDOM.unmountComponentAtNode(parent);
        };
    }

    /**
     * This method runs when the brick is ready in the HTML DOM.
     *
     * @override
     * @param {!BrickContext} $
     * @param {string} legend
     * @param {string} label
     * @param {string} data
     */
    render($, [legend, labels, data]) {
        return (<Bar
            data={{
                labels: labels.split(','),
                datasets: [{label: legend, data: data.split(',')}]
            }}
            options={{ maintainAspectRatio: false }}
        />);
    }
}

registerBrick('017d6cbc79bf86dad51e', BarChart);
