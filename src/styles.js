import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: 'column-reverse'
        }
    },
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'sticky',
        top: '0px'
    },
    heading: {
        color: 'rgba(0, 183, 255, 1)',
    },
    image: {
        marginLeft: '15px',
        objectFit: 'contain',
        height: '40px'
    },
    mainContainer: {
        border: '2px solid white',
        borderRadius: '10px'
    }
}));