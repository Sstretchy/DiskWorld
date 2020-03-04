import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    props: {
    },
    palette: {
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#1976d2',
        },
    },
    overrides: {
        MuiPaper: {
            root: {
                backgroundColor: '#e5f2ff'
            }
        }
    },
});

export default theme;
