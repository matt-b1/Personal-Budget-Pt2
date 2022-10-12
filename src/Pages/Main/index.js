import './index.css';

const handleSubmit = e => {
    e.preventDefault();
}

export const Main = () => {
        return (
            <form onSubmit={handleSubmit}>
                <label htmlFor="input">Test</label>
                <input type="text" id="input" name="input"></input>
                <input type="submit"></input>
            </form>
        )
    }
