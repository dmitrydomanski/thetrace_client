import React, { Component } from 'react'
import classes from './CardFooterOverlay.css'


export default class CardFooterOverlay extends Component {


    render() {
        return (

            <div className={classes.CardFooterOverlay}>
                {!this.props.parent?
                    <div className={classes.OverlayLink}>add parent</div> : null
                }
                <div className={classes.OverlayLink}>add child</div>
            </div>
        )

    }
}