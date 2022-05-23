import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Api from 'Services/Api';

const Ap = new Api();

export default function Form() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  async function onFormSubmit(ev) {
    ev.preventDefault();
    const film = await Ap.getMovie(input);
    console.log(film);
    // navigate();
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label>
        <input
          type="text"
          value={input}
          onChange={ev => setInput(ev.currentTarget.value)}
        />
        <button type="button">Search</button>
      </label>
    </form>
  );
}
