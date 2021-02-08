import React, { useState } from 'react';
import { sizing } from '@material-ui/system';
import Popup from "reactjs-popup";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { borders } from '@material-ui/system';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';

const Gif = ({GIF})=> {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    
    
    

    
        return( 
                <>
                    <div>
                        <img src={GIF.images.downsized_medium.url} border={1}  onClick={() => setOpen(o => !o)} width="100%" height={300}/>
                        <div>
                           
                            <Popup open={open} closeOnDocumentClick onClose={closeModal}>

                                <Card border={1} className="modal">
                                <CardActions>
                                    <Button size="large" onClick={closeModal} ><CloseSharpIcon fontSize="large" /></Button>
                                </CardActions>
                                    <CardContent >
                                        <img src={GIF.images.downsized_large.url}  width={700}  />
                                    </CardContent>
                                </Card>
                            </Popup>
                     </div>


                        
                     </div>

                </>
            )
 }

export default Gif;
