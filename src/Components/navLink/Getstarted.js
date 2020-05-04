import React from 'react';
import Apps from './Form'

const styles = {
    dialogBackdrop: {
        position: "absolute",
        display: "flex",
        left: 0,
        right: 0,
        width: 0,
        height: "30rem",
        top: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)"
    },
    dialogContainer: {
        background:"white",
        color: "black",
        borderRadius: 5,
        width: "35rem",
        right: '10rem',
        margin: 50,
        padding: 46,
        minHeight: 150,
        position: 'absolute',
        display: "flex",
        flexDirection: "column",
        alignItems: 'flex-start',
        justifyContent: "center"
    },
    started:{
        position: "absolute",
        justifySelf: "center",
        alignItems: "center",
        textAlign: "center",
        marginTop: "10px",
        marginRight: "10px",
        padding: "5px",
        height: "40px",
        display: "content",
        color: "#333333",
        backgroundColor: "F2C94C",
        fontSize: "20px",
        fontWeight: "normal",
        borderRadius: "10px",
      },
    Getstarted: {width: "100%", height:"60%"}

};


function Getstarted() {
const [dialogVisible, setDialogVisible] = React.useState(false);
const dialog = (
    <div style={styles.dialogBackdrop}>
        <div style={styles.dialogContainer}>
        {<Apps />}
            <button 
            onClick={()=> {
                setDialogVisible(false);
            }}> 
      close</button>
            
        </div>
    </div>
);
      return(
          <div style={styles.Getstarted}>
               
              <button 
              onClick={()=> {
                  setDialogVisible(true);
              }}>show dialog</button>
              {dialogVisible && dialog}
          </div>
           )
         
      }
    


export default Getstarted
