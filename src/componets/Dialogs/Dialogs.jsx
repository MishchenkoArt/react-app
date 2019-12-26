import React from 'react';
import classes from './Dialogs.module.css';


const Dialogs =()=>{
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog+ ' '+ classes.active}>
                    Dimych
                </div>
                <div className={classes.dialog}>
                    Andry
                </div>
                <div className={classes.dialog}>
                    Elena
                </div>
                <div className={classes.dialog}>
                    Max
                </div>
                <div className={classes.dialog}>
                    Marina
                </div>
                <div className={classes.dialog}>
                    Ihor
                </div>

            </div>
            <div className ={classes.massages}>
                <div className ={classes.massage}>Hi</div>
                <div className ={classes.massage}>How are you?</div>
                <div className ={classes.massage}>Yo</div>
            </div>
        </div>
    );
};
export default Dialogs;