export const formBoxStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  textAlign: 'center',
  boxSize: 'full',
  width: '328px',
  position: 'relative',
  minHeight: 'calc(100vh - 32px)'
}

export const formTextStyles = {
  fontSize: 'sm',
  fontWeight: 'normal',
}

export const formButtonStyles = {
  background: 'orange.500',
  color: 'white',
  width: '328px',
  height: '40px',
  _hover: {
    background: 'orange.600'
  },
  _active: {
    background: 'orange.600'
  }
}
export const formDisabledButtonStyles = {
  background: 'gray.100',
  color: 'white',
  width: '328px',
  height: '40px',
  pointerEvents: 'none',
}