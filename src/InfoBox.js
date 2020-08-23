import React from 'react';
import './InfoBox.css';
import { Card, CardContent, Typography} from '@material-ui/core';

const InfoBox = ({title, cases, total, isRed, active, ...props }) => {
    return(
        <Card 
            onClick={props.onClick}    
            className={`infobox ${active && "infobox__selected"} ${isRed && "infobox__red"}`} >
                <CardContent>
                    <Typography 
                        color="textSecondary" 
                        className="infobox__title">
                            {title}
                    </Typography>
                
                    <h2 className={`infobox__cases ${!isRed && "infobox__cases__green"}`}>
                        {cases}
                    </h2>
                
                    <Typography 
                        color="textSecondary" 
                        className="infobox__total">
                        {total} Total
                    </Typography>        
                </CardContent>
        </Card>
    )
}

export default InfoBox;