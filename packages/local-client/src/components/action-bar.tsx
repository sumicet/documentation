import './action-bar.css';
import { useActions } from '../hooks/use-actions';

interface ActionBarProps {
    id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
    const { moveCell, deleteCell } = useActions();

    return (
        <div className="action-bar">
            <button
                style={{ height: '100%' }}
                className="button is-small"
                onClick={() => moveCell(id, 'up')}
            >
                <span className="icon">
                    <i className="fas fa-arrow-up" />
                </span>
            </button>
            <button
                style={{ height: '100%' }}
                className="button is-small"
                onClick={() => moveCell(id, 'down')}
            >
                <span className="icon">
                    <i className="fas fa-arrow-down" />
                </span>
            </button>
            <button
                style={{ height: '100%' }}
                className="button is-small"
                onClick={() => deleteCell(id)}
            >
                <span className="icon">
                    <i className="fas fa-times" />
                </span>
            </button>
        </div>
    );
};

export default ActionBar;
