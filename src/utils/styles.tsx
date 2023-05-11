// Вынесла в utils так как эти стили глобальные (используются в нескольких местах)

export const goBackButtonStyles = {
    background: 'transparent',
    position: 'absolute',
    left: '0',
    top: '0',
    width: '24px',
    height: '24px',
    _hover: {
        background: 'transparent',
    },
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

export const h2TitleStyles = {
    fontSize: 'xl',
    mt: '13px',
    fontWeight: 'bold',
    lineHeight: '24px',
};

export const h3TitleStyles = {
    p: '0 5px',
    fontSize: 'md',
    fontWeight: 'bold',
    textAlign: 'center',
};

export const h2TitleWithButtonStyles = {
    fontSize: 'xl',
    mt: '13px',
    position: 'relative',
    width: '328px',
    textAlign: 'center',
    height: '44px',
};

export const h4HeadingStyles = {
    fontSize: 'md',
};

export const paragrapghStyles = {
    fontSize: 'sm',
    fontWeight: 'normal',
};
