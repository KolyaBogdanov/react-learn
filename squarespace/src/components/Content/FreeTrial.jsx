import './Content.css'

let callAlert = () => {
    alert('Вы нажали на кнопачку');
};

export default function FreeTrial () {
    return (
        <div className='free_trial_wrapp'>
            <p className='free_trial_txt'>Squarespace is the all‑in‑one platform to build a beautiful website.</p>
            <button className='free_trial_btn' onClick={callAlert}>start a free trial</button>
        </div>
    )
}