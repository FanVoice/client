//Вынесла в utils так как эти стили глобальные (используются в нескольких местах)

export const goBackButtonStyles = {
    background: 'transparent',
    position: 'absolute',
    left: '0',
    top: '0',
    width: '24px',
    height: '24px',
    _hover: {
        background: 'transparent'
    }
};

export const categoriesContainerStyles = {
    display: 'flex',
    p: '0',
    gap: '20px',
    mt: '34px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '100%',
    marginTop: '26px !important',
};
