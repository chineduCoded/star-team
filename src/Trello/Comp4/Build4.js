import React from 'react'
import { Comp4 } from './Comp4'
import view from "../assets/view.svg"
import cardback from "../assets/cardback.svg"
import automation from "../assets/automation.png"
import powerups from "../assets/powerups.png"



export const Build4 = () => {
    return (
        <div>
            <Comp4 text="CHOOSE A VIEW" img={view} note="The board is just the beginning" naration="Lists and cards are the building blocks of organizing work on a Trello board. Grow from there with task assignments, timelines, productivity metrics, calendars, and more."/>

            <Comp4 chn text="DIVE INTO THE DETAILS" img={cardback} note="Cards contain everything you need" naration="Trello cards are your portal to more organized work—where every single part of your task can be managed, tracked, and shared with teammates. Open any card to uncover an ecosystem of checklists, due dates, attachments, conversations, and more."/>

            <Comp4 text="MEET YOUR NEW BUTLER" img={automation} note="No-code automation" naration="Let the robots do the work—so your team can focus on work that matters. With Trello’s built-in automation, Butler, reduce the number of tedious tasks (and clicks) on your project board by harnessing the power of automation across your entire team.
"/>

            <Comp4  chn text="POWER-UPS" img={powerups}
            note="Integrate top work tools" naration="Easily connect the apps your team already uses into your Trello workflow, or add a Power-Up that helps fine-tune one specific need. With hundreds of Power-Ups available, your team’s workflow wishes are covered."/>
        </div>
    )
}
