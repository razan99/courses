import React from "react";
import ToolLeft from './ToolLeft'
import ToolRight from './ToolRight'
import s from './standard.png'
import sublist from './sublist.png'

export default class Tool extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            educatioanl: [
                {
                    title: 'Excel Assignments',
                    subTitle: ['Allows you to customize Excel assignments', 'self-corrects students\' answers',
                        'Detects possible plagiarism'],
                    img: { src: s },
                    left: true
                },
                {
                    title: 'Cases',
                    subTitle: ['Allows you to choose from a number of modules.', 'Supports different accounting methods.',
                    'Offers multiple versions for students.'],
                    img: { src: sublist },
                    left: false
                },
                {
                    title: 'Quizzes',
                    subTitle: ['Provides access to task banks and practice question banks for selected courses.', 'Creates unique versions for students.',
                    'Includes accounting-specific templates,such as balance sheets,trial balances, and financial statments.', 'Self-corrects students\' answers.',
                    'Generates reports on Student performance.'],
                    img: { src: s },
                    left: true
                },
                {
                    title: 'Simulation Game',
                    subTitle: ['Offers students an interactive learning experiance.', 'Allows students to make decisions throughout the game.',
                    'Supports differnt accounting methods.', 'Self-correct students\' answers.'],
                    img: { src: sublist },
                    left: false
                },
                {
                    title: 'Animation Videos',
                    subTitle: ['Bite-sized videos, explaining topics to students, witch link to modules, quizzes, assigments, cases and simulation games.'],
                    img: { src: s },
                    left: true
                },
            ]
        };
    }
    render() {
        return (
            <React.Fragment>
                {this.state.educatioanl.map((tool) => {
                    if (tool.left) {
                        return <ToolLeft img={tool.img} title={tool.title} subTitle={tool.subTitle} />
                    } else {
                        return <ToolRight img={tool.img} title={tool.title} subTitle={tool.subTitle} />
                    }
                })}
            </React.Fragment>
        )
    }
}
