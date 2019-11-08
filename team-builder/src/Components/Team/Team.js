import React, { useState } from 'react';

const Members = (props) => {
    const [members, setMembers] = useState([]);
    
    return (
        <div className="member-list">
            {members.map((member, i) => (
                <div className="member" key={i}>
                    <h2>{member.name}</h2>
                    <h3>{member.email}</h3>
                    <h3>{member.role}</h3>
                </div>
            ))}
        </div>
    );
};

export default Members;