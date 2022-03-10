import React, { useState } from 'react'
import NextDayButton from './NextDayButton'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { autocompleteClasses } from '@material-ui/core';
import { flexbox } from '@material-ui/system';
import styled from 'styled-components';
import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';

function MakeMenuButtons({ menu, money, handleMenu, setWeather, weather, setOrders, setDisplayCafeGif, setShowMain, isClicked, setIsClicked}) {
  const [open, setOpen] = useState(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 320,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

    function handleClose() {
      setOpen(false);
    }

    function handleAddItemsToMenu() {
        if (money > 0) {
          setIsClicked(true)
          handleMenu()
          //onHandleAddItems(isClicked)
        } else {
          setOpen(true);
        }
    }

    function handleNewDayClick() {
      setIsClicked(false)
      setDisplayCafeGif(true)
      setShowMain(false)
    

      fetch("http://localhost:9292/menuitems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          },
        body: JSON.stringify({
          menu
        })
      })


      fetch(`http://localhost:9292/orders/20/${weather}`)
      .then(res => res.json())
      .then(data => setOrders(() => data))
    }

  return (
    <div className='vertical'>
        
        {isClicked ? <NextDayButton handleNewDayClick={handleNewDayClick} /> : 
          <button onClick={handleAddItemsToMenu}>Add all items to menu</button>
          }

    <Modal
        open={open}
        //onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
    >
      <Box sx={style}>
        <div style={{display: 'flex', justifyContent: 'right'}}>
        <button onClick={handleClose}>x</button>
        </div>
        <Typography id="modal-modal-title" variant="h6" component="h2"
        style={{display: 'flex', justifyContent: 'center'}}>
          Not enough moneys :(
        </Typography>
      </Box>
    </Modal>
    </div>
  )
}

export default MakeMenuButtons