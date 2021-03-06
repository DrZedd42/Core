import React, { Component } from 'react'

import './HomePanel.css'

class HomePanel extends Component {
  render() {
    return (
        <div id='dashboard_container' className="pre-scrollable">
            <div id="dashboard_content" className="page_content">
                <h2>Welcome to BattleDrome Beta!</h2>
                <p>Well again, it's been a long and bumpy road, but we've overcome all the challenges leading up to this point. And we're finally able to release the BattleDrome Beta DApp to all of you to try out!</p>
                <p>Please keep in mind, that the beta is not the finished product, and there are still some features of the final solution missing, specifically:</p>
                <ul>
                    <li>The UI is still not 100% complete, it may evolve further</li>
                    <li>The Graphical Combat Engine is not done yet, for now only a combat log is shown as combat completes</li>
                    <li>FAME tokens are still not integrated into the game, we are currently still using Finney in their place.</li>
                </ul>
                <p>In addition, keep in mind, there WILL still be bugs in the Beta. That's the reason we're releasing it now, to get wider testing of the game, and confirm these issues get nailed before final release.</p>
                <p>Here is a list of a few things to be aware of going into the test (for a full list of known issues, please see the issues section in the github project):</p>
                <ul>
                    <li>Constant verification of transactions is a bit cumbersome, but unavoidable at this time due to the 100% decentralized nature of the game.</li>
                    <li>We have improved stability and responsiveness of the UI greatly from the Alpha, however with a large number of events and warriors, it will get a bit sluggish in some browsers, and on some machines. We are still working to optimize this.</li>
                    <li>While we have done extensive testing of the combat algorithms, again without extensive public testing, it's difficult to effectively balance them. We're hoping the Beta will allow us to further tune the combat to be well balanced. We do have many dials to turn to do this, we simply need the input from further testing to see in which was the game and combat become unbalanced under use (or abuse!)</li>
                    <li>YES! We are aware the gender of a warrior is set randomly at creation time, and you have no control. This is intentional...</li>
                    <li>When you set the name of a warrior it is PERMENANT, and cannot be changed after that time. This is also intentional...</li>
                    <li>We are aware that the graphical rendering of the warriors (still) has some minor glitches, under certain exceptional circumstances... We've mostly fixed these issues from the Alpha, but in some very rare cases they pop up, if you see this, please report it so we can further nail down the root cause</li>
                </ul>
                <p>Keeping these things in mind, please get into the game, try it out, and have fun! And don't hesitate to send us your
                    feedback via github!</p>
                <p>Since the Beta code is now open-source, please don't hesitate to give us PRs for improvements if you feel motivated
                    to participate. We continue to develop in our private development environment, but will be incorporating PRs and
                    bugfixes directly in github. Then when the next major release is merged into the gitlab environment, we'll back-port
                    any valuable additions/improvements from the community!</p>
                <h3>Instructions</h3>
                <p>Please follow these instructions to participate in the beta, and ensure you have a (hopefully) smooth experience:</p>
                <ul>
                    <li>Install Metamask in your browser and set it up according their setup instructions</li>
                    <li><b>DO NOT</b> use your live ethereum main-net account for interacting with BattleDrome</li>
                    <li>Ensure you're targeting the right network. Keep in mind BattleDrome currently runs on the Rinkeby Test Net</li>
                    <li>Get some Ether into your account, on Rinkeby this can be done via the Rinkeby Faucet at:
                        <a href="https://faucet.rinkeby.io/">https://faucet.rinkeby.io/</a> you need to take the address for an account generated by metamask, and share it
                        via Twitter or some other accepted social network, then use the web form to request ether from the faucet.</li>
                    <li>Now access this page, ensure your metamask den is unlocked (the page should prompt you with a notice if it is not)</li>
                    <li>If metamask prompts you to allow BattleDrome to access your wallet, you must allow if you wish to play the game</li>
                    <li>At this point you can use the tabs at the top of the page to navigate objects such as Warriors and Events, and use
                        the Create buttons to begin creating your first Warrior or Event!</li>
                </ul>
                <p>For further instructions, please see the Docs tab at the top of the page.</p>
            </div>
        </div>
    );
  }
}

export default HomePanel
