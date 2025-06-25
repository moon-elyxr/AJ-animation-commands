module.exports = function ({ dispatch }) {
  let active = false

  /**
   * Handles the humongous command. 
   * @returns 
   */
  const handleHumongousCommand = ({ parameters }) => {
    active = true

    size = parseInt(parameters[0]) || 1
    dispatch.serverMessage('Congrats! you are sitting north.')
  }

  /**
   * Handles movement updates.
   * @param {Object} param The parameter object.
   * @param {Object} param.message The message object.
   * @returns 
   */
  const handleMovementUpdate = ({ message }) => {
    if (!active) return

    const x = message.value[6]
    const y = message.value[7]
    
    message.send = false
    dispatch.sendRemoteMessage(`%xt%o%au%839225%1%${x}%${y}%${size}%1%`)
  }


  /**
   * Handles movement updates.
   */
  dispatch.onMessage({
    type: 'connection',
    message: 'au',
    callback: handleMovementUpdate
  })

  /**
   * Handles humongous command.
   */
  dispatch.onCommand({
    name: 'Sit N',
    description: 'sits north',
    callback: handleHumongousCommand
  })
}
module.exports = function ({ dispatch }) {
  let active = false

  /**
   * Handles the humongous command. 
   * @returns 
   */
  const handleHumongousCommand = ({ parameters }) => {
    active = true

    size = parseInt(parameters[0]) || 7
    dispatch.serverMessage('Congrats! you are sitting east')
  }

  /**
   * Handles movement updates.
   * @param {Object} param The parameter object.
   * @param {Object} param.message The message object.
   * @returns 
   */
  const handleMovementUpdate = ({ message }) => {
    if (!active) return

    const x = message.value[6]
    const y = message.value[7]
    
    message.send = false
    dispatch.sendRemoteMessage(`%xt%o%au%839225%1%${x}%${y}%${size}%1%`)
  }


  /**
   * Handles movement updates.
   */
  dispatch.onMessage({
    type: 'connection',
    message: 'au',
    callback: handleMovementUpdate
  })

  /**
   * Handles humongous command.
   */
  dispatch.onCommand({
    name: 'Sit E',
    description: 'sits east',
    callback: handleHumongousCommand
  })
}
module.exports = function ({ dispatch }) {
  let active = false

  /**
   * Handles the humongous command. 
   * @returns 
   */
  const handleHumongousCommand = ({ parameters }) => {
    active = true

    size = parseInt(parameters[0]) || 3
    dispatch.serverMessage('Congrats! you are sitting west.')
  }

  /**
   * Handles movement updates.
   * @param {Object} param The parameter object.
   * @param {Object} param.message The message object.
   * @returns 
   */
  const handleMovementUpdate = ({ message }) => {
    if (!active) return

    const x = message.value[6]
    const y = message.value[7]
    
    message.send = false
    dispatch.sendRemoteMessage(`%xt%o%au%839225%1%${x}%${y}%${size}%1%`)
  }


  /**
   * Handles movement updates.
   */
  dispatch.onMessage({
    type: 'connection',
    message: 'au',
    callback: handleMovementUpdate
  })

  /**
   * Handles humongous command.
   */
  dispatch.onCommand({
    name: 'Sit S',
    description: 'sits south',
    callback: handleHumongousCommand
  })
}
module.exports = function ({ dispatch }) {
  let active = false

  /**
   * Handles the humongous command. 
   * @returns 
   */
  const handleHumongousCommand = ({ parameters }) => {
    active = true

    size = parseInt(parameters[0]) || 5
    dispatch.serverMessage('Congrats! You are sitting south. You look like dogbowls.')
  }

  /**
   * Handles movement updates.
   * @param {Object} param The parameter object.
   * @param {Object} param.message The message object.
   * @returns 
   */
  const handleMovementUpdate = ({ message }) => {
    if (!active) return

    const x = message.value[6]
    const y = message.value[7]
    
    message.send = false
    dispatch.sendRemoteMessage(`%xt%o%au%839225%1%${x}%${y}%${size}%1%`)
  }


  /**
   * Handles movement updates.
   */
  dispatch.onMessage({
    type: 'connection',
    message: 'au',
    callback: handleMovementUpdate
  })

  /**
   * Handles humongous command.
   */
  dispatch.onCommand({
    name: 'Sit S',
    description: 'perfect for dogbowls.',
    callback: handleHumongousCommand
  })
}
module.exports = function ({ dispatch }) {
  let active = false

  /**
   * Handles the humongous command. 
   * @returns 
   */
  const handleHumongousCommand = ({ parameters }) => {
    active = true

    size = parseInt(parameters[0]) || 9
    dispatch.serverMessage('yeah girl get your steps in')
  }

  /**
   * Handles movement updates.
   * @param {Object} param The parameter object.
   * @param {Object} param.message The message object.
   * @returns 
   */
  const handleMovementUpdate = ({ message }) => {
    if (!active) return

    const x = message.value[6]
    const y = message.value[7]
    
    message.send = false
    dispatch.sendRemoteMessage(`%xt%o%au%839225%1%${x}%${y}%${size}%1%`)
  }


  /**
   * Handles movement updates.
   */
  dispatch.onMessage({
    type: 'connection',
    message: 'au',
    callback: handleMovementUpdate
  })

  /**
   * Handles humongous command.
   */
  dispatch.onCommand({
    name: 'Run E',
    description: 'run east',
    callback: handleHumongousCommand
  })
}
module.exports = function ({ dispatch }) {
  let active = false

  /**
   * Handles the humongous command. 
   * @returns 
   */
  const handleHumongousCommand = ({ parameters }) => {
    active = true

    size = parseInt(parameters[0]) || 10
    dispatch.serverMessage('yeah girl get your steps in')
  }

  /**
   * Handles movement updates.
   * @param {Object} param The parameter object.
   * @param {Object} param.message The message object.
   * @returns 
   */
  const handleMovementUpdate = ({ message }) => {
    if (!active) return

    const x = message.value[6]
    const y = message.value[7]
    
    message.send = false
    dispatch.sendRemoteMessage(`%xt%o%au%839225%1%${x}%${y}%${size}%1%`)
  }


  /**
   * Handles movement updates.
   */
  dispatch.onMessage({
    type: 'connection',
    message: 'au',
    callback: handleMovementUpdate
  })

  /**
   * Handles humongous command.
   */
  dispatch.onCommand({
    name: 'Run SE',
    description: 'runs southeast ',
    callback: handleHumongousCommand
  })
}
module.exports = function ({ dispatch }) {
  let active = false

  /**
   * Handles the humongous command. 
   * @returns 
   */
  const handleHumongousCommand = ({ parameters }) => {
    active = true

    size = parseInt(parameters[0]) || 11
    dispatch.serverMessage('yeah girl get your steps in')
  }

  /**
   * Handles movement updates.
   * @param {Object} param The parameter object.
   * @param {Object} param.message The message object.
   * @returns 
   */
  const handleMovementUpdate = ({ message }) => {
    if (!active) return

    const x = message.value[6]
    const y = message.value[7]
    
    message.send = false
    dispatch.sendRemoteMessage(`%xt%o%au%839225%1%${x}%${y}%${size}%1%`)
  }


  /**
   * Handles movement updates.
   */
  dispatch.onMessage({
    type: 'connection',
    message: 'au',
    callback: handleMovementUpdate
  })

  /**
   * Handles humongous command.
   */
  dispatch.onCommand({
    name: 'Run S',
    description: 'runs south ',
    callback: handleHumongousCommand
  })
}
module.exports = function ({ dispatch }) {
  let active = false

  /**
   * Handles the humongous command. 
   * @returns 
   */
  const handleHumongousCommand = ({ parameters }) => {
    active = true

    size = parseInt(parameters[0]) || 24
    dispatch.serverMessage('leaping for joy, huh?')
  }

  /**
   * Handles movement updates.
   * @param {Object} param The parameter object.
   * @param {Object} param.message The message object.
   * @returns 
   */
  const handleMovementUpdate = ({ message }) => {
    if (!active) return

    const x = message.value[6]
    const y = message.value[7]
    
    message.send = false
    dispatch.sendRemoteMessage(`%xt%o%au%839225%1%${x}%${y}%${size}%1%`)
  }


  /**
   * Handles movement updates.
   */
  dispatch.onMessage({
    type: 'connection',
    message: 'au',
    callback: handleMovementUpdate
  })

  /**
   * Handles humongous command.
   */
  dispatch.onCommand({
    name: 'Sky High leap',
    description: 'plays the Sky High leaping animation. Cant change character models ',
    callback: handleHumongousCommand
  })
}
module.exports = function ({ dispatch }) {
  let active = false

  /**
   * Handles the humongous command. 
   * @returns 
   */
  const handleHumongousCommand = ({ parameters }) => {
    active = true

    size = parseInt(parameters[0]) || 21
    dispatch.serverMessage('Jumping jacks. NOW')
  }

  /**
   * Handles movement updates.
   * @param {Object} param The parameter object.
   * @param {Object} param.message The message object.
   * @returns 
   */
  const handleMovementUpdate = ({ message }) => {
    if (!active) return

    const x = message.value[6]
    const y = message.value[7]
    
    message.send = false
    dispatch.sendRemoteMessage(`%xt%o%au%839225%1%${x}%${y}%${size}%1%`)
  }


  /**
   * Handles movement updates.
   */
  dispatch.onMessage({
    type: 'connection',
    message: 'au',
    callback: handleMovementUpdate
  })

  /**
   * Handles humongous command.
   */
  dispatch.onCommand({
    name: 'Sky High jump',
    description: 'plays the Sky High jumping animation.',
    callback: handleHumongousCommand
  })
}
module.exports = function ({ dispatch }) {
  let active = false

  /**
   * Handles the humongous command. 
   * @returns 
   */
  const handleHumongousCommand = ({ parameters }) => {
    active = true

    size = parseInt(parameters[0]) || 28
    dispatch.serverMessage('ngl i cant think of anything for this. dont forget to rejoin ig')
  }

  /**
   * Handles movement updates.
   * @param {Object} param The parameter object.
   * @param {Object} param.message The message object.
   * @returns 
   */
  const handleMovementUpdate = ({ message }) => {
    if (!active) return

    const x = message.value[6]
    const y = message.value[7]
    
    message.send = false
    dispatch.sendRemoteMessage(`%xt%o%au%839225%1%${x}%${y}%${size}%1%`)
  }


  /**
   * Handles movement updates.
   */
  dispatch.onMessage({
    type: 'connection',
    message: 'au',
    callback: handleMovementUpdate
  })

  /**
   * Handles humongous command.
   */
  dispatch.onCommand({
    name: 'Sky High hop',
    description: 'plays the Sky High hopping animation. Looks like your animal is reaching ',
    callback: handleHumongousCommand
  })
}
module.exports = function ({ dispatch }) {
  let active = false

  /**
   * Handles the humongous command. 
   * @returns 
   */
  const handleHumongousCommand = ({ parameters }) => {
    active = true

    size = parseInt(parameters[0]) || 30
    dispatch.serverMessage('You are landing like a cat')
  }

  /**
   * Handles movement updates.
   * @param {Object} param The parameter object.
   * @param {Object} param.message The message object.
   * @returns 
   */
  const handleMovementUpdate = ({ message }) => {
    if (!active) return

    const x = message.value[6]
    const y = message.value[7]
    
    message.send = false
    dispatch.sendRemoteMessage(`%xt%o%au%839225%1%${x}%${y}%${size}%1%`)
  }


  /**
   * Handles movement updates.
   */
  dispatch.onMessage({
    type: 'connection',
    message: 'au',
    callback: handleMovementUpdate
  })

  /**
   * Handles humongous command.
   */
  dispatch.onCommand({
    name: 'Sky High landing',
    description: 'plays the Sky High landing animation ',
    callback: handleHumongousCommand
  })
}
module.exports = function ({ dispatch }) {
  let active = false

  /**
   * Handles the humongous command. 
   * @returns 
   */
  const handleHumongousCommand = ({ parameters }) => {
    active = true

    size = parseInt(parameters[0]) || 31
    dispatch.serverMessage('what are you looking for?')
  }

  /**
   * Handles movement updates.
   * @param {Object} param The parameter object.
   * @param {Object} param.message The message object.
   * @returns 
   */
  const handleMovementUpdate = ({ message }) => {
    if (!active) return

    const x = message.value[6]
    const y = message.value[7]
    
    message.send = false
    dispatch.sendRemoteMessage(`%xt%o%au%839225%1%${x}%${y}%${size}%1%`)
  }


  /**
   * Handles movement updates.
   */
  dispatch.onMessage({
    type: 'connection',
    message: 'au',
    callback: handleMovementUpdate
  })

  /**
   * Handles humongous command.
   */
  dispatch.onCommand({
    name: 'Sky High crouch',
    description: 'plays the Sky High crouching animation. ',
    callback: handleHumongousCommand
  })
}
module.exports = function ({ dispatch }) {
  let active = false

  /**
   * Handles the humongous command. 
   * @returns 
   */
  const handleHumongousCommand = ({ parameters }) => {
    active = true

    size = parseInt(parameters[0]) || 18
    dispatch.serverMessage('jumping just north east')
  }

  /**
   * Handles movement updates.
   * @param {Object} param The parameter object.
   * @param {Object} param.message The message object.
   * @returns 
   */
  const handleMovementUpdate = ({ message }) => {
    if (!active) return

    const x = message.value[6]
    const y = message.value[7]
    
    message.send = false
    dispatch.sendRemoteMessage(`%xt%o%au%839225%1%${x}%${y}%${size}%1%`)
  }


  /**
   * Handles movement updates.
   */
  dispatch.onMessage({
    type: 'connection',
    message: 'au',
    callback: handleMovementUpdate
  })

  /**
   * Handles humongous command.
   */
  dispatch.onCommand({
    name: 'Hop NE',
    description: 'hopps northeast ',
    callback: handleHumongousCommand
  })
}
module.exports = function ({ dispatch }) {
  let active = false

  /**
   * Handles the humongous command. 
   * @returns 
   */
  const handleHumongousCommand = ({ parameters }) => {
    active = true

    size = parseInt(parameters[0]) || 33
    dispatch.serverMessage('flying in a circle')
  }

  /**
   * Handles movement updates.
   * @param {Object} param The parameter object.
   * @param {Object} param.message The message object.
   * @returns 
   */
  const handleMovementUpdate = ({ message }) => {
    if (!active) return

    const x = message.value[6]
    const y = message.value[7]
    
    message.send = false
    dispatch.sendRemoteMessage(`%xt%o%au%839225%1%${x}%${y}%${size}%1%`)
  }


  /**
   * Handles movement updates.
   */
  dispatch.onMessage({
    type: 'connection',
    message: 'au',
    callback: handleMovementUpdate
  })

  /**
   * Handles humongous command.
   */
  dispatch.onCommand({
    name: 'Swirl',
    description: 'swirl on land !!HYBRID ANIMAL REQ.!! ',
    callback: handleHumongousCommand
  })
}
module.exports = function ({ dispatch }) {
  let active = false

  /**
   * Handles the humongous command. 
   * @returns 
   */
  const handleHumongousCommand = ({ parameters }) => {
    active = true

    size = parseInt(parameters[0]) || 34
    dispatch.serverMessage('thse are actually so fun what')
  }

  /**
   * Handles movement updates.
   * @param {Object} param The parameter object.
   * @param {Object} param.message The message object.
   * @returns 
   */
  const handleMovementUpdate = ({ message }) => {
    if (!active) return

    const x = message.value[6]
    const y = message.value[7]
    
    message.send = false
    dispatch.sendRemoteMessage(`%xt%o%au%839225%1%${x}%${y}%${size}%1%`)
  }


  /**
   * Handles movement updates.
   */
  dispatch.onMessage({
    type: 'connection',
    message: 'au',
    callback: handleMovementUpdate
  })

  /**
   * Handles humongous command.
   */
  dispatch.onCommand({
    name: 'Seasaw',
    description: 'play on an invisible seasaw !!HYBRID ANIMAL REQ.!!',
    callback: handleHumongousCommand
  })
}
module.exports = function ({ dispatch }) {
  let active = false

  /**
   * Handles the humongous command. 
   * @returns 
   */
  const handleHumongousCommand = ({ parameters }) => {
    active = true

    size = parseInt(parameters[0]) || 36
    dispatch.serverMessage('peter how are you doing that')
  }

  /**
   * Handles movement updates.
   * @param {Object} param The parameter object.
   * @param {Object} param.message The message object.
   * @returns 
   */
  const handleMovementUpdate = ({ message }) => {
    if (!active) return

    const x = message.value[6]
    const y = message.value[7]
    
    message.send = false
    dispatch.sendRemoteMessage(`%xt%o%au%839225%1%${x}%${y}%${size}%1%`)
  }


  /**
   * Handles movement updates.
   */
  dispatch.onMessage({
    type: 'connection',
    message: 'au',
    callback: handleMovementUpdate
  })

  /**
   * Handles humongous command.
   */
  dispatch.onCommand({
    name: 'Swim up',
    description: 'swim up, pretty self explanitory- !!HYBRID ANIMAL REQ.!',
    callback: handleHumongousCommand
  })
}
module.exports = function ({ dispatch }) {
  let active = false

  /**
   * Handles the humongous command. 
   * @returns 
   */
  const handleHumongousCommand = ({ parameters }) => {
    active = true

    size = parseInt(parameters[0]) || 37
    dispatch.serverMessage('where are you going? youre swimming down')
  }

  /**
   * Handles movement updates.
   * @param {Object} param The parameter object.
   * @param {Object} param.message The message object.
   * @returns 
   */
  const handleMovementUpdate = ({ message }) => {
    if (!active) return

    const x = message.value[6]
    const y = message.value[7]
    
    message.send = false
    dispatch.sendRemoteMessage(`%xt%o%au%839225%1%${x}%${y}%${size}%1%`)
  }


  /**
   * Handles movement updates.
   */
  dispatch.onMessage({
    type: 'connection',
    message: 'au',
    callback: handleMovementUpdate
  })

  /**
   * Handles humongous command.
   */
  dispatch.onCommand({
    name: 'Swim down',
    description: 'swim down- exactly like swimming up, but down- what were you expecting? !!HYBRID ANIMAL REQ.!!',
    callback: handleHumongousCommand
  })
}
module.exports = function ({ dispatch }) {
  let active = false

  /**
   * Handles the humongous command. 
   * @returns 
   */
  const handleHumongousCommand = ({ parameters }) => {
    active = true

    size = parseInt(parameters[0]) || 29
    dispatch.serverMessage('youre swimming east now')
  }

  /**
   * Handles movement updates.
   * @param {Object} param The parameter object.
   * @param {Object} param.message The message object.
   * @returns 
   */
  const handleMovementUpdate = ({ message }) => {
    if (!active) return

    const x = message.value[6]
    const y = message.value[7]
    
    message.send = false
    dispatch.sendRemoteMessage(`%xt%o%au%839225%1%${x}%${y}%${size}%1%`)
  }


  /**
   * Handles movement updates.
   */
  dispatch.onMessage({
    type: 'connection',
    message: 'au',
    callback: handleMovementUpdate
  })

  /**
   * Handles humongous command.
   */
  dispatch.onCommand({
    name: 'Swim E',
    description: 'swim east. !!HYBRID ANIMAL REQ.!!',
    callback: handleHumongousCommand
  })
}
module.exports = function ({ dispatch }) {
  let active = false

  /**
   * Handles the humongous command. 
   * @returns 
   */
  const handleHumongousCommand = ({ parameters }) => {
    active = true

    size = parseInt(parameters[0]) || 38
    dispatch.serverMessage('youre dancing in mid air!')
  }

  /**
   * Handles movement updates.
   * @param {Object} param The parameter object.
   * @param {Object} param.message The message object.
   * @returns 
   */
  const handleMovementUpdate = ({ message }) => {
    if (!active) return

    const x = message.value[6]
    const y = message.value[7]
    
    message.send = false
    dispatch.sendRemoteMessage(`%xt%o%au%839225%1%${x}%${y}%${size}%1%`)
  }


  /**
   * Handles movement updates.
   */
  dispatch.onMessage({
    type: 'connection',
    message: 'au',
    callback: handleMovementUpdate
  })

  /**
   * Handles humongous command.
   */
  dispatch.onCommand({
    name: 'Underwater dance',
    description: 'plays the underwater dance animation anywhere. !!HYBRID ANIMAL REQ.!! ',
    callback: handleHumongousCommand
  })
}
module.exports = function ({ dispatch }) {
  let active = false

  /**
   * Handles the humongous command. 
   * @returns 
   */
  const handleHumongousCommand = ({ parameters }) => {
    active = true

    size = parseInt(parameters[0]) || 41
    dispatch.serverMessage('this is getting repetitive. youre diving rn homie')
  }

  /**
   * Handles movement updates.
   * @param {Object} param The parameter object.
   * @param {Object} param.message The message object.
   * @returns 
   */
  const handleMovementUpdate = ({ message }) => {
    if (!active) return

    const x = message.value[6]
    const y = message.value[7]
    
    message.send = false
    dispatch.sendRemoteMessage(`%xt%o%au%839225%1%${x}%${y}%${size}%1%`)
  }


  /**
   * Handles movement updates.
   */
  dispatch.onMessage({
    type: 'connection',
    message: 'au',
    callback: handleMovementUpdate
  })

  /**
   * Handles humongous command.
   */
  dispatch.onCommand({
    name: 'Underwater dive',
    description: 'Dive into thin air. !!HYBRID ANIMAL REQ.!! ',
    callback: handleHumongousCommand
  })
}
module.exports = function ({ dispatch }) {
  let active = false

  /**
   * Handles the humongous command. 
   * @returns 
   */
  const handleHumongousCommand = ({ parameters }) => {
    active = true

    size = parseInt(parameters[0]) || 34
    dispatch.serverMessage('playing underwater')
  }

  /**
   * Handles movement updates.
   * @param {Object} param The parameter object.
   * @param {Object} param.message The message object.
   * @returns 
   */
  const handleMovementUpdate = ({ message }) => {
    if (!active) return

    const x = message.value[6]
    const y = message.value[7]
    
    message.send = false
    dispatch.sendRemoteMessage(`%xt%o%au%839225%1%${x}%${y}%${size}%1%`)
  }


  /**
   * Handles movement updates.
   */
  dispatch.onMessage({
    type: 'connection',
    message: 'au',
    callback: handleMovementUpdate
  })

  /**
   * Handles humongous command.
   */
  dispatch.onCommand({
    name: 'Underwater play',
    description: 'plays the underwater play animation anywhere. !!HYBRID ANIMAL REQ.!! ',
    callback: handleHumongousCommand
  })
}
module.exports = function ({ dispatch }) {
  let active = false

  /**
   * Handles the humongous command. 
   * @returns 
   */
  const handleHumongousCommand = ({ parameters }) => {
    active = true

    size = parseInt(parameters[0]) || 40
    dispatch.serverMessage('pose! work it girl!')
  }

  /**
   * Handles movement updates.
   * @param {Object} param The parameter object.
   * @param {Object} param.message The message object.
   * @returns 
   */
  const handleMovementUpdate = ({ message }) => {
    if (!active) return

    const x = message.value[6]
    const y = message.value[7]
    
    message.send = false
    dispatch.sendRemoteMessage(`%xt%o%au%839225%1%${x}%${y}%${size}%1%`)
  }


  /**
   * Handles movement updates.
   */
  dispatch.onMessage({
    type: 'connection',
    message: 'au',
    callback: handleMovementUpdate
  })

  /**
   * Handles humongous command.
   */
  dispatch.onCommand({
    name: 'Underwater pose',
    description: 'pose anywhere! !!HYBRID ANIMAL REQ.!!',
    callback: handleHumongousCommand
  })
}
module.exports = function ({ dispatch }) {
  let active = false

  /**
   * Handles the humongous command. 
   * @returns 
   */
  const handleHumongousCommand = ({ parameters }) => {
    active = true

    size = parseInt(parameters[0]) || 35
    dispatch.serverMessage('swiming sideways rn you look so funny rn')
  }

  /**
   * Handles movement updates.
   * @param {Object} param The parameter object.
   * @param {Object} param.message The message object.
   * @returns 
   */
  const handleMovementUpdate = ({ message }) => {
    if (!active) return

    const x = message.value[6]
    const y = message.value[7]
    
    message.send = false
    dispatch.sendRemoteMessage(`%xt%o%au%839225%1%${x}%${y}%${size}%1%`)
  }


  /**
   * Handles movement updates.
   */
  dispatch.onMessage({
    type: 'connection',
    message: 'au',
    callback: handleMovementUpdate
  })

  /**
   * Handles humongous command.
   */
  dispatch.onCommand({
    name: 'Swim diagonal',
    description: 'swimming, but sideways. !!HYBRID ANIMAL REQ.!!',
    callback: handleHumongousCommand
  })
}