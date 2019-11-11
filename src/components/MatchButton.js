import React from 'react'
import { Icon } from "semantic-ui-react";


const handleClick = (e) => {
  console.log(e)
}

const MatchButton = () => {
  return(
        <Icon name="heart" color="red" onClick={handleClick} />
      )
}

export default MatchButton
