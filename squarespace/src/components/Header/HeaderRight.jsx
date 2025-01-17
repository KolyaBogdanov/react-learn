import React, { useState } from 'react';

const base = [{ name: '', mail: '' }]; 

export default function RegistrationPopup () {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '' });

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Предотвращаем перезагрузку страницы
        base.push({ name: formData.name, mail: formData.email }); // Добавляем данные в массив
        console.log(base); 
        setFormData({ name: '', email: '' }); // Сбрасываем форму
        togglePopup(); // Закрываем 
    };

    return (
        <div className="header_right">
            <a className='header_right_link' href="">log in</a>
            <button className='start_btn' onClick={togglePopup}>Registraion</button>
            {isOpen && (
                <div className="popup">
                    <div className="popup_content">
                        <p className="popup_content_title">Регистрация</p>
                        <form className='popup_label_form' onSubmit={handleSubmit}>
                            <label className='popup_label_for_name'>
                                <p className='popup_label_name'> Name:</p>
                                <input 
                                    className='popup_label_input' 
                                    type="text" 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                />
                            </label>
                            <label className='popup_label_for_name'>
                                <p className='popup_label_name'> Mail:</p>
                                <input 
                                    className='popup_label_input' 
                                    type="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                />
                            </label>
                            <button className='registration_btn' type="submit">Зарегистрироваться</button>
                        </form>
                        <button className='registration_btn' type="button" onClick={togglePopup}>Закрыть</button>
                    </div>
                </div>
            )}
        </div>
    );
};