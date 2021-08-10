import {createUseStyles} from 'react-jss';
import {fluidTypoize} from '../util';

const useStyles = createUseStyles({
    app: {
        backgroundColor: "#000000", 
        color: "#eeeeee", 
        width: "100%", 
        minHeight: "100vh",
        padding: "10px"
    }, 
    title: {
        fontSize: fluidTypoize(16, 24, 350, 1200)
    }
});

function App() {
    const classes = useStyles();
    return (
        <div className={classes.app}>
            <div className={classes.title}>
                TINYPLACE (small) (real)
            </div>
        </div>
    );
}

export default App;
