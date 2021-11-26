import { UIBrick, registerBrick } from 'olympe';

//react imports
import React from 'react';
import ReactDOM from 'react-dom';

import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

//RxJS imports
import {combineLatest} from 'rxjs';

export default class BarChart extends UIBrick {

    /**
     * This method runs when the brick is ready in the HTML DOM.
     * @override
     * @param {!UIContext} context
     * @param {!Element} elementDom
     */
    draw(context, elementDom) {
        combineLatest([
            context.getProperty('legend').observe(),
            context.getProperty('labels').observe(),
            context.getProperty('data').observe()
        ]).subscribe(([title, labels, data]) => {
            ReactDOM.render(
                <ChartRenderer
                    title={title}
                    labels={labels.split(',')}
                    data={data.split(',')}
                />,
                elementDom
            );
        });
    }
}

const ChartRenderer = (props) => {
    return (<Bar
        data={{
            labels: props.labels,
            datasets: [{label: props.title, data: props.data}]
        }}
        options={{ maintainAspectRatio: false }}
    />);
};

registerBrick('017d6cbc79bf86dad51e', BarChart);
