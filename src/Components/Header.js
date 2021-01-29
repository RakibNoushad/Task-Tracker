import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ( {onAdd, buttonToggle} ) => {
    const location = useLocation();

    return (
        <header className="header">
            <h1>Task Tracker</h1>
            {location.pathname === '/' &&
            <Button 
            color={buttonToggle? 'red' : 'green'} 
            text={buttonToggle? 'Close' : 'Add'}
            onClick={onAdd}/>}
        </header>
    )
}

export default Header
