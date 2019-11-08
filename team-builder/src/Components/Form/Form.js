import React, { useState } from 'react';
import './Form.css';

const Form = (props) => {
    const [member, setMember] = useState({ name: '', email: '', role: '' });

    const handleChange = (event) => {
        setMember({ ...member, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newMember = { ...member};
        props.addTeamMember(newMember);
        setMember({ name: '', email: '', role: '' });
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="name"
                    value={member.name}
                />

                <label>Email</label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="email"
                    value={member.email}
                />

                <label>Role</label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="role"
                    value={member.role}
                />
                <button className="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;